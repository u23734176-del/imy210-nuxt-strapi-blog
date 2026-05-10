<!-- Tadiwanashe Chigeza -->
<!-- u23734176 -->
 <!-- Navigation Componetnt -->
<script setup>
    const route = useRoute()

    const isBlogPage = computed(() => {
    return route.path.startsWith('/blog/')
})
</script>
<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink> | 
    <NuxtLink to="/search">Search</NuxtLink>
    <span v-if="isBlogPage"> | 
      
      <NuxtLink to="/">Go back Home</NuxtLink>
    </span>
  </nav>
</template>
