<template>
  <div class="course" draggable="true">
      <div class="banner" :style="{ backgroundImage: 'url(' + banner + ')' }"/>
      <div class="content">
        <h1>{{ name }} [{{ section }}]</h1>
        <p>Professor: {{ professor }}</p>
        <p>{{ notes }}</p>
      </div>
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
    border-color: var(--darker);
    box-shadow: 0 0 5px rgba(5, 5, 5, 0.9);

    border-radius: 5px;
    border-width: 1px;

    margin: 5px;
  }
  .content {
    padding: 0px 5px 5px 15px;
  }

  .banner {
    background-size: cover;
    position: relative;
    overflow: hidden;

    border-radius: 5px 5px 0 0;

    width: 100%;
    height: 8em;
  }
</style>
