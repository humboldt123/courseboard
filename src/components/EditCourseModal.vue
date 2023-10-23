<template>
    <Teleport to="body">
      <Transition name="edit-course-modal">
        <div v-if="modalVisible" class="wrapper fullscreen grid-center">
            <button @click="modalVisible = false">Close</button>
        </div>
      </Transition>
    </Teleport>
</template>

<style scoped>
.wrapper {
  background: rgba(200, 200, 200, 0.3);

  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
}

.edit-course-modal-enter-from,
.edit-course-modal-leave-to {
  opacity: 0;
}

.edit-course-modal-enter-active,
.edit-course-modal-leave-active {
  transition: 0.25s ease all;
}
</style>

<script>
import { store } from "../store"

export default {
  name: 'EditCourseModal',
  props: {
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
  },
}
</script>