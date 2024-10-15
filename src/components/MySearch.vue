<template>
  <div class="px-6 mt-5">
    <h1 class=" text-center font-light text-2xl text-gray-500">通讯录</h1>
    <div class=" relative mt-4  input" >
        <button class="iconfont v-icon-bigSerch-copy absolute -top-2 left-0" id="search"></button>
        <input type="text" placeholder="Search..."  :value="value" @input="handleSearch">
        <button :class="{opacity:(Object.keys(filteredName).length)}"  id="search" class="iconfont v-icon-roundAdd absolute right-1 -top-2 add"></button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    value: String
  },
  computed: {
    ...mapState('linked', ['list']),
    filteredName () {
      const flgroup = this.list.filter(item => {
        return item.name.toUpperCase().includes(this.value.toUpperCase())
      })
      return flgroup
    }
  },
  methods: {
    handleSearch (e) {
      this.$emit('input', e.target.value)
    }
  }

}
</script>

<style scoped>
.hover-icon{
  color: #9c85ff;
}

input{
    width: 100%;
    border: none;
    outline: none;
    font-weight: 700;
}
.input{
    width: 100%;
    border: none;
    border-bottom:2px solid #b0b0b0;
    outline: none;
    padding-left: 30px;
    padding-bottom: 2px;
    color: #9c85ff;
    font-size: 18px;
    caret-color: #b0b0b0;
    transition: all .5s ease-in;
}
.input:hover{
  border-bottom: 2px solid #9c85ff ;
}
#search{
  transition: all .5s ease-in;
}
.input:hover #search{
  color: #9c85ff;
}
.iconfont{
    font-size: 23px;
    font-weight: 700;
    color: #b0b0b0;
}
.v-icon-roundAdd{
  font-size: 20px;
  top: 0;
}
</style>
