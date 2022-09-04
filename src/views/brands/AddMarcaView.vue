<template>
  <PageTitle page="Adicionar marca" :pages="pages" />

  <div class="row">
    <div class="col-12">
      <FormBrand
          title="Adicione uma nova marca"
          description="Preencha os dados corretamente."
      />
    </div>
  </div>

</template>

<script>
import PageTitle from "@/components/template/PageTitle";
import FormBrand from "@/components/brands/FormBrand";

export default {
  name: "AddMarcaView",
  components: {FormBrand, PageTitle},
  data: () => ({
    pages: [
      {
        name: "Início",
        link: "/"
      },
      {
        name: "Marcas",
        link: "/marcas"
      }
    ],
  })
}
</script>