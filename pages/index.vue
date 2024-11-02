<script lang="ts" setup></script>

<template>
  <div>
    <section class="py-12 flex flex-col gap-8 items-center text-align">
      <h1 class="leading-tight text-[5.5rem] p-x-100 w-2/3 text-center">
        Discover and share your
        <br />
        Local Open Source Projects
      </h1>
    </section>
    <section class="flex gap-6 items-center justify-center">
      <div class="flex items-center cursor-pointer hover:bg-primary/30 rounded-md">
        <Button class="font-sans rounded-r-none text-2xl text-white bg-main-gradient glow" size="lg">Projects</Button>
        <Button class="font-sans rounded-l-none text-2xl text-white glow bg-primary/50 px-4" size="lg">122</Button>
      </div>
      <div class="flex items-center cursor-pointer hover:bg-secondary/30 rounded-md">
        <Button class="font-sans rounded-r-none text-2xl text-white bg-secondary-gradient glow-secondary px-4"
          variant="secondary" size="lg">Developers</Button>
        <Button class="font-sans rounded-l-none text-2xl text-white glow-secondary bg-secondary/50 px-4"
          variant="secondary" size="lg">12</Button>
      </div>
      <div class="flex items-center cursor-pointer hover:bg-primary/30 rounded-md">
        <Button class="font-sans rounded-r-none text-2xl text-white bg-main-gradient glow" size="lg">Users</Button>
        <Button class="font-sans rounded-l-none text-2xl text-white glow bg-primary/50 px-4" size="lg">12</Button>
      </div>
    </section>

    <section class="mt-10 flex justify-center">
      <div class="my-5 w-2/3 flex gap-10 flex-col justify-start">
        <h1 class="mt-10 text-4xl w-full text-left">New Projects</h1>
        <div class="flex flex-row gap-6">
          <RepoCard name="S.M.A" author="Robiwork" description="End-to-End Encrypted chat" :star="21"
            :contributor="122" />
          <RepoCard name="Menab-auth" author="Bese" description="End-to-End Encrypted chat" :star="21"
            :contributor="122" />
        </div>
      </div>
    </section>
    <section class="flex justify-center">
      <div class="mb-10 w-2/3 flex gap-10 flex-col justify-start">
        <h1 class="mt-10 text-4xl w-full text-left">Trending Projects</h1>
        <div class="flex flex-row gap-6">
          <RepoCard name="Oasis" author="Ezra" description="End-to-End Encrypted chat" :star="21" :contributor="122" />
          <RepoCard name="FindMyDog" author="Eyuel" description="End-to-End Encrypted chat" :star="21"
            :contributor="122" />
        </div>
      </div>
    </section>
  </div>
</template>
