<!-- Tadiwanashe Chigeza -->
 <!-- u23734176 -->
<script setup>
    const { find } = useStrapi() // import find function from useStrap.ts 
    const searchTerm = ref('') //string of the search 
    const postsResponse = await find('blogs?populate=*') //get the API 
    const posts = computed(() => postsResponse.data || []) // get the different posts 
    
    // filter 
    const filteredPosts = computed(() => {
        const term = searchTerm.value.toLowerCase().trim()

  if (!term) {
    return posts.value
  }

  return posts.value.filter((post) => {
    const title = post.Title?.toLowerCase() || ''
    const authorName = post.author?.Name?.toLowerCase() || ''
    const authorSurname = post.author?.Surname?.toLowerCase() || ''
    const fullAuthor = `${authorName} ${authorSurname}`

    return (
      title.includes(term) ||
      authorName.includes(term) ||
      authorSurname.includes(term) ||
      fullAuthor.includes(term)
    )
  })
})
</script>

<template>
  <main>
    <h1>Search Blog Posts</h1>
    <p>
      Search for a blog post by title or author.
    </p>
    <input
      v-model="searchTerm"
      type="text"
      placeholder="Search by blog title or author name"
    />
    <section>
      <article
        v-for="post in filteredPosts"
        :key="post.documentId"
      >
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
        No matching blog posts found.
      </p>
    </section>
  </main>
</template>

<style scoped>
    h1 {
  margin-top: 0;
  font-size: 34px;
}

input {
  width: 100%;
  padding: 12px;
  margin: 16px 0 24px;
  border: 1px solid #bbb;
  border-radius: 8px;
  font-size: 16px;
}

input:focus {
  outline: none;
  border-color: #2563eb;
}

section {
  margin-top: 20px;
}

article {
  padding: 18px;
  margin-bottom: 18px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: #fafafa;
}

article h2 {
  margin-top: 0;
  font-size: 24px;
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
