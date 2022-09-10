<template>
  <div>
    <PageTitle page="Alterar produto" :pages="pages"/>

    <!-- Informações do produto -->
    <div class="row">
      <div class="col-md-6">
        <FormProducts
            :title="`Alterar o produto ${produto.title} `"
            description="Preencha os campos a baixo"
            :item="produto"
            @processaFormulario="salvaProduto($event)"
        />
      </div>

      <!-- Options do produto -->
      <div class="col-md-6">
        <div class="card-body">
          <h4 class="mt-0 header-title">Informações do produto</h4>
          <p class="sub-title">Adicione informações ao seu produto</p>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "@/components/template/PageTitle";
import FormProducts from "@/components/products/FormProducts";
import {mapActions} from "vuex"

export default {
  name: "EditProdutoView",
  components: {FormProducts, PageTitle},
  data: () => ({
    pages: [
      {
        name: "Início",
        link: "/"
      },
      {
        name: "Produtos",
        link: "/produtos"
      }
    ],
    parametros: {},
    produto: {
      id: 0,
      title: ''
    },
    informacoes: {}
  }),
  methods: {
    ...mapActions(["getProductId"]),

    salvaProduto(item) {
      console.log(item)
    }
  },
  mounted() {
    // Recupera  os parametros
    this.parametros = this.$route.params

    // Busca o produto
    setTimeout(() => {
      this.getProductId(this.parametros.id)
          .then((result) => {
            let prod = result[0]
            prod.brand_id = prod.brand.id
            this.produto = prod
          })
    }, 1500)
  }
}
</script>