<template>
  <PageTitle page="Marcas" :pages="pages" />

  <Modal
      v-show="isModalVisible"
      title="Editar produto"
      @close="closeModal">
    <template v-slot:content>
      <FormBrand
          title=""
          description=""
          :item="itemEdita"
          @processaFormulario="alterarMarca($event)"
      />
    </template>
  </Modal>

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
import Modal from "@/components/template/Modal";
import FormBrand from "@/components/brands/FormBrand";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Marcas",
  components: {FormBrand, Modal, TableList, PageTitle},
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
    isModalVisible: false,
    itemEdita: {},
    acoes: ['edit', 'delete'],
  }),
  methods: {
    ...mapActions(["fetchBrands", "deleteBrand", "updateBrand"]),

    closeModal() {
      this.isModalVisible = false;
    },

    editar(dados) {
      this.itemEdita = dados;
      this.isModalVisible = true;
    },

    alterarMarca(dados) {
      dados.id = this.itemEdita.id;

      var form = new FormData();
      form.set("name", dados.name);
      form.set("description", dados.description);

      this.updateBrand({
        obj: dados,
        form
      })
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