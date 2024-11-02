<script setup></script>
<template>
  <div class="flex flex-col min-h-screen">
    <NeonBackground />
    <main class="p-8 h-screen w-full z-10 flex flex-col gap-36 relative">
      <Navbar />
      <slot />
      <!-- {/* <Footer /> */} -->
    </main>
  </div>
</template>
