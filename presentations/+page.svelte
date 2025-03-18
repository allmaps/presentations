<script lang="ts">
  import { onMount } from 'svelte'

  const presentationImports = import.meta.glob('./**/+page.svelte')
  const presentationFiles = Object.keys(presentationImports)

  type Presentation = {
    href: string
    title: string
    subtitle?: string
    date?: number
  }

  let presentationsByYear: Map<number, Presentation[]> = new Map()

  onMount(async () => {
    const presentationsFromImports: Presentation[] = []

    for await (const presentation of presentationFiles) {
      const module = await import(presentation)

      const href = presentation.replace('./', '').replace('/+page.svelte', '')

      const title = module.title ? String(module.title) : href
      const subtitle = module.subtitle
      const date = module.date ? Number(module.date) : 0

      presentationsFromImports.push({
        href,
        title,
        subtitle,
        date
      })
    }

    presentationsByYear = Map.groupBy(
      presentationsFromImports.toSorted((a, b) =>
        b.date && a.date ? b.date - a.date : 0
      ),
      (presentation) =>
        presentation.date ? new Date(presentation.date).getFullYear() : 0
    )
  })
</script>

<article class="p-8 max-w-lg mx-auto space-y-8">
  <h1 class="py-2 font-bold text-center">Presentations about Allmaps</h1>
  <ol class="space-y-8">
    {#each [...presentationsByYear.entries()] as [year, presentations]}
      <li class="space-y-2">
        <div class="font-bold">{year > 0 ? year : 'Other presentations'}:</div>
        <ol class="ml-4 list-disc">
          {#each presentations as presentation}
            <li>
              <a
                class="underline"
                data-sveltekit-reload
                href={presentation.href}
                >{presentation.title}
                {#if presentation.subtitle}
                  <span class="italic"> - {presentation.subtitle}</span>
                {/if}
              </a>
            </li>
          {/each}
        </ol>
      </li>
    {/each}
  </ol>
  <p class="py-2 bg-pink p-8 rounded-md text-white">
    The source code of these presentations can be found on <a
      class="underline"
      href="https://github.com/allmaps/presentations">GitHub</a
    >.
  </p>
</article>
