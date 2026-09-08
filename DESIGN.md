# Design and interaction notes

Casa Serena presents an interiors service with enough detail to start a conversation. The page uses a single primary action across the hero and final contact section; the navigation also offers direct links to the service and process sections.

## Visual choices

- Deep teal (`--ink`) anchors text and primary actions. Warm off-white (`--paper`) keeps the page light; pale pink marks the final action.
- Georgia headlines create an editorial rhythm without a downloaded font. Body text uses the visitor's Avenir or Trebuchet system fallback.
- The SVG illustration shares the page palette and remains sharp at different widths. Its title and description identify it as a concept illustration.
- A constrained content width, generous spacing and a three-card service grid keep the sections readable. The grid becomes a single column on narrow screens.

## Interaction choices

The FAQ uses native `details` and `summary`, so it works without JavaScript. Contact uses a native modal `dialog` with named controls and a form using `method="dialog"`. Browser behavior supplies Escape dismissal and focus management. Visible focus styles and a skip link support keyboard navigation; the reduced-motion query removes smooth scrolling.

The contact-link builder is independent of the DOM. This keeps number parsing and message encoding easy to test. An empty or invalid configuration leaves the local demonstration dialog active. No contact data is stored or sent by the demo.

## Extension points

Keep brand content in HTML, reusable visual values in the CSS tokens, contact settings in `config.mjs`, and interaction wiring in `app.mjs`. A real client adaptation should agree on content, contact ownership, accessibility requirements and deployment before adding integrations. This repository intentionally has no CMS, form backend or analytics layer.
