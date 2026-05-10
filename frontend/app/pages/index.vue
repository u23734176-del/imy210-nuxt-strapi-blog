<!-- Tadiwanashe Chigeza -->
 <!-- U23734176 -->
<script setup>
const { find } = useStrapi()

const selectedCategory = ref('') // show different categories of the page 
const postsResponse = await find('blogs?populate=*') // the data 
const categoriesResponse = await find('categories') //response for Categorey request 

const posts = computed(() => postsResponse.data || []) 
const categories = computed(() => categoriesResponse.data || [])

const filteredPosts = computed(() => {
  if (!selectedCategory.value) {
    return posts.value
  }
  return posts.value.filter((post) => {
    return post.category?.Name === selectedCategory.value
  })
})
</script>

<template>
  <main>
    <h1>All Blog Posts</h1>
    <section>
      <label for="category">Filter by category:</label>
      <select id="category" v-model="selectedCategory">
        <option value="">All categories</option>
        <option
          v-for="category in categories"
          :key="category.documentId"
          :value="category.Name"
        >
          {{ category.Name }}
        </option>
      </select>
    </section>
    <section>
      <article
        v-for="post in filteredPosts"  :key="post.documentId" >
        <h2>{{ post.Title }}</h2>
        <p>
          <strong>Author:</strong>
          {{ post.author?.Name }} {{ post.author?.Surname }}
        </p>
        <p>
          <strong>Category:</strong>
          {{ post.category?.Name }}
        </p>
        <p>
          {{ post.Abstract }}
        </p>
        <NuxtLink :to="`/blog/${post.documentId}`">
          Read full blog post
        </NuxtLink>
        <hr />
      </article>
      <p v-if="filteredPosts.length === 0">
        No blog posts found.
      </p>
    </section>
  </main>
</template>
