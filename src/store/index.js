import { createStore} from 'vuex'

export const store = createStore({
  state() {
      return {
          courseArray: []
      }
  },
  getters: {
      getCourseArray: state => state.courseArray
  },
  mutations: {
      setCourseArray(state, payload) {
          state.courseArray = payload;
      }
  }
});