<script setup></script>
<template>
  <div>
    <section class="py-12 flex flex-col gap-8 items-center text-align">
      <h1 class="leading-tight text-[5.5rem] p-x-100 w-2/3 text-center">
        Explore
      </h1>
    </section>
    <section class="flex justify-center">
      <div class="w-2/3">
        <SearchInput></SearchInput>
      </div>
    </section>
    <section class="mt-10 flex gap-6 items-center justify-center">
      <div class="w-2/3 flex justify-start gap-6 items-center">
        <div class="flex items-center">
          <Button
            class="font-sans rounded-r-none text-2xl text-white bg-main-gradient glow"
            size="lg"
            >Flutter</Button
          >
          <Button
            class="font-sans rounded-l-none text-2xl text-white glow bg-primary/50 px-4"
            size="lg"
            >34</Button
          >
        </div>
        <div class="flex items-center">
          <Button
            class="font-sans rounded-r-none text-2xl text-white bg-secondary-gradient glow-secondary px-4"
            variant="secondary"
            size="lg"
            >OOP</Button
          >
          <Button
            class="font-sans rounded-l-none text-2xl text-white glow-secondary bg-secondary/50 px-4"
            variant="secondary"
            size="lg"
            >10</Button
          >
        </div>
      </div>
    </section>
    <section class="mt-10 flex justify-center">
      <div class="w-2/3 flex gap-10 flex-col justify-start">
        <RepoCard
          name="S.M.A"
          author="Robiwork"
          description="End-to-End Encrypted chat"
          star="{21}"
          contributor="{122}"
        />
        <RepoCard
          name="Abacus"
          author="Nehemiah"
          description="End-to-End Encrypted chat"
          star="{21}"
          contributor="{122}"
        />
        <RepoCard
          name="Menab-auth"
          author="Bese"
          description="End-to-End Encrypted chat"
          star="{21}"
          contributor="{122}"
        />
        <RepoCard
          name="Oasis"
          author="Ezra"
          description="End-to-End Encrypted chat"
          star="{21}"
          contributor="{122}"
        />
        <RepoCard
          name="FindMyDog"
          author="Eyuel"
          description="End-to-End Encrypted chat"
          star="{21}"
          contributor="{122}"
        />
      </div>
    </section>
  </div>
</template>
