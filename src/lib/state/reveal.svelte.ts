import { setContext, getContext } from 'svelte'

import type { Api as RevealApi } from 'reveal.js'

const REVEAL_KEY = Symbol('reveal')

type SlideEvent = Event & {
  previousSlide?: HTMLElement
  currentSlide?: HTMLElement
  indexh?: number
  indexv?: number
}

type FragmentEvent = Event & {
  fragment?: HTMLElement
}

export class RevealState {
  #reveal = $state.raw<RevealApi>()

  #currentSlide = $state<HTMLElement>()
  #displayLogo = $state(true)

  #lastFragmentShown = $state<HTMLElement>()
  #lastFragmentHidden = $state<HTMLElement>()

  handleSlideChanged(event: SlideEvent) {
    if (event && typeof event === 'object' && 'currentSlide' in event) {
      this.#currentSlide = event.currentSlide as HTMLElement
      this.#displayLogo =
        !this.#currentSlide?.classList.contains('section-no-logo')
    }
  }

  handleFragmentShown(event: FragmentEvent) {
    this.#lastFragmentShown = event.fragment
  }

  handleFragmentHidden(event: FragmentEvent) {
    this.#lastFragmentHidden = event.fragment
  }

  set reveal(reveal: RevealApi) {
    this.#reveal = reveal
  }

  get reveal(): RevealApi | undefined {
    return this.#reveal
  }

  get currentSlide() {
    return this.#currentSlide
  }

  get lastFragmentShown() {
    return this.#lastFragmentShown
  }

  get lastFragmentHidden() {
    return this.#lastFragmentHidden
  }

  get displayLogo() {
    return this.#displayLogo
  }
}

export function setRevealState() {
  return setContext(REVEAL_KEY, new RevealState())
}

export function getRevealState() {
  const revealState = getContext<ReturnType<typeof setRevealState>>(REVEAL_KEY)

  if (!revealState) {
    throw new Error('RevealState is not set')
  }

  return revealState
}
