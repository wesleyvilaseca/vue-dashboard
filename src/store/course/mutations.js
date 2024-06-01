export default {
    setCourseValue: (states, data) => {
        states.course = data;
    },

    setCourseModulesValue: (state, data) =>{
        state.courseModules = data;
    },

    setCourseModule: (state, data) => {
        state.courseModule = data;
    },

    UPDATE_STATUS_LESSON: (state, data) => {
        state.moduleDiscipline = data;
    },

    SET_SELECTED_LESSON: (state, data) => {
        state.selectedLesson = data;
    }
}