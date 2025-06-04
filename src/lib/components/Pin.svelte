<script lang="ts">
  import Pin from '$lib/shared/images/pin.svg'
  import PinShadow from '$lib/shared/images/pin-shadow.svg'
</script>

<div class="relative inline-block w-12 h-8 top-1">
  <div
    class="absolute left-0 top-0 bg-pink inline-block w-full h-full rounded-[100%_100%]"
  ></div>

  <div class="absolute left-0 top-0 fragment w-full h-full">
    <div class="absolute slide-right right-[-135%] scale-80 h-full">
      <img src={PinShadow} alt="Shadow" class="h-full" />
    </div>
    <div class="absolute slide-down top-[-200%] w-full">
      <img src={Pin} alt="Pin" class="w-full" />
    </div>
  </div>
</div>

<style scoped>
  .slide-down {
    animation-duration: 2s;
    animation-name: slide-down;
    animation-iteration-count: 1;
    animation-direction: normal;
  }

  .slide-right {
    animation-duration: 2s;
    animation-name: slide-right;
    animation-iteration-count: 1;
    animation-direction: normal;
  }

  @keyframes slide-down {
    0% {
      transform: translate(0, -2000%);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes slide-right {
    0% {
      transform: translate(2000%, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }
</style>
