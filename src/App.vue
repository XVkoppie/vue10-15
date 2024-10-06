<template>
  <div>
    <MySearch v-model="searchName"></MySearch>
    <MyFriends :list="list" :searchName="searchName"></MyFriends>
  </div>
</template>

<script>
import MyFriends from './components/MyFrienfs.vue'
import MySearch from './components/MySearch.vue'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      searchName: ''
    }
  },
  created () {
    this.$store.dispatch('linked/getList')
  },
  components: {
    MyFriends,
    MySearch
  },
  computed: {
    ...mapState('linked', ['list'])

  }
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
</style>
