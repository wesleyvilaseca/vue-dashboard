<template>
  <PageTitle page="Adicionar produto" :pages="pages" />
</template>

<script>
import PageTitle from "@/components/template/PageTitle";
export default {
  name: "AddProdutoView",
  components: {PageTitle},
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
  })
}
</script>

<style scoped>

</style>