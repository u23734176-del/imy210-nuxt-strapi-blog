<!-- Tadiwanashe Chigeza -->
 <!-- U23734176 -->
<script setup>
    const { find } = useStrapi()
    const selectedCategory = ref('')
    const postsResponse = await find('blogs?populate=*')
    const categoriesResponse = await find('categories')

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
    <h1>Home</h1>
    <p>
      Welcome to my blog website. Browse all blog posts below.
    </p>

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

      <h2>Blog Posts</h2>

      <article
        v-for="post in filteredPosts"
        :key="post.documentId"
      >
        <h3>{{ post.Title }}</h3>
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
        <!-- Allows to pass the document to the blog page  -->
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


<style scoped>
    h1 {
  margin-top: 0;
  font-size: 34px;
}

h2 {
  margin-top: 28px;
  font-size: 26px;
}

h3 {
  margin-bottom: 8px;
  font-size: 22px;
}

section {
  margin-bottom: 24px;
}

label {
  font-weight: bold;
  margin-right: 8px;
}

select {
  padding: 8px;
  border: 1px solid #bbb;
  border-radius: 6px;
}

article {
  padding: 18px;
  margin-bottom: 18px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: #fafafa;
}

article p {
  line-height: 1.6;
}

hr {
  border: none;
  border-top: 1px solid #ddd;
  margin-top: 18px;
}
</style>
