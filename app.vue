<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts">
import { useColorMode } from "@vueuse/core";
import Navbar from "./components/Navbar.vue";

document?.querySelector("html")?.setAttribute("data-theme", "corporate");
const colorMode = useColorMode();
colorMode.value = "dark";
</script>
