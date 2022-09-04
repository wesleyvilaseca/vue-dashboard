<template>
  <div class="card m-b-30">
    <div class="card-body">
      <h4 class="mt-0 header-title">{{ title }}</h4>
      <p class="sub-title" v-if="description.length" >{{ description }}</p>

      <div class="form-group">
        <label>Nome da marca</label>
        <input type="text" class="form-control" placeholder="Ex: Samsung" v-model="marca.title" />
      </div>

      <div class="form-group">
        <label>Descrição</label>
        <input type="text" class="form-control" placeholder="Descrição sobre a marca" v-model="marca.description" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormBrand",
  props: {
    title: {
      type: String,
      required: false,
      default: ""
    },
    description: {
      type: String,
      required: false,
      default: ""
    }
  },
  data: () => ({
    marca: {
      title: "",
      description: ""
    }
  })
}
</script>