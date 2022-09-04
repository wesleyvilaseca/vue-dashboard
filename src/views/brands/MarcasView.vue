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
import {mapActions, mapState} from "vuex";

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
    ...mapActions(["fetchBrands", "deleteBrand"]),

    editar() {

    },

    deletar(item) {

      // Verifica se realmente deve deletar
      this.$swal.fire({
        title: 'Deletar Marca',
        text: `Deseja realmente deletar a marca ${item.name}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Sim, pode deletar.',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteBrand(item);
        }
      })
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