<template>
  <div class="m-5 pl-3 pr-3 pb-2 border-2 border-gray-200 rounded-md">
    <ul v-for="(contacts,letter) in groupedlist" :key="letter">
        <li class=" font-normal text-2xl title flex justify-between"><span class=" text-gray-500">{{letter}}</span><input type="checkbox" class=" opacity-0" :id="'upfold'+letter" v-model="titlefold[letter]" > <label :for="'upfold'+letter" class="iconfont v-icon-a-1_danchuang-dakai cursor-pointer text-gray-400"></label></li>
        <div v-if="titlefold[letter]">
            <ul  v-for="item in contacts" :key="item.id">
              <label :for="'phone'+item.id"><li class="name cursor-pointer">{{item.name}}<i v-if="collect[item.id]" class=" iconfont v-icon-round_like_fill pl-1"></i><input type="checkbox" :id="'phone'+item.id" v-model="phonefold[item.id]" class=" opacity-0"></li></label>

              <li class="text-sm font-bold flex justify-between phonebox" v-if="phonefold[item.id]">
                  <div class=" relative">
                      <a href="$tel:{item.phone}"><button class="iconfont v-icon-brand-whatsapp pr-1 text-purple-400"></button></a>
                      <i class=" text-gray-400 absolute cursor-pointer" >
                          <phoneTag :phone="item.phon" v-model="item.phon"></phoneTag>
                        </i>
                  </div>
                  <div class=" relative">
                    <input type="checkbox" id="like" class=" opacity-0" v-model="collect[item.id]">
                    <label for="like" v-if="collect[item.id]" ><i class="iconfont v-icon-a-1_cengji-xuanzhong absolute right-1 text-yellow-300 cursor-pointer" ></i></label>
                    <label for="like" v-else><i class="iconfont v-icon-a-1_cengji-weixuan absolute text-gray-400 right-1 cursor-pointer"></i></label>
                  </div>

              </li>
          </ul>
        </div>

    </ul>
    <div v-if="!Object.keys(groupedlist).length" class=" text-center text-gray-400  text-sm py-3">
      <i class="iconfont v-icon-a-1_kongshuju"></i><span class=" block py-2">Con't Find ...</span><span>Double click can add new friend ~</span>
    </div>
  </div>
</template>

<script>
import phoneTag from '@/components/phoneTag.vue'
export default {
  props: {
    list: Array,
    searchName: String
  },
  components: {
    phoneTag
  },
  data () {
    return {
      collect: {},
      titlefold: {},
      phonefold: {}
    }
  },
  created () {
    for (const letter in this.groupedlist) {
      this.$set(this.titlefold, letter, false)
      this.groupedlist[letter].forEach(item => {
        this.$set(this.phonefold, item.id, false)
      })
    }
  },
  computed: {
    groupedlist () {
      // 过滤
      const filteredlist = this.list.filter(item => {
        return item.name && item.name.toUpperCase().includes(this.searchName.toUpperCase())
      })
      // 分组
      const groups = {}
      filteredlist.forEach(item => {
        const firstLetter = item.name[0].toUpperCase()
        if (!groups[firstLetter]) {
          groups[firstLetter] = []
        }
        groups[firstLetter].push(item)
      })
      // 组排序
      for (const letter in groups) {
        groups[letter].sort((a, b) => a.name.localeCompare(b.name))
      }
      // 组件排序
      const sortedGroups = {}
      Object.keys(groups).sort().forEach(letter => {
        sortedGroups[letter] = groups[letter]
      })
      return sortedGroups
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.phonebox{
  border-bottom: 2px dotted #bfbfbf;
}
li{
    border-bottom: 1px solid #b4b4b4;
    height: 40px;
    line-height: 40px;
}
.title{
    height: 50px;
    line-height: 50px;
}
.name{
    color: rgb(153, 142, 255);
    font-weight: 700;
}
.phone{
    height: 30px;
    line-height: 30px;
    color: #9b9a9a;
    border-bottom: 2px dotted #b4b4b4;
}
.v-icon-a-1_cengji-xuanzhong,
.v-icon-brand-whatsapp,
.v-icon-round_like_fill
{
  font-weight: 700;
  font-size: 18px;
}
.v-icon-a-1_kongshuju{
  font-size: 20px;
}

.v-icon-a-1_cengji-weixuan{
  font-weight: 200;
  font-size: 18px;
}
</style>
