<template>
    <div class="course">
        <img v-bind:src="banner">
        <h1>{{ name }} [{{ section }}]</h1>
        <p>Professor: {{ professor }}</p>
        <p>{{ notes }}</p>
    </div>
</template>

<script>
export default {
  name: 'CourseDisplay',
  props: {
    name: String,
    section: String,
    professor: String,

    link: String,

    banner: String,
    notes: String,

    discord: String,
    syllabus: String,
    custom_link: String
  }
}
</script>

<style scoped>
  .course {
    border-style: solid;
    border-width: 2px;
    border-color: var(--darker);
  }
  img {
    width: 10em;
  }
</style>
