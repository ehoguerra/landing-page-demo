# Validation evidence

## Automated checks

On 2026-09-08, `node --test contact.test.mjs` passed all **six tests** locally. `node --check app.mjs` also passed. The suite tests URL construction without opening WhatsApp or sending messages.

A new regression case reproduced a non-string message being serialized as `text=null`; the builder now returns `null` for invalid message types, allowing the caller to retain the local preview. Other tests cover telephone validation, Unicode and reserved-character encoding.

The [Actions workflow](https://github.com/ehoguerra/landing-page-demo/actions/workflows/tests.yml) runs syntax checks and tests on Node.js 22 and 24. Inspect the run for the relevant commit to confirm its CI result.

## Browser checks

The original page was inspected in a local browser on desktop and at mobile widths of 320 and 390 px, with no horizontal overflow observed. The contact dialog, Escape dismissal, focus return and FAQ expansion were exercised. The `preview/` files are actual screenshots of those local layouts.

The stylesheet was expanded into readable component blocks without changing its CSS tokens. This is a source-formatting change, not a visual redesign.

Not claimed: a full accessibility audit, every browser or assistive technology, real WhatsApp delivery, field performance measurements, or a deployed commercial site.
