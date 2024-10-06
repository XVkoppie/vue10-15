<template>
  <div class=" w-44">
    <input ref="inp" :value="value" v-focus v-if="isEdit" type="text" @blur="isEdit=false" @keyup.enter="handleEnter" placeholder="doubleclick add number" class="outline-none font-semibold">
    <div @dblclick="handleClick" v-else class=" font-semibold">{{phone}}</div>
  </div>
</template>

<script>
export default {
  props: {
    phone: String,
    value: String
  },
  data () {
    return {
      isEdit: false
    }
  },
  methods: {
    handleClick () {
      this.isEdit = true
      // 等待dom渲染完后再执行
    //   this.$nextTick(() => {
    //     this.$refs.inp.focus()
    //   })
    },
    handleEnter (e) {
      if (e.target.value.trim() === '') {
        this.$emit('input', 'doubleclick add number')
        this.isEdit = false
        return
      }
      this.$emit('input', e.target.value)
      this.isEdit = false
    }
  }
}
</script>

<style scoped>
    input{
        height: 20px;
        width: 170px;
        border-bottom: 3px dotted #afa5ff;
    }
</style>
