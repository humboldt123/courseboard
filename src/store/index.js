import { createStore} from 'vuex'

export const store = createStore({
  state() {
    return {
      courseArray: [{
        name: "TEST 101",
        section: "123",
        professor: "Professor Bar",
  
        link: "https://bigrat.monster",
  
        banner: "https://i.imgur.com/eYl8V0a.png",
        notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  
        discord: "https://bigrat.monster",
        syllabus: "https://bigrat.monster",
        custom_link: "https://bigrat.monster",
  
        position: 0
      }, {
        name: "RATS 101",
        section: "123",
        professor: "Professor Bar",
  
        link: "https://bigrat.monster",
  
        banner: "https://bigrat.monster/media/bigrat.jpg",
        notes: "A big rat sitting on a person's leg. 🐀",
  
        discord: "https://bigrat.monster",
        syllabus: "https://bigrat.monster",
        custom_link: "https://bigrat.monster",
  
        position: 1,
      }, {
        name: "CS 164",
        section: "A",
        professor: "Professor Stuart",
  
        link: "https://bigrat.monster",
  
        banner: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        notes: "One of the courses ever! 👻",
  
        discord: "https://bigrat.monster",
        syllabus: "https://bigrat.monster",
        custom_link: "https://bigrat.monster",
  
        position: 2,
      },{
        name: "CAT 101",
        section: "009",
        professor: "Professor C",
  
        link: "https://bigrat.monster",
  
        banner: "https://media.tenor.com/wujhfJnnMDkAAAAC/he-died-cat-falling-over.gif",
        notes: "meow",
  
        discord: "https://bigrat.monster",
        syllabus: "https://bigrat.monster",
        custom_link: "https://bigrat.monster",
  
        position: 3
      }, ],
      modal: {
        visible: false,
        editMode: false,
        item: -1,
      },
      controlPressed: false,
    }
  },
  getters: {
      getCourseArray: state => state.courseArray,
      getModal: state => state.modal,
      getControlPressed: state => state.controlPressed,
  },
  mutations: {
      setCourseArray(state, payload) {
          state.courseArray = payload;
      },
      setModal(state, payload) {
        state.modal = payload;
      },
      setControlPressed(state, payload) {
        state.controlPressed = payload;
      }
  }
});