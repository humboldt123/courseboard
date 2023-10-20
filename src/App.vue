<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
  <CourseDisplay
    name="CS 164"
    section="A"
    professor="Professor Stuart"

    link="https://learn.dcollege.net/ultra/courses/_353668_1/cl/outline"

    banner="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    notes="One of the courses ever! 👻"

    discord="https://bigrat.monster"
    syllabus="https://learn.dcollege.net/webapps/blackboard/execute/content/file?cmd=view&content_id=_13567338_1&course_id=_353668_1&launch_in_new=true"
    custom_link="https://bigrat.monster"
  />
</template>

<script>
import CourseDisplay from './components/CourseDisplay.vue'

export default {
  name: 'App',
  components: {
    CourseDisplay
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lisu+Bosa&display=swap');
:root {
	--dark: #212121;
	--superdark: #0a0a0a;
	--light: #fefefe;
	--red: #e83b3b;
	--darkred: #ae2334;

	--transparent: #00000000;
}

body {
	font-family: 'Lisu Bosa', serif;
	color: var(--dark);
	background-color: var(--light);
}
</style>
