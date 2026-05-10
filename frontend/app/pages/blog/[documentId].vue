<!-- Tadiwanashe Chigeza  -->
<!-- u23734176 -->
<script setup>
    import MarkdownIt from 'markdown-it'
    const route = useRoute()
    const { find } = useStrapi()
    const documentId = route.params.documentId
    const response = await find(`blogs/${documentId}?populate=*`)
    const post = computed(() => response.data)
    const md = new MarkdownIt()

    const convertBlocksToMarkdown = (blocks) => {
    if (!blocks) {
        return ''
    }
  return blocks
    .map((block) => {
      const text = block.children
        ?.map((child) => child.text || '').join('') || ''
      return text
    })
    .join('\n\n')
}
const renderedContent = computed(() => {
  if (!post.value?.Content) {
    return ''
  }
  const markdownText = convertBlocksToMarkdown(post.value.Content)
  return md.render(markdownText)
})
</script>

<template>
  <main>
    <article v-if="post">
      <h1>{{ post.Title }}</h1>
      <p>
        <strong>Author:</strong>
        {{ post.author?.Name }} {{ post.author?.Surname }}
      </p>
      <p>
        <strong>Category:</strong>
        {{ post.category?.Name }}
      </p>
      <p>
        <strong>Abstract:</strong>
        {{ post.Abstract }}
      </p>
      <section>
        <h2>Full Blog Content</h2>
        <div v-html="renderedContent"></div>
      </section>
    </article>
    <p v-else>
      Blog post not found.
    </p>
  </main>
</template>
