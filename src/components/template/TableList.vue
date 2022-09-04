<template>
  <div class="card m-b-30">
    <div class="card-body">
      <h4 v-if="title.length" class="mt-0 header-title mb-4">{{ title }}</h4>
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
          <tr>
            <th  v-for="(label, labelIndex) in campos" :key="labelIndex" scope="col">{{ label.text }}</th>
          </tr>
          </thead>
          <tbody v-if="itens.length">
            <tr v-for="(item, itemIndex) in itens" :key="itemIndex">
              <td v-for="(label, labelIndex) in campos" :key="labelIndex">
                <p>{{ item[label.field] }}</p>
              </td>
            </tr>
          </tbody>

          <tbody v-else>
            <tr>
              <td>Nenhum registro encontrado.</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "TableList",
  props: ['title', 'campos', 'itens']
}
</script>

<style scoped>

</style>