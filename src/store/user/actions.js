export default {

    // Busca os options value
    getSession(context) {
        const data = {}
        context.commit("setUserSession", data);
        // fetch(context.rootState.apiURL + "options-value")
        //     .then(response => response.json())
        //     .then(dados => {
        //         context.commit("setOptionsValue", dados.data)
        //         return true;
        //     })
    },

    login(context, item) {
        const data = {};
        item;
        context.commit("setCourseModulesValue", data);
    },

    logout () {}
}