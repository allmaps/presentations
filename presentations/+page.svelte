<script lang="ts">
  type PresentationModule = {
    title: string
    subtitle?: string
    date?: number
  }

  const modules = import.meta.glob('./*/**/+page.svelte', {
    eager: true
  }) as Record<string, PresentationModule>

  type Presentation = PresentationModule & {
    href: string
    year: number
  }

  const presentationsByDate: Presentation[] = Object.entries(modules)
    .map(([href, module]) => ({
      href: href.replace('+page.svelte', ''),
      title: module.title,
      subtitle: module.subtitle,
      date: module.date || 0,
      year: module.date ? new Date(module.date).getFullYear() : 0
    }))
    .sort((a, b) => (b.date && a.date ? b.date - a.date : 0))

  const presentationsGroupedByYear = Map.groupBy(
    presentationsByDate,
    ({ year }) => year
  )
</script>

<article class="p-8 max-w-lg mx-auto space-y-8">
  <h1 class="py-2 font-bold text-center">Presentations about Allmaps</h1>
  <ol class="space-y-8">
    {#each [...presentationsGroupedByYear.entries()] as [year, presentations]}
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
