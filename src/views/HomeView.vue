<template>
  <PageTitle page="Início" pages="" />

  <!-- Cards -->
  <div class="row">
    <CardNumber
        title="Produtos"
        :total="totalProducts"
        icon="mdi mdi-tag-multiple bg-success text-white"
        descricao="total de produtos"
        classe="col-sm-6"
      />

    <CardNumber
        title="Marcas"
        :total="totalBrands"
        icon="mdi mdi-tag-multiple bg-info text-white"
        descricao="total de marcas"
        classe="col-sm-6"
      />
  </div>

  <!-- Table -->
  <div class="row">
    <div class="col-xl-12">
      <TableList
          title="Últimos Produtos"
          :campos="campos"
          :itens="produtos"
          :acoes="acoes"
          @editar="editar($event)"
          @deletar="deletar($event)"
      />
    </div>

    <div class="col-md-12">
      <div class="text-center">
        <router-link to="/produtos" v-if="produtos.length" class="btn btn-purple">
          Todos os produtos
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "@/components/template/PageTitle";
import CardNumber from "@/components/template/CardNumber";
import TableList from "@/components/template/TableList";
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'HomeView',
  components: {TableList, CardNumber, PageTitle},
  data: () => ({
    campos : [
      { text: 'ID', field: 'id' },
      { text: 'Name', field: 'name' },
      { text: 'Created', field: 'date_created' },
    ],
    produtos : [
      { id: 1, name: 'Foo', date_created: '01.01.2021' },
      { id: 2, name: 'Bar', date_created: '01.01.2021' }
    ],
    acoes: [] // Edit, delete
  }),
  methods: {
    ...mapActions(["fetchBrands","fetchProducts"])
  },
  computed: {
    ...mapGetters(["totalBrands", "totalProducts"])
  },
  created() {
    this.fetchBrands();
    this.fetchProducts();
  }
}
</script>
