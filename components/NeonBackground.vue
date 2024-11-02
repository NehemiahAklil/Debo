<script lang="ts" setup>

interface BackgroundProps {
  isFlipped?: boolean;
}

const props = withDefaults(defineProps<BackgroundProps>(), {
  isFlipped: false,
});
</script>

<template>
  <div class="flex items-center justify-center">
    <div class="absolute w-screen h-screen pt-10 inset-0 bg-no-repeat bg-center bg-[length:70%] blur-[250px]" :style="{
      'transform': props.isFlipped ? 'scaleX(-1)' : ''
    }" style="background-image: url('/background.svg')"> </div>
  </div>
</template>
