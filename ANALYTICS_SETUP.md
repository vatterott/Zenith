# Zenith website analytics setup

The website contains an active Plausible Analytics integration for `myzenith.org`.

## Current configuration

The site-specific Plausible script URL is stored in `assets/analytics-config.js`, and `enabled` is set to `true`. No API key, account password or shared-link password is stored in the repository.

After deployment, use Plausible's installation test on `https://myzenith.org/` and confirm that the website timezone is `Europe/Berlin`.

Tracking stays disabled on `localhost` and when Global Privacy Control or Do Not Track is enabled.

## Recommended goals

Create these custom-event goals in Plausible using the names exactly as written:

- `Indiegogo CTA`
- `Pitch Intent`
- `Pitch Video Start`
- `Pitch Video Complete`
- `Contact Intent`
- `Contact Form Submit`

Plausible measures page views and scroll depth independently. The integration also enables outbound-link, file-download and form-submission measurement.

## Private access

`/analytics.htm` is deliberately absent from the public site navigation and marked `noindex`. It contains no statistics, credentials or API key. Its dashboard button opens `https://plausible.io/myzenith.org`; the actual metrics remain protected by the Plausible account login.

GitHub Pages cannot enforce authentication for an individual HTML path. Do not embed a public or unprotected shared dashboard in `analytics.htm`.
