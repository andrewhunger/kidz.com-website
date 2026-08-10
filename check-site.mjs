# Kidz.com website

A portable static website for Kidz.com in Stratford, New Zealand. It uses plain HTML, CSS and JavaScript, so it can be hosted on Cloudflare Pages, GitHub Pages, Netlify, almost any ordinary web host, or opened locally for review.

## Preview locally

The simplest option is to open `index.html` in a browser. For a local web server, run this inside the project folder:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Pages

- `index.html` — homepage
- `programmes.html` — before- and after-school care
- `holidays.html` — holiday programme
- `parent-info.html` — hours, enrolment, subsidy and FAQs
- `about.html` — approach and staff profiles
- `blog.html` — termly blog index
- `posts/july-holidays.html` — sample blog layout

## Important content locations

- Main styles: `assets/styles.css`
- Navigation, mobile menu and photo-flip timing: `assets/site.js`
- Staff images: `assets/images/staff/`
- Hero image placeholder: `assets/images/hero-art.svg`

## Staff photograph flip

The biography never moves. Only the image switches:

1. Normal staff photo shows for about ten seconds.
2. Alter-ego photo shows for three seconds.
3. It returns to the staff photo.
4. Each staff card is staggered so the whole grid does not move at once.
5. Hovering or tapping flips a photograph immediately.
6. Automatic motion is disabled for visitors who prefer reduced motion.

To add real photographs, place approved files in `assets/images/staff/` and update the two image paths in the appropriate card in `about.html` and `index.html`.

## Enrolment email

The current preview uses `office@mountainviewvineyard.org` for Ann. Confirm this before launch. All enrolment buttons are ordinary `mailto:` links, and no private child information is stored by this website.

## Blog

The blog is already styled and can remain hidden from navigation until the first real post is ready. Copy the sample file in `posts/`, replace the wording, then add its card to `blog.html`.

## Social links

Facebook and Instagram buttons are present but deliberately disabled until the correct Kidz.com URLs are supplied. Search for `aria-disabled="true"` to find them.

## Before publishing

Work through `CONTENT_CHECKLIST.md`, replace all placeholders, check every link and review the website on both a phone and computer.
