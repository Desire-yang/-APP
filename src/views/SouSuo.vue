<template>
    <div>
        
        <div class="sousuo">
        <van-search v-model="value" show-action shape="round" background="#ff625f"  placeholder="请输入搜索关键词" @search="onSearch">
  <template #action>
    <div @click="onSearch">搜索</div>
  </template>
    </van-search>
        </div>
        <div>
            <QieHuan></QieHuan>
        </div>
         <DiBu></DiBu>
    </div>
</template>
<script>
import DiBu from '../components/DiBu'
import QieHuan from '../views/QieHuan'
export default {
       components:{
        DiBu,
        QieHuan
      },
}
</script>
<style scoped>
.sousuo{
    height:5rem;
    margin-top: -60px; 
}
</style>