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
