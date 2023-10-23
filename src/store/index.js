import { createStore} from 'vuex'

export const store = createStore({
  state() {
      return {
          courseArray: [],
          modalVisible: false,
      }
  },
  getters: {
      getCourseArray: state => state.courseArray,
      getModalVisible: state => state.modalVisible,
  },
  mutations: {
      setCourseArray(state, payload) {
          state.courseArray = payload;
      },
      setModalVisible(state, payload) {
        state.modalVisible = payload;
      },
  }
});