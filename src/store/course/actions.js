export default {

    // Busca os options value
    getCourseData(context) {
        const data = {}
        context.commit("setCourseValue", data);
        // fetch(context.rootState.apiURL + "options-value")
        //     .then(response => response.json())
        //     .then(dados => {
        //         context.commit("setOptionsValue", dados.data)
        //         return true;
        //     })
    },

    getCourseModules(context, item) {
        const data = {};
        item;
        context.commit("setCourseModulesValue", data);
        // fetch(context.rootState.apiURL + "options-value/" + item.id + "/remove", {method: "POST"})
        //     .then(function (response) {
        //         if (response.ok) {
        //             context.commit("removeOptionValue", item.id)
        //             // eslint-disable-next-line no-undef
        //             Toast.fire(`O item ${item.name} foi deletado com sucesso.`, "", "success");
        //         } else {
        //             // eslint-disable-next-line no-undef
        //             Toast.fire("Ocorreu um erro ao tentar deletar o item.", "", "error");
        //         }
        //     })
        //     .catch(function (error) {
        //         // eslint-disable-next-line no-undef
        //         Toast.fire(error.message, "", "error");
        //     })
    },

}