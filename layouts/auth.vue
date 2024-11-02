<script setup></script>
<template>
  <div class="w-screen h-screen">
    <!-- <NeonBackground class="opacity-45" :isFlipped="true" /> -->
    <NeonBackground class="opacity-45" :isFlipped="false" />
    <div class="h-full flex items-center justify-center relative">
      <slot />
    </div>
  </div>
</template>
