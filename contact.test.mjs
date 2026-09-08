import test from 'node:test';
import assert from 'node:assert/strict';
import { whatsappUrl } from './contact.mjs';

test('não inventa destino quando o telefone não foi configurado', () => {
  assert.equal(whatsappUrl('', 'Olá'), null);
  assert.equal(whatsappUrl(null, 'Olá'), null);
});
test('aceita número internacional e codifica a mensagem', () => {
  const url = new URL(whatsappUrl('+55 (11) 91234-5678', 'Olá! Quero espaço & luz.'));
  assert.equal(url.origin, 'https://wa.me');
  assert.equal(url.pathname, '/5511912345678');
  assert.equal(url.searchParams.get('text'), 'Olá! Quero espaço & luz.');
});
test('rejeita telefone curto, longo ou com caracteres não telefônicos', () => {
  for (const phone of ['123', '0'.repeat(16), 'https://example.com', '5511abc912345678', '+0123456789']) {
    assert.equal(whatsappUrl(phone, 'Olá'), null, phone);
  }
});

test('rejeita mensagem de tipo inválido sem lançar exceção', () => {
  for (const message of [null, 123, {}, Symbol('invalid')]) {
    assert.equal(whatsappUrl('+55 (11) 91234-5678', message), null);
  }
});

test('usa mensagem vazia por padrão', () => {
  const url = new URL(whatsappUrl('+5511912345678'));
  assert.equal(url.searchParams.get('text'), '');
});

test('preserva emojis e caracteres reservados sem criar novos parâmetros', () => {
  const message = 'Olá 🌿\nEspaço + luz? #projeto & orçamento=sim';
  const url = new URL(whatsappUrl('+5511912345678', message));
  assert.equal(url.searchParams.get('text'), message);
  assert.deepEqual([...url.searchParams.keys()], ['text']);
  assert.equal(url.hash, '');
});
