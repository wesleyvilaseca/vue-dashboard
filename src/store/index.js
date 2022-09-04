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
  },
  actions: {
    fetchBrands(context) {
      fetch(context.state.apiURL + "brands")
          .then(response => response.json())
          .then(dados => {
            context.commit("setBrands", dados.data)
          })
    },

    fetchProducts(context) {
      fetch(context.state.apiURL + "products")
          .then(response => response.json())
          .then(dados => {
            context.commit("setProducts", dados.data)
          })
    },
  },
  modules: {
  }
})
