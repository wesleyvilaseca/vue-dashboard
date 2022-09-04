<template>
  <PageTitle page="Marcas" :pages="pages" />

  <!-- Table -->
  <div class="row">
    <div class="col-xl-12">
      <TableList
          title="Marcas cadastradas"
          :campos="campos"
          :itens="listBrands"
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
import { mapActions, mapState } from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Marcas",
  components: {TableList, PageTitle},
  data: () => ({
    pages: [
      {
        name: "Início",
        link: "/"
      }
    ],
    campos: [
      {text: 'ID', field: 'id'},
      {text: 'Titulo', field: 'name'},
      {text: 'Descrição', field: 'description'}
    ],
    acoes: ['edit', 'delete'],
  }),
  methods: {
    ...mapActions(["fetchBrands"]),

    editar(i) {
      return i;
    },

    deletar(i) {
      return i;
    }
  },
  computed: {
    ...mapState(["listBrands"])
  },
  created() {
    this.fetchBrands();
  }
}
</script>

<style scoped>

</style>