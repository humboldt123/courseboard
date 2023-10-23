<template>
    <div>
        <p>Course Editor</p>
    </div>
</template>

<script>
export default {
  name: 'EditCourseModal',
  props: {
    name: String,
    section: String,
    professor: String,

    link: String,

    banner: String,
    notes: String,

    discord: String,
    syllabus: String,
    custom_link: String,

    show: Boolean
  }
}
</script>