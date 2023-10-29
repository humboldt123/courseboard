<template>
    <Teleport to="body">
      <Transition
        name="edit-course-modal"
        @enter="fillInputs"
      >
        <div v-if="modal.visible" class="wrapper fullscreen grid-center">
            <div class="modal">
              <div class="content">
                <h1 class="title">{{ modal.editMode ? "Edit" : "Add" }} Course</h1>

                <div style="display: grid; grid-template-columns: 70% 30%">
                  <div style="display: flex; flex-direction: column;">
                    <input v-model="course_data.name" placeholder="PKMN 101"/>
                    <span class="label">Course*</span>
                  </div>
                  <div style="display: flex; flex-direction: column;">
                    <input v-model="course_data.section" placeholder="E" />
                    <span class="label">Section</span>
                  </div>
                </div>

                <input v-model="course_data.professor" placeholder="Professor Juniper" />
                <span class="label">Professor*</span>

                <input v-model="course_data.link" placeholder="https://courses.edu/course/12345678" />
                <span class="label">Course Page* <span class="material-symbols-outlined inline-icon">link</span></span>

                <input v-model="course_data.notes" placeholder="One of the courses ever!!!" />
                <span class="label">About</span>

                <input v-model="course_data.forums" placeholder="https://courses.edu/course/12345678/forums" />
                <span class="label">Talk Page <span class="material-symbols-outlined inline-icon">link</span></span>
                <input v-model="course_data.syllabus" placeholder="https://courses.edu/course/12345678/syllabus" />
                <span class="label">Syllabus <span class="material-symbols-outlined inline-icon">link</span></span>
                <input v-model="course_data.custom_link" placeholder="https://bigrat.monster" />
                <span class="label">Extra Link <span class="material-symbols-outlined inline-icon">link</span></span>

                <input v-model="course_data.banner" placeholder="https://i.imgur.com/5VRrVNk.png" />
                <span class="label">Banner URL <span class="material-symbols-outlined inline-icon">link</span></span>

                <span v-if="warn.visible" class="warn label">{{ warn.text }}</span>

                <div style="display: flex; justify-content: space-evenly; padding-top: 8px;">
                  <button class="pink" v-if="modal.editMode" @click="deleteCard();">Delete</button>
                  <button class="cyan" @click="closeModal();">Cancel</button>
                  <button class="cyan" @click="modal.editMode ? saveCard() : addCard();">{{ modal.editMode ? "Save" : "Add" }}</button>
                </div>
              </div>
            </div>
        </div>
      </Transition>
    </Teleport>
</template>

<script>
import { store } from '../store'

// URL Pattern from https://www.freecodecamp.org/news/check-if-a-javascript-string-is-a-url/
const urlPattern = new RegExp(
  '^(https?:\\/\\/)?' +
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
  '((\\d{1,3}\\.){3}\\d{1,3}))' +
  '(\\:\\d+)?' +
  '(\\/[-a-z\\d%_.~+:]*)*' +
  '(\\?[;&a-z\\d%_.~+=\\-:]*)?' +
  '(\\#[-a-z\\d_:]*)?$', 'i'
)

export default {
  name: 'EditCourseModal',
  data () {
    return {
      warn: { visible: false, text: '' },
      course_data: {}
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
  created () {
    window.addEventListener('keydown', this.onKeyDown)
  },
  unmounted () {
    window.removeEventListener('keydown', this.onKeyDown)
  },
  methods: {
    closeModal () {
      this.modal.visible = false
      this.warn.visible = false
      this.course_data = {}
      // update localStorage
      window.localStorage.setItem('courses', JSON.stringify(this.courses))
    },
    deleteCard () {
      const position = this.course_data.position

      // delete card from courses
      this.courses = this.courses.filter(card => card.position !== position)

      // go through positions and shift positions back by one
      this.courses.forEach(card => {
        if (card.position > position) {
          card.position -= 1
        }
      })
      this.closeModal()
    },
    isValidURL (url) {
      return !!urlPattern.test(url)
    },
    isEmptyOrValidURL (url) {
      return !url || this.isValidURL(url)
    },
    requiredFieldsFilled () {
      return this.course_data.name && this.course_data.professor && this.course_data.link
    },
    linksEmptyOrValidURL () {
      return this.isEmptyOrValidURL(this.course_data.link) &&
            this.isEmptyOrValidURL(this.course_data.forums) &&
            this.isEmptyOrValidURL(this.course_data.syllabus) &&
            this.isEmptyOrValidURL(this.course_data.custom_link) &&
            this.isEmptyOrValidURL(this.course_data.banner)
    },
    addCard () {
      if (!this.requiredFieldsFilled()) {
        this.warn.text = 'You must fill out all fields marked with a (*)'
        this.warn.visible = true
      } else if (!this.linksEmptyOrValidURL()) {
        this.warn.text = 'Not a valid URL!'
        this.warn.visible = true
      } else {
        this.courses.push({
          name: this.course_data.name,
          section: this.course_data.section || '',
          professor: this.course_data.professor,

          link: this.course_data.link,

          banner: this.course_data.banner || '',
          notes: this.course_data.notes || '',

          forums: this.course_data.forums || '',
          syllabus: this.course_data.syllabus || '',
          custom_link: this.course_data.custom_link || '',

          position: this.courses.length
        })
        this.closeModal()
      }
    },
    saveCard () {
      if (!this.requiredFieldsFilled()) {
        this.warn.text = 'You must fill out all fields marked with a (*)'
        this.warn.visible = true
      } else if (!this.linksEmptyOrValidURL()) {
        this.warn.text = 'Not a valid URL!'
        this.warn.visible = true
      } else {
        this.courses[this.modal.item] = {
          name: this.course_data.name,
          section: this.course_data.section || '',
          professor: this.course_data.professor,

          link: this.course_data.link,

          banner: this.course_data.banner || '',
          notes: this.course_data.notes || '',

          forums: this.course_data.forums || '',
          syllabus: this.course_data.syllabus || '',
          custom_link: this.course_data.custom_link || '',

          position: this.course_data.position
        }
        this.closeModal()
      }
    },
    fillInputs () {
      // clone card
      this.course_data = { ...this.courses[this.modal.item] }
    },
    onKeyDown (event) {
      if (this.modal.visible) {
        if (event.key === 'Escape') {
          this.closeModal()
        }
      }
    }
  }
}
</script>

<style scoped>
  /* wrapper */
  .wrapper {
    background: var(--light-shadow);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
  }

  /* transition classes */
  .edit-course-modal-enter-from,
  .edit-course-modal-leave-to {
    opacity: 0;
    transform: scale(0) translateY(20px);
  }

  .edit-course-modal-enter-active {
    animation: pop 0.25s ease both;
  }
  .edit-course-modal-leave-active {
    animation: pop 0.25s ease both reverse;
  }

  /* weird, hacky, animation because you can't apply css to a transitions grandchild for whatever reason */
  @keyframes pop {
    0% {
      transform: scale(0.9) translateY(20px);
      background-color: var(--transparent);
      opacity: 0;
    }
    60% {
      transform: scale(1) translateY(0);
      background-color: var(--transparent);
      opacity: 0.9;
    }
    100% {
      transform: scale(1) translateY(0);
      background: var(--light-shadow);
      opacity: 1;
    }
  }

  /* modal */
  .modal {
    background-color: var(--light);
    width: 30%;
    max-height: 90%;
    border-color: var(--darker);
    box-shadow: 0 0 5px var(--shadow);
    border-radius: 5px;
    border-width: 1px;
  }

  @media screen and (max-width: 1200px) {
    .modal {
      width: 50%;
    }
  }

  @media screen and (max-width: 800px) {
    .modal {
      width: 60%;
    }
  }

  @media screen and (max-width: 600px) {
    .modal {
      width: 90%;
    }
  }

  /* content */
  .content {
    display: flex;
    flex-direction: column;
    margin: 15px;
  }

  /* header */
  .title {
    text-align: center;
    user-select: none;
    font-size: xx-large;
  }

  /* warn */
  .warn {
    text-align: center;
    color: var(--red);
  }

  /* input label */
  .label {
    font-size: small;
    padding-left: 4px;
    padding-bottom: 12px;
    user-select: none;
  }

  /* input */
  input, .content > div {
    width: 95%;
  }

  input {
    padding: 4px;
    border: none;
    border-bottom: 1px solid var(--dark);
    outline: none;
  }

  /* button */
  button {
    background-color: var(--cyan);
    color: var(--light);
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 0 2px 4px var(--subtle-shadow);
    transition: box-shadow 0.3s, background-color 0.3s;
    cursor: pointer;
  }

  button:hover,
  button:focus {
    box-shadow: 0 4px 6px var(--subtle-shadow-darker);
    outline: none;
  }

  /* button colors */
  .cyan {
    background-color: var(--cyan);
  }

  .cyan:focus {
    background-color: var(--darkcyan);
  }

  .pink {
    background-color: var(--pink);
  }

  .pink:focus {
    background-color: var(--darkpink);
  }

  .inline-icon {
    color: var(--dark);
    position: relative;
    font-size: 1.5em;
    margin-top: -1em; /* avoid extra space at the top */
    top: .3em;
  }
</style>
