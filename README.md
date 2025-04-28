# Allmaps Presentations

Presentations about Allmaps for various events and conferences.

See https://presentations.allmaps.org.

Built using [Reveal.js](https://revealjs.com/), [SvelteKit](https://kit.svelte.dev/) and [Tailwind CSS](https://tailwindcss.com/).

## Run locally

To run this repository locally, first install its dependencies:

```bash
pnpm install
```

Then:

```bash
pnpm run dev
```

## Configuration

[`presentations/app.css`](presentations/app.css) contains a few useful Tailwind presets and [utility patterns](https://tailwindcss.com/docs/reusing-styles#extracting-classes-with-apply).

To override a default styles of a `<section>`, you can use the following classes:

- `.section-stretch`: Stretch grid items
- `.section-horizontal`: Horizontal grid items (instead of vertical)
- `.section-full`: No padding and gap
- `.image-cover`: Full width and height and `object-fit: cover;` for images

[Reveal.js configuration](https://revealjs.com/config/) can be found in `src/reveal.config.ts`(src/reveal.config.ts).

### Add a new presentation

To add a new presentation, create a new subdirectory in [`presentations`](presentations). In this new subdirectory, create a file called `+page.svelte`.

In this Svelte file, each slide is placed in a `<section>` element. Each section is a [CSS grid](https://css-tricks.com/snippets/css/complete-guide-grid/) which you can customize with Tailwind classed.

Static files like images and JSON files can be placed in a new subdirectory in [`static`](static).

_This repository is based on code from https://github.com/rajasegar/svelte-slides._
