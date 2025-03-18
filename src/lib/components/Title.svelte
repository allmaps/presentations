<script lang="ts">
  import logo from '$lib/shared/images/allmaps-logo.svg'
  import logoInverted from '$lib/shared/images/allmaps-logo-inverted.svg'

  export let dark = true

  type Background = {
    image: string
    size: string
    position: string
  }

  let backgrounds: Background[] = [
    {
      image: 'url(/masks.svg)',
      size: '120%',
      position: 'center'
    }
  ]

  if (dark) {
    backgrounds.push({
      image: 'radial-gradient(circle at 50% 50%, #25318f, #101656)',
      size: 'cover',
      position: 'center'
    })
  }

  const backgroundImage = backgrounds
    .map((background) => background.image)
    .join(', ')

  const backgroundSize = backgrounds
    .map((background) => background.size)
    .join(', ')

  const backgroundPosition = backgrounds
    .map((background) => background.position)
    .join(', ')
</script>

<section
  class="flex flex-col gap-5 justify-center items-center section-no-logo bg-white"
  style:background-image={backgroundImage}
  style:background-size={backgroundSize}
  style:background-position={backgroundPosition}
>
  <img class="w-44" alt="Allmaps logo" src={dark ? logoInverted : logo} />
  <div class="max-w-lg">
    <slot />
  </div>
</section>
