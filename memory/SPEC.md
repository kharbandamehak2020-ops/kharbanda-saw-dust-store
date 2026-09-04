# Kharbanda Saw Dust Store — Living Spec

## Product
Modern, mobile-first industrial website for Kharbanda Saw Dust Store, a family-owned wood dust processing, manufacturing and supply business trusted since 1974. The public preview is `https://timber-material-hub.preview.emergentagent.com`.

## Business data
- Founder: Mr. Radha Kishan Kharbanda
- Current second generation: Mr. Ashok Kumar Kharbanda
- Products: saw dust, wood powder, wood shavings, wooden flakes
- Service: Industrial supply nationwide across India; different wood species and qualities subject to requirement
- Delhi office: K-11, Sawan Park, Ashok Vihar, Phase-3, Delhi - 110052, India
- Factory: Plot No. 42, Industrial Estate Phase-II, Yamuna Nagar - 135001, Haryana, India
- Phones: +91 9999994828, +91 8888882740, +91 9999504828
- Email: kharbanda_saw_dust_store@yahoo.co.in

## Key flows
- Internal navigation uses React Router in one site shell; no internal link opens a new tab.
- Product and application cards link internally to related product or contact paths.
- Contact enquiry form collects name, company, phone/WhatsApp, location, required quantity, intended application and message, then opens WhatsApp with a pre-filled message. No email/backend submission is claimed.
- Delhi map navigation targets the Google listing for Kharbanda Saw Dust Store, Sawan Park, Ashok Vihar, while the crawlable office address remains K-11, Sawan Park, Ashok Vihar - Phase 3, Delhi - 110052, Near Picnic Hut.
- Yamuna Nagar map navigation targets the Google listing for Satnam Industries, Industrial Area, Yamuna Nagar, while the crawlable factory address remains Plot No. 42, Industrial Estate Phase-II, Yamuna Nagar - 135001, Haryana.
- Homepage hero omits the quote and WhatsApp buttons and presents an interactive 3D wood K emblem with tree, timber rings and sawdust particles.
- Saw dust and wood powder use separate, matching material photographs across Home and Products.
- Persistent floating WhatsApp CTA uses +91 9999994828.
- Home, About Us, Our Legacy, Products, Applications, Blog and Contact routes are implemented.
- `sitemap.xml` and `robots.txt` are public frontend assets. Dynamic page metadata, canonical URLs and JSON-LD are managed by the `Seo` component.

## Design
Light warm-beige canvas, deep forest green, dark wood brown and warm amber with dimensional card shadows and restrained 3D motion. Saira is the industrial display face and Manrope is the readable body face. The generated 3D K emblem is prominent on the homepage; the requested special-packaging photo appears in the gallery. The legacy page intentionally has no portrait or image placeholders.

## Auth and roles
No authentication or gated areas.

## Integrations
No analytics, Search Console verification or email provider IDs are inserted. Google Maps is represented by public embed cards/links, and WhatsApp is a direct `wa.me` link.