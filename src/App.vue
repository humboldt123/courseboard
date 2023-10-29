<template>
  <EditCourseModal/>
  <div @dblclick="addCourse" class="fullscreen">
    <div v-if="courses.length === 0" class="fullscreen grid-center">
      <p v-if="modal.visible == false">Double-click an empty space to add a course. Double-click a course to delete or edit.</p>
    </div>
    <div v-else>
      <draggable
          class="card-holder"

          v-model="cards"
          item-key="order"
          animation="150"

          drag-class="pickable"
          ghost-class="shadow"

          @start="drag = true;"
          @end="this.drag = false;"

          @update="updateCardPositions"

          handle=".handle"
        >
        <CourseCard v-for="(course, i) in courses"
            :name="course.name"
            :section="course.section"
            :professor="course.professor"
            :link="course.link"
            :banner="course.banner"
            :notes="course.notes"
            :forums="course.forums"
            :syllabus="course.syllabus"
            :custom_link="course.custom_link"
            :position="course.position"
            :key="i"
          />
      </draggable>
    </div>
  </div>
</template>

<script>
import { VueDraggableNext } from 'vue-draggable-next'

import CourseCard from './components/CourseCard.vue'
import EditCourseModal from './components/EditCourseModal.vue'

import { store } from './store'

// Store logic, and export App
export default {
  name: 'App',
  components: {
    draggable: VueDraggableNext,
    CourseCard,
    EditCourseModal
  },
  data () {
    return {
      drag: false
    }
  },
  computed: {
    modal: {
      get () { return store.state.modal },
      set (val) { store.commit('setModal', val) }
    },
    courses: {
      get () { return store.state.courses },
      set (val) { store.commit('setCourses', val) }
    }
  },
  methods: {
    addCourse (event) {
      // Make sure the user is clicking in the empty space
      if (event.target.classList[0] === 'card-holder' || event.target.classList[0] === 'fullscreen') {
        this.modal.editMode = false
        this.modal.item = -1
        this.modal.visible = true
      }
    },
    updateCardPositions (event) {
      // vue-draggable doesn't like me updating the indices of the array
      // so we use this hack to keep track of the real "position"
      // the array will sort itself according to position on page load

      const origin = event.oldIndex
      const target = event.newIndex
      const index = this.courses.findIndex(card => card.position === origin)
      this.courses.forEach(card => {
        if (target > origin) {
          if (card.position > origin && card.position <= target) {
            card.position -= 1
          }
        } else if (origin > target) {
          if (card.position >= target && card.position < origin) {
            card.position += 1
          }
        }
      })
      this.courses[index].position = target

      // update our courses in localStorage
      window.localStorage.setItem('courses', JSON.stringify(this.courses))
    }
  }
}
</script>

<style>
.grid-center {
  display: grid;
  place-items: center;
}

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
