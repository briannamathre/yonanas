<template>
<div>
  <div class="wrapper">
    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
    </div>
  </div>
  <Yonana :yonanas="yonana" />
</div>
</template>

<script>
import Yonana from "../components/Yonana.vue"
export default {
  name: 'All',
  components: {
    Yonana
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    yonana() {
      return this.$root.$data.yonanas.filter(yonana => yonana.name.toLowerCase().search(this.searchText) >= 0);
    }
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>
