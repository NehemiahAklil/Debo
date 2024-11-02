<template>
  <Dialog>
    <DialogTrigger asChild>
      <Button class="text-2xl text-white bg-main-gradient glow" size="lg"
        >Add</Button
      >
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Create Project</DialogTitle>
        <DialogDescription
          >Add your new open source project.
        </DialogDescription>
      </DialogHeader>
      <form>
        <div class="grid w-full items-center gap-4">
          <div class="flex flex-col space-y-1.5">
            <Label>Name</Label>
            <Input id="name" placeholder="Name of your project" />
          </div>
          <div class="flex flex-col space-y-1.5">
            <Label>Description</Label>
            <Input id="name" placeholder="Description of your project" />
          </div>
          <div class="flex flex-col space-y-1.5">
            <Label>Owner Link</Label>
            <Input id="name" placeholder="Link of your project" />
          </div>
          <div class="flex flex-col space-y-1.5">
            <Label> Tags </Label>
            <Select>
              <SelectTrigger id="framework">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="next">Next.js</SelectItem>
                <SelectItem value="sveltekit">SvelteKit</SelectItem>
                <SelectItem value="astro">Astro</SelectItem>
                <SelectItem value="nuxt">Nuxt.js</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </form>
      <DialogFooter>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
