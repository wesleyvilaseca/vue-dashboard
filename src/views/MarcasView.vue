<template>
  <PageTitle page="Marcas" :pages="pages" />

  <!-- Table -->
  <div class="row">
    <div class="col-xl-12">
      <TableList
          title="Marcas cadastradas"
          :campos="campos"
          :itens="marcas"
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
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Marcas",
  components: {TableList, PageTitle},
  data: () => {
    return {
      pages: [
        {
          name: "Início",
          link: "/"
        }
      ],
      campos: [
        { text: 'ID', field: 'id' },
        { text: 'Titulo', field: 'name' },
        { text: 'Descrição', field: 'description' }
      ],
      marcas: [],
      acoes: ['edit', 'delete'],
    }
  },
  methods: {
    editar(i) {
      return i;
    },

    deletar(i) {
      return i;
    }
  }
}
</script>

<style scoped>

</style>