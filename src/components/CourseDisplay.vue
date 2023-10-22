<template>
  <div>
    <div class="course">
      <div class="banner" :style="{ backgroundImage: 'url(' + banner + ')' }"/>
      <div class="content">
        <h1>{{ name }} [{{ section }}]</h1>
        <p>Professor: {{ professor }}</p>
        <p>{{ notes }}</p>
        <div class="links-container">
          <a :href="syllabus" target="_blank"><span class="material-symbols-outlined">assignment</span></a>
          <a :href="discord" target="_blank"><span class="material-symbols-outlined">forum</span></a>
          <a :href="custom_link" target="_blank"><span class="material-symbols-outlined">captive_portal</span></a>
        </div>
      </div>
      <div class="handle-container">
        <span><!-- Created for spacing, do not touch --></span>
        <span class="material-symbols-outlined handle">drag_handle</span>
      </div>
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

  .links-container {
    text-align: center;
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
    justify-content: space-between;
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

  /* Get rid of the ghost of the div that appears when we pick them up */
  .pickable { display: none; }

  .shadow > div {
    animation-name: shrink;
    animation-duration: 0.05s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }

  @keyframes shrink {
    0% {transform: scale(1);}
    40% {transform: scale(0.9);}
    100% {transform: scale(0.8);}
  }
</style>
