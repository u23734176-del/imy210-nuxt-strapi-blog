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

<style scoped>
    nav {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
}

a {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 20px;
  background: #f9fafb;
  color: #333;
  text-decoration: none;
}

a:hover {
  background: #e5e7eb;
}

a.router-link-active {
  background: #2563eb;
  color: white;
  border-color: #2563eb;
}

</style>
