# Casa Serena — responsive landing page

[![Tests](https://github.com/ehoguerra/landing-page-demo/actions/workflows/tests.yml/badge.svg)](https://github.com/ehoguerra/landing-page-demo/actions/workflows/tests.yml)

A complete, dependency-free landing-page concept for a fictional interiors studio. Editorial typography, a warm palette and an original SVG room illustration support a simple journey from services to contact.

**HTML · CSS · JavaScript modules · No build step · MIT**

![Casa Serena: actual desktop screenshot](preview/desktop.png)

<details>
<summary>Mobile screenshot — 390 px</summary>

<img src="preview/mobile.png" alt="Casa Serena single-column mobile layout" width="390">

</details>

These are actual screenshots of the local demo. Casa Serena is a fictional brand and this is a self-directed portfolio project.

## Preview in one command

From the repository directory:

```sh
python3 -m http.server 8847 --bind 127.0.0.1
```

Open [localhost:8847](http://127.0.0.1:8847). A local HTTP server is needed for JavaScript modules; opening the HTML as a file may block them. No dependencies, external fonts, analytics or third-party scripts are loaded.

## What the page demonstrates

| Area | Implementation |
| --- | --- |
| Layout | Two-column hero, service grid, process, native FAQ and contact section |
| Responsive behavior | Layout changes at 900 px and 640 px; fluid headline sizing |
| Visual identity | CSS color tokens, system font stacks and inline SVG illustration |
| Keyboard interaction | Skip link, visible focus, native disclosure and modal dialog |
| Motion preferences | Smooth scrolling disabled when reduced motion is requested |
| Contact configuration | Pure URL builder, separate configuration and DOM wiring |

The default contact buttons open a local preview dialog. No phone number is configured and no message is sent. With JavaScript disabled, section navigation and the FAQ remain available; a visible fallback explains the contact preview.

## Code map

```text
index.html          Semantic sections, illustration and native dialog
style.css           Tokens, components and responsive breakpoints
config.mjs          Contact number and message
contact.mjs         Pure WhatsApp URL builder
app.mjs             Contact link / demonstration dialog behavior
contact.test.mjs    URL validation and encoding tests
preview/            Actual desktop and mobile screenshots
```

## Customize

1. Replace the fictional copy and illustration in `index.html` with approved content.
2. Adjust the color tokens at the top of `style.css`; component styles and breakpoints follow below.
3. Set an authorized international phone number and message in `config.mjs`. The URL builder accepts common formatting and validates the resulting digits. It does not verify number ownership or whether WhatsApp has an account for it.
4. Review demonstration notices and `noindex, nofollow` before publishing a real business version.

Opening a configured link takes a visitor to WhatsApp with a message draft. This code does not send it automatically.

## Test

Requires Node.js 22 or newer; no package installation is needed.

```sh
node --test contact.test.mjs
node --check app.mjs
```

Six tests cover an absent or malformed number, message encoding, invalid message types, empty messages, emojis and reserved characters. [GitHub Actions](https://github.com/ehoguerra/landing-page-demo/actions/workflows/tests.yml) runs the checks on Node.js 22 and 24.

See [validation notes](VALIDATION.md) for browser evidence and limits. See [design notes](DESIGN.md) for the visual and interaction decisions.

## Em português

Amostra de landing page para uma marca fictícia de interiores, com conteúdo em português. Para abrir, execute o servidor local acima. O telefone fica vazio por padrão: os botões exibem uma prévia, sem contato externo. Código, ilustração e documentação estão disponíveis sob a [licença MIT](LICENSE).
