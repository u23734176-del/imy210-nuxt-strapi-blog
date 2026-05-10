<!-- Tadiwanashe Chigeza -->
 <!-- u23734176 -->
<script setup>
  import index from './pages/index.vue';

</script>
<template>
  <div>
    <header>
      <h1>My Blog Website</h1>
      
      <Navigation />
    </header>
    <NuxtPage />
  </div>
</template>
<style>
  * {
  box-sizing: border-box;
  }

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #f4f6f8;
  color: #222;
}

.app, body > div {
  max-width: 1000px;
  margin: 0 auto;
  padding: 24px;
}

header {
  background: white;
  padding: 20px;
  margin-bottom: 24px;
  border-radius: 12px;
  border: 1px solid #ddd;
}

header h1 {
  margin: 0 0 12px;
  font-size: 28px;
}

main {
  background: white;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #ddd;
}

a {
  color: #2563eb;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}
</style>
