<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
  <div>
    <draggable
        class="card-holder"

        v-model="cards"
        item-key="order"
        animation="150"

        drag-class="pickable"
        ghost-class="shadow"

        @start="drag = true;"
        @end="drag = false;"

        handle=".handle"
      >
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

// Store logic, and export App
export default {
  name: 'App',
  components: {
    draggable: VueDraggableNext,
    CourseDisplay
  },
  data() {
    return {
      drag: false,
    }
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
.card-holder {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
}
@media screen and (max-width: 1200px) {
  .card-holder {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (max-width: 800px) {
  .card-holder {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 600px) {
  .card-holder {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
