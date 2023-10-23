<template>
  <div>
    <div class="course">
      <div class="banner" :style="{ backgroundImage: 'url(' + (banner.length > 0 ? banner : 'https://i.imgur.com/5VRrVNk.png') + ')' }"/>
      <div class="content">
        <h1 class="name cutoff">{{ name }} <span v-if="section.length > 0">[{{ section }}]</span></h1>
        <p class="professor cutoff">Professor: {{ professor }}</p>
        <p class="notes scroll">
          {{ notes }}
        </p>
      </div>
      <div class="links-container">
          <a :href="syllabus" target="_blank"><span class="material-symbols-outlined">assignment</span></a>
          <a :href="discord" target="_blank"><span class="material-symbols-outlined">forum</span></a>
          <a :href="custom_link" target="_blank"><span class="material-symbols-outlined">captive_portal</span></a>
      </div>
      <div class="handle-container">
        <span class="material-symbols-outlined handle">drag_handle</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseCard',
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

  .handle-container {
    display: flex;
    justify-content: center;
  }
  .handle {
    cursor: grab;
    margin: 0 5px 5px 5px;
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
