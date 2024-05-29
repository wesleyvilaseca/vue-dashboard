export default {
    setCourseValue: (states, data) => {
        states.course = data;
    },

    setCourseModulesValue: (state, data) =>{
        state.courseModules = data;
    },

    setCourseModule: (state, data) => {
        state.courseModule = data;
    }
}