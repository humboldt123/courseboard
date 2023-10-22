import { createStore } from 'vuex'

export const store = createStore({
    state() {
        return {
            courseArray: [
                {
                    name: "CS 164",
                    section: "A",
                    professor: "Professor Stuart",
        
                    link: "https://bigrat.monster",
        
                    banner: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
                    notes: "One of the courses ever! 👻",
        
                    discord: "https://bigrat.monster",
                    syllabus: "https://bigrat.monster",
                    custom_link: "https://bigrat.monster"
                },
                {
                    name: "CI 101",
                    section: "060",
                    professor: "Professor Moix",
        
                    link: "https://bigrat.monster",
        
                    banner: "https://images.unsplash.com/photo-1480843669328-3f7e37d196ae",
                    notes: "Yet another course... 😎",
        
                    discord: "https://bigrat.monster",
                    syllabus: "https://bigrat.monster",
                    custom_link: "https://bigrat.monster"
                },
                {
                    name: "RATS 101",
                    section: "123",
                    professor: "Professor Bar",
        
                    link: "https://bigrat.monster",
        
                    banner: "https://bigrat.monster/media/bigrat.jpg",
                    notes: "A big rat sitting on a person's leg. 🐀",
        
                    discord: "https://bigrat.monster",
                    syllabus: "https://bigrat.monster",
                    custom_link: "https://bigrat.monster"
                },
                {
                  name: "TEST 101",
                  section: "123",
                  professor: "Professor Bar",
      
                  link: "https://bigrat.monster",
      
                  banner: "https://i.imgur.com/5VRrVNk.png",
                  notes: "This should serve as a test of the banner Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      
                  discord: "https://bigrat.monster",
                  syllabus: "https://bigrat.monster",
                  custom_link: "https://bigrat.monster"
              }
              ]
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
