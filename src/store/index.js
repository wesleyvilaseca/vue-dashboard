import {createStore} from 'vuex'
import options from "@/store/options";

export default createStore({
    state: {
        listBrands: [],
        listProducts: [],
        listOptions: [],
        nameSite: "ELETRON",
        apiURL: "http://127.0.0.1:8000/api/v1/"
    },
    getters: {
        getProducts: (state) => {
            let produtos = state.listProducts;
            let itens = [];

            produtos.forEach((x) => {
                itens.push({
                    id: x.id,
                    title: x.title,
                    description: x.description,
                    brand: x.brand.name
                });
            });

            return itens;
        },
        getNewsProducts: (state, getters) => getters.getProducts.reverse().slice(0, 5),
        totalProducts: (state) => state.listProducts.length,
        totalBrands: (state) => state.listBrands.length,
    },
    mutations: {
        setBrands: (states, brands) => states.listBrands = brands,
        removeBrand: (state, id) => state.listBrands = state.listBrands.filter(data => data.id !== id),
        updateBrandMutation: (state, obj) => {
            // Remove o item
            state.listBrands = state.listBrands.filter(data => data.id !== obj.id);
            // Add o item
            state.listBrands.push(obj)
        },

        setProducts: (state, products) => state.listProducts = products,
        removeProduct: (state, id) => state.listProducts = state.listProducts.filter(data => data.id !== id),
        updateProductMutation: (state, obj) => {
            // Remove o item
            state.listProducts = state.listProducts.filter(data => data.id !== obj.id);
            // Add o item
            state.listProducts.push(obj)
        },
    },
    actions: {
        // Busca as marcas
        fetchBrands(context) {
            console.log("busca marcas")
            fetch(context.state.apiURL + "brands")
                .then(response => response.json())
                .then(dados => {
                    context.commit("setBrands", dados.data)
                })
        },

        // Deleta uma marca
        deleteBrand(context, item) {
            fetch(context.state.apiURL + "brands/" + item.id + "/remove", {method: "POST"})
                .then(function (response) {
                    if (response.ok) {
                        context.commit("removeBrand", item.id)
                        // eslint-disable-next-line no-undef
                        Toast.fire(`A marca ${item.name} foi deletada com sucesso.`, "", "success");
                    } else {
                        // eslint-disable-next-line no-undef
                        Toast.fire("Ocorreu um erro ao tentar deletar a marca.", "", "error");
                    }
                })
                .catch(function (error) {
                    // eslint-disable-next-line no-undef
                    Toast.fire(error.message, "", "error");
                })
        },

        // Metodo responsável por realizar a inserção de uma nova marca
        insertBrand(context, item) {
            // Repassa para obj
            var list = context.state.listBrands;

            // Processa a api
            fetch(context.state.apiURL + "brands/", {method: "POST", body: item})
                .then(function (response) {
                    if (response.ok) {
                        // Recupera o retorno
                        let data = response.json();
                        data = data.data;

                        // Atualiza a lista
                        list.push(data);

                        // salva a lista atualizada
                        context.commit("setBrands", list)

                        // eslint-disable-next-line no-undef
                        Toast.fire(`A marca ${item.name} foi inserida com sucesso.`, "", "success");
                    } else {
                        // eslint-disable-next-line no-undef
                        Toast.fire("Ocorreu um erro ao tentar inserir a marca.", "", "error");
                    }
                })
                .catch(function (error) {
                    // eslint-disable-next-line no-undef
                    Toast.fire(error.message, "", "error");
                })
        },

        // Responsável por alterar os dados de uma marca
        updateBrand(context, {obj, form}) {
            // Processa a api
            return fetch(context.state.apiURL + "brands/" + obj.id + "/edit", {method: "POST", body: form})
                .then(function (response) {
                    if (response.ok) {
                        // Altera na listagem
                        context.commit("updateBrandMutation", obj);

                        // eslint-disable-next-line no-undef
                        Toast.fire(`A marca foi alterada com sucesso.`, "", "success");
                        return true;
                    } else {
                        // eslint-disable-next-line no-undef
                        Toast.fire("Ocorreu um erro ao tentar editar.", "", "error");
                        return false;
                    }
                })
                .catch(function (error) {
                    // eslint-disable-next-line no-undef
                    Toast.fire(error.message, "", "error");
                })
        },

        // ------------------------------------------------

        // Busca um produto em especifico
        getProductId: (context, id) => {
            return context.state.listProducts.filter(data => data.id == id);
        },

        // Busca os produtos
        fetchProducts(context) {
            console.log("busca produtos")
            fetch(context.state.apiURL + "products")
                .then(response => response.json())
                .then(dados => {
                    context.commit("setProducts", dados.data)
                    return true;
                })
        },

        // Deleta um produto
        deleteProducts(context, item) {
            fetch(context.state.apiURL + "products/" + item.id + "/remove", {method: "POST"})
                .then(function (response) {
                    if (response.ok) {
                        context.commit("removeProduct", item.id)
                        // eslint-disable-next-line no-undef
                        Toast.fire(`O produto ${item.title} foi deletado com sucesso.`, "", "success");
                    } else {
                        // eslint-disable-next-line no-undef
                        Toast.fire("Ocorreu um erro ao tentar deletar o produto.", "", "error");
                    }
                })
                .catch(function (error) {
                    // eslint-disable-next-line no-undef
                    Toast.fire(error.message, "", "error");
                })
        },

        // Metodo responsável por realizar a inserção de um novo produto
        insertProduct(context, item) {
            // Repassa para obj
            var list = context.state.listProducts;

            // Processa a api
            fetch(context.state.apiURL + "products/", {method: "POST", body: item})
                .then(function (response) {
                    if (response.ok) {
                        // Recupera o retorno
                        let data = response.json();
                        data = data.data;

                        // Atualiza a lista
                        list.push(data);

                        // salva a lista atualizada
                        context.commit("setProducts", list)

                        // eslint-disable-next-line no-undef
                        Toast.fire(`O produto foi inserido com sucesso.`, "", "success");
                    } else {
                        // eslint-disable-next-line no-undef
                        Toast.fire("Ocorreu um erro ao tentar inserir o produto.", "", "error");
                    }
                })
                .catch(function (error) {
                    // eslint-disable-next-line no-undef
                    Toast.fire(error.message, "", "error");
                })
        },

    },
    modules: {
        options
    }
})
