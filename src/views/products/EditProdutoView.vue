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

        <!-- Adicionar options -->
        <div class="card-body">
          <h4 class="mt-0 header-title">Informações do produto</h4>
          <p class="sub-title">Adicione informações ao seu produto</p>

          <div class="form-group">
            <label>Titulo da informação</label>
            <input type="text" class="form-control" placeholder="Ex: Cor" v-model="option.title" />
            <span v-if="valida > 0 && option.length === 0" class="valida">Preecha esse campo.</span>
          </div>

          <div class="form-group">
            <label>Valor da informação</label>
            <input type="text" class="form-control" placeholder="Ex: Preto" v-model="option.description" />
            <span v-if="valida > 0 && produto.description.length === 0" class="valida">Preecha esse campo.</span>
          </div>

          <div class="form-group mt-4">
            <button class="btn btn-primary" @click="salvaOption()">
              Adicionar
            </button>
          </div>
        </div>

        <!-- Lista options -->
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
import {mapActions, mapState} from "vuex"

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
    informacoes: {},
    option: {
      title: "",
      description: "",
      type: "unique"
    },
    optionsProduct: [],
    valida: 0
  }),
  methods: {
    ...mapActions(["getProductId"]),

    salvaProduto(item) {
      console.log(item)
    },

    salvaOption() {
      let vm = this;
      vm.valida = 1;

      // Verifica se preencheu tudo
      if(vm.option.title === "" || vm.option.title === undefined)
        return false;

      if(vm.option.description === "" || vm.option.description === undefined)
        return false;


    }
  },
  computed: {
    ...mapState("options",["listOptions"])
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