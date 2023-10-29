import { createStore} from 'vuex'

export const store = createStore({
  state() {
    return {
      // return empty array if courses is null
      // then order courses by position value
      courses: JSON.parse(window.localStorage.getItem("courses") || "[]").sort((a, b) => a.position - b.position),
      modal: {
        visible: false,
        editMode: false,
        item: -1,
      },
    }
  },
  getters: {
      getcourses: state => state.courses,
      getModal: state => state.modal,
  },
  mutations: {
      setcourses(state, payload) {
          state.courses = payload;
      },
      setModal(state, payload) {
        state.modal = payload;
      },
  },
});
