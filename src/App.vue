<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
  <div>
    <draggable tag="v-layout" v-model="draggableCards" class="course-container">
      <template v-for="(course, i) in getCourseArray" :key="i">
        <CourseDisplay
          :name="course.name"
          :section="course.section"
          :professor="course.professor"
          :link="course.link"
          :banner="course.banner"
          :notes="course.notes"
          :discord="course.discord"
          :syllabus="course.syllabus"
          :custom_link="course.custom_link"
        />
      </template>
    </draggable>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { VueDraggableNext } from 'vue-draggable-next';
import CourseDisplay from './components/CourseDisplay.vue';

import { store } from "./store"

export default {
  name: 'App',
  components: {
    draggable: VueDraggableNext,
    CourseDisplay
  },
  computed: {
    ...mapGetters({
      getCourseArray: "getCourseArray"
    }),
    draggableCards: {
      get() {
        return store.state.courseArray;
      },
      set(val) {
        store.commit("setCourseArray", val);
      }
    }
  },
  methods: {
    ...mapMutations({
      setcourseArray: "setCourseArray"
    })
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

.course-container {
  display: flex;
}

</style>
