<script lang="ts" setup>
// import { fontSans } from "@/lib/config";
interface repoProps {
  name: string;
  author: string;
  description: string;
  star: number;
  contributor: number;
}
const props = withDefaults(defineProps<repoProps>(), {});
</script>
<template>
  <Card class="w-full repo-gradient glow border-0">
    <CardHeader>
      <CardTitle class="font-normal">{{
        props.name + "/" + props.author
      }}</CardTitle>
      <CardDescription class="text-white"
        >Deploy your new project in one-click.</CardDescription
      >
    </CardHeader>
    <CardContent> </CardContent>
  </Card>
</template>
