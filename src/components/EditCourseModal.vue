<template>
    <Teleport to="body">
      <Transition name="edit-course-modal">
        <div v-if="modalVisible" class="wrapper fullscreen grid-center">
            <div class="modal">
              <div class="content">
                <h1 class="title">{{ course_index > -1 ? course_index : "Add" }} Course</h1>
                
                <div style="display: grid; grid-template-columns: 70% 30%">
                  <div style="display: flex; flex-direction: column;">
                    <input v-model="name" placeholder="PKMN 101" />
                    <span class="label">Course*</span>
                  </div>
                  <div style="display: flex; flex-direction: column;">
                    <input v-model="section" placeholder="E" />
                    <span class="label">Section</span>
                  </div>
                </div>

                <input v-model="professor" placeholder="Professor Juniper" />
                <span class="label">Professor*</span>

                <input v-model="link" placeholder="https://courses.edu/course/12345678" />
                <span class="label">Link to Course Page*</span>

                <input v-model="notes" placeholder="One of the courses ever!!!" />
                <span class="label">About</span>

                <input v-model="discord" placeholder="https://courses.edu/course/12345678/forums" />
                <span class="label">Talk Page</span>
                <input v-model="syllabus" placeholder="https://courses.edu/course/12345678/syllabus" />
                <span class="label">Syllabus URL</span>
                <input v-model="custom_link" placeholder="https://bigrat.monster" />
                <span class="label">Extra Link</span>
                
                <input v-model="banner" placeholder="https://i.imgur.com/5VRrVNk.png" />
                <span class="label">Banner URL</span>
                
                <span v-if="hint" class="hint label">You must fill out all fields marked with a (*)</span>

                <div style="display: flex; justify-content: space-evenly; padding-top: 8px;">
                  <button class="pink" @click="closeModal();">Cancel</button>
                  <button class="cyan" @click="addCard();">{{ course_index > -1 ? course_index : "Create" }}</button>
                </div>
              </div>
            </div>
        </div>
      </Transition>
    </Teleport>
</template>

<script>
import { store } from "../store"

export default {
  name: 'EditCourseModal',
  data() {
    return {
      hint: false
    }
  },
  computed: {
    modalVisible: {
      get() {
        return store.state.modalVisible;
      },
      set(val) {
        store.commit("setModalVisible", val);
      },
    },
    courseArray: {
      get() {
        return store.state.courseArray;
      },
      set(val) {
        store.commit("setCourseArray", val);
      },
    },
  },
  methods: {  
    closeModal() {
      this.modalVisible = false;
      this.hint = false;
      this.clearInputs();
    },
    addCard() {
      if (!this.name || !this.professor || !this.link) {
        this.hint = true;
      } else {
        this.courseArray.push({
          name: this.name,
          section: this.section || "",
          professor: this.professor,

          link: this.link,

          banner: this.banner || "",
          notes: this.notes || "",

          discord: this.discord || "",
          syllabus: this.syllabus || "",
          custom_link: this.custom_link || "",
          
          position: this.courseArray.length
        });
      this.closeModal();
      }
    },
    clearInputs() {
      this.name = "";
      this.section = "";
      this.professor = "";
      this.link = "";
      this.notes = "";
      this.discord = "";
      this.syllabus = "";
      this.custom_link = "";
      this.banner = "";
    }
  },
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

  /* hint */
  .hint {
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
</style>