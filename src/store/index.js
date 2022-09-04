import { createStore } from 'vuex'

export default createStore({
  state: {
    listBrands: [],
    listProducts: [],
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
    }
  },
  mutations: {
    setBrands: (states, brands) => states.listBrands = brands,
    setProducts: (state, products) => state.listProducts = products,
    removeBrand: (state, id) => state.listBrands = state.listBrands.filter(data => data.id !== id),
  },
  actions: {
    // Busca as marcas
    fetchBrands(context) {
      fetch(context.state.apiURL + "brands")
          .then(response => response.json())
          .then(dados => {
            context.commit("setBrands", dados.data)
          })
    },

    // Busca os produtos
    fetchProducts(context) {
      fetch(context.state.apiURL + "products")
          .then(response => response.json())
          .then(dados => {
            context.commit("setProducts", dados.data)
          })
    },

    // Deleta uma marca
    deleteBrand(context, item) {
      fetch(context.state.apiURL + "brands/" + item.id + "/remove", {method: "POST"})
          .then(function(response) {
            if(response.ok) {
              context.commit("removeBrand", item.id)
              // eslint-disable-next-line no-undef
              Toast.fire(`A marca ${item.name} foi deletada com sucesso.`, "", "success");
            } else {
              // eslint-disable-next-line no-undef
              Toast.fire("Ocorreu um erro ao tentar deletar a marca.", "", "error");
            }
          })
          .catch(function(error) {
            // eslint-disable-next-line no-undef
            Toast.fire(error.message, "", "error");
          })
    }
  },
  modules: {
  }
})
