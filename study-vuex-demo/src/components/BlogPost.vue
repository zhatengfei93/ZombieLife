<template>
  <div class="blog-post">
    <button @click="$emit('enlarge-text')">放大字体</button>
    <h3>{{ post.title }}</h3>
    <div v-html="post.content"></div>
  </div>
</template>
<script>
export default {
  name: 'blog-post',
  props: {
    post: {
      type: Object,
      default: () => {
        return []
      }
    }
  }
}
</script>
