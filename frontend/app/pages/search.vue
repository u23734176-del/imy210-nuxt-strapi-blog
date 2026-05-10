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
