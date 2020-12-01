<template>
    <div>
        <van-cell is-link @click="showPopup">最佳女婿</van-cell>
<van-popup v-model="show">内容</van-popup>
    </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    },
  },
};
</script>