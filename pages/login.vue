"use client"
<script setup>
definePageMeta({
  layout: "auth",
});
/*import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label"; */
</script>
<template>
  <main class="h-full w-4/6 max-w-8xl flex items-center justify-center">
    <Card class="h-4/6 w-full py-24 px-10 rounded-r-none transitional-gradient border-0">
      <CardHeader class="gap-10">
        <div class="flex justify-center">
          <NuxtImg src="/logo.svg" alt="Vercel Logo" class="w-2/5" :width="10" :height="10" priority />
        </div>
        <CardTitle class="font-sans font-normal flex flex-col gap-3 text-xl text-white text-center">
          <h1 class="text-4xl font-normal text-center">
            Welcome Back
          </h1>
          Login to continue your collaboration with our community
        </CardTitle>
      </CardHeader>
    </Card>
    <Card class="h-3/5 w-full py-24 px-10 rounded-l-none repo-gradient border-0">
      <form class="flex flex-col w-full h-fit justify-center gap-7">
        <div class="flex flex-col space-y-4">
          <Label class="text-xl font-normal">Username</Label>
          <Input class="bg-primary/10 placeholder:text-white placeholder:text-[1.1em] hover:outline-none" id="name"
            placeholder="Enter your username" />
        </div>
        <div class="flex flex-col space-y-4">
          <Label class="text-xl font-normal">Password</Label>
          <Input class="bg-primary/10 placeholder:text-white placeholder:text-[1.1em]" id="name" type="password"
            placeholder="Enter your password" />
        </div>
        <div class="flex justify-center w-full">
          <Button class="text-lg  text-white w-full">Login</Button>
        </div>
      </form>
    </Card>
  </main>
</template>
