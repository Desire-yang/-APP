<template>
  <div>
    <van-tabbar v-model="active" route>
     <van-tabbar-item replace icon="home-o" to="/shuJia">书架</van-tabbar-item>
     <van-tabbar-item replace icon="search" to="/sousuo">搜索</van-tabbar-item>
     <van-tabbar-item replace icon="friends-o">榜单</van-tabbar-item>
     <van-tabbar-item replace icon="setting-o">分类</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
    data() {
    return {
      active: 0,
    };
  },
}
</script>