<template>
  <div>
    <div class="course" @dblclick="edit();">
      <a :href="link">
        <div class="banner" :style="{
          backgroundImage: 'url(' + banner + '), url(' + require('@/assets/default_banner.png') + ')',
          'background-color': 'var(--chalkboard-' + getFallbackColor(name) + ')'
        }"/>
      </a>
      <div class="content">
       <h1 class="name cutoff" style="user-select: none;">{{ name }}<span v-if="section.length > 0"> [{{ section }}]</span></h1>
        <p class="professor cutoff" style="user-select: none;">Professor: {{ professor }}</p>
        <p class="notes scroll">
          {{ notes }}
        </p>
      </div>
      <div class="links-container">
          <!-- invisible v-elses are a hack to maintain spacing -->
          <a :href="syllabus" target="_blank" v-if="propertyFilled('syllabus')"><span class="material-symbols-outlined">assignment</span></a>
          <a :href="forums" target="_blank" v-if="propertyFilled('forums')"><span class="material-symbols-outlined">forum</span></a>
          <a :href="custom_link" target="_blank" v-if="propertyFilled('custom_link')"><span class="material-symbols-outlined">captive_portal</span></a>
          <span v-if="!propertyFilled('syllabus') && !propertyFilled('forums') && !propertyFilled('custom_link')" class="material-symbols-outlined invisible">category</span>
      </div>
      <div class="actions-container">
        <span class="material-symbols-outlined handle">drag_handle</span>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../store'

export default {
  name: 'CourseCard',
  props: {
    name: String,
    section: String,
    professor: String,

    link: String,

    banner: String,
    notes: String,

    forums: String,
    syllabus: String,
    custom_link: String,

    position: Number
  },
  computed: {
    courses: {
      get () { return store.state.courses },
      set (val) { store.commit('setCourses', val) }
    },
    modal: {
      get () { return store.state.modal },
      set (val) { store.commit('setModal', val) }
    }
  },
  methods: {
    getFallbackColor(name) {
      var colors = ["green", "purple", "red", "blue"];
      var course = name.split(" ")[0];
      var hash = 0;

      for (var i = 0; i < course.length; i++) {
        hash = ((hash << 5) - hash) + course.charCodeAt(i) | 0;
      }
      return colors[Math.abs(hash)%colors.length];
    },
    propertyFilled (property) {
      return this[property] && this[property].length > 0
    },
    edit () {
      const index = this.$.vnode.key
      this.modal.item = index
      this.modal.editMode = true
      this.modal.visible = true
    }
  }
}
</script>

<style scoped>
  .course {
    border-color: var(--darker);
    box-shadow: 0 0 5px var(--shadow);

    border-radius: 5px;
    border-width: 1px;

    margin: 5px;

    animation-name: pop;
    animation-duration: 0.05s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }

  .content {
    padding: 0px 5px 0px 15px;
  }

  .name {
    margin-bottom: 0;
    height: 1em;
  }

  .professor {
    margin-top: 0; margin-left: 1px; height: 1em;
  }

  .notes {
    height: 3.5em;
  }

  .cutoff {
      overflow: hidden;
  }

  .scroll {
    overflow: scroll;
  }

  .links-container {
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .links-container > a {
    margin: 5px 10px 5px 10px;
  }

  a > span {
    color: var(--dark);
  }

  a:hover > span {
    color: var(--superdark);
  }

  .invisible {
    color: var(--transparent);
  }

  .actions-container {
    display: flex;
    justify-content: space-around;
    padding: 3px 5px 8px 5px;
  }

  .handle {
    cursor: grab;
  }

  .banner {
    background-size: cover;
    position: relative;
    overflow: hidden;

    border-radius: 5px 5px 0 0;

    width: 100%;
    height: 8em;
  }

  /* get rid of the ghost of the div that appears when we pick them up */
  .pickable {
    display: none;
  }

  .shadow > div {
    animation-name: shrink;
    animation-duration: 0.05s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }

  /* animations */
  @keyframes shrink {
    0% {transform: scale(1);}
    40% {transform: scale(0.9);}
    100% {transform: scale(0.8);}
  }

  @keyframes pop {
    0% {transform: scale(0.6);}
    40% {transform: scale(0.8);}
    100% {transform: scale(1);}
  }
</style>
