<template>
  <PageTitle page="Produtos" :pages="pages" />

  <!-- Table -->
  <div class="row">
    <div class="col-xl-12">
      <TableList
          title="Produtos cadastrados"
          :campos="campos"
          :itens="getProducts()"
          :acoes="acoes"
          @editar="editar($event)"
          @deletar="deletar($event)"
      />
    </div>
  </div>
</template>

<script>
import PageTitle from "@/components/template/PageTitle";
import TableList from "@/components/template/TableList";
import { mapActions, mapGetters } from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Produtos",
  components: {TableList, PageTitle},
  data: () => ({
    pages: [
      {
        name: "Início",
        link: "/"
      }
    ],
    campos: [
      { text: 'ID', field: 'id' },
      { text: 'Titulo', field: 'title' },
      { text: 'Descrição', field: 'description' },
      { text: 'Marca', field: 'brand' }
    ],
    acoes: ['edit', 'delete']
  }),
  methods: {
    ...mapActions(["fetchProducts"]),

    ...mapGetters(["getProducts"]),

    editar(i) {
      return i;
    },

    deletar(i) {
      return i;
    }
  },
  computed: {
    /* ...mapState(["listProducts"]), */
  },
  created() {
    this.fetchProducts();
  }
}
</script>

<style scoped>

</style>