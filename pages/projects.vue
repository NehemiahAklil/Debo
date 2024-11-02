<script setup>
// import { AddDialog } from "@/components/AddDialog";
// import { RepoCard } from "@/components/RepoCard";
// import SearchInput from "@/components/Search";
// import { Button } from "@/components/ui/button";
</script>
<template>
  <div>
    <section class="py-10 flex justify-center">
      <div class="w-2/3 flex flex-row justify-between">
        <h1 class="leading-tight text-6xl p-x-100 w-2/3 text-left">
          Your Projects
        </h1>
        <div class="w-2/3 flex justify-end gap-6 items-center">
          <div class="flex items-center">
            <AddDialog />
          </div>
          <div class="flex items-center">
            <Button class="font-sans text-2xl text-white bg-secondary-gradient glow-secondary px-4" variant="secondary"
              size="lg">Delete</Button>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-10 flex gap-6 items-center justify-center"></section>
    <section class="mt-10 flex justify-center">
      <div class="w-2/3 flex gap-10 flex-col justify-start">
        <RepoCard name="S.M.A" author="Robiwork" description="End-to-End Encrypted chat" star="{21}"
          contributor="{122}" />
        <RepoCard name="Abacus" author="Nehemiah" description="End-to-End Encrypted chat" star="{21}"
          contributor="{122}" />
        <RepoCard name="Menab-auth" author="Bese" description="End-to-End Encrypted chat" star="{21}"
          contributor="{122}" />
        <RepoCard name="Oasis" author="Ezra" description="End-to-End Encrypted chat" star="{21}" contributor="{122}" />
        <RepoCard name="FindMyDog" author="Eyuel" description="End-to-End Encrypted chat" star="{21}"
          contributor="{122}" />
      </div>
    </section>
  </div>
</template>
