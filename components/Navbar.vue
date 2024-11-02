<template>
  <nav class="px-7">
    <div class="w-full max-w-full px-2">
      <div class="flex justify-between h-20 w-full">
        <NuxtLink class="flex space-x-4 items-center" to="#">
          <NuxtImg src="/logo.svg" alt="Vercel Logo" class="w-20" :width="10" :height="10" priority />
          <span class="text-4xl font-medium">Debo</span>
        </NuxtLink>
        <nav class="hidden md:flex gap-10">
          <NuxtLink to="/" class="flex items-center text-4xl transition-colors hover:underline">
            Discover
          </NuxtLink>
          <NuxtLink to="/explore" class="flex items-center text-4xl transition-colors">
            Explore
          </NuxtLink>
          <NuxtLink to="/projects" class="flex items-center text-4xl transition-colors hover:underline">
            My Projects
          </NuxtLink>
        </nav>
        <div class="flex items-center">
          <NuxtLink to="/login">
            <Button
              class="font-sans font-normal rounded-r-none text-3xl text-white bg-main-gradient hover:bg-primary/20"
              size="xl">Login</Button>
          </NuxtLink>
          <NuxtLink to="/signup">
            <Button class="font-sans font-normal rounded-l-none text-3xl text-white bg-primary/60" size="xl">
              Sign up
            </Button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>
