<template>
 <van-popover placement="bottom-end" v-model="showPopover" trigger="click" :actions="actions" theme="dark" @select="onSelect">
  <template #reference>
   <van-button type="primary">
      <van-icon name="wap-nav" />
    </van-button>
  </template>
</van-popover>
</template>
<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      showPopover: false,
      actions: [{ text: '选项一' }, { text: '选项二' }, { text: '选项三' }],
    };
  },
  methods: {
    onSelect(action) {
      Toast(action.text);
    },
  },
};
</script>

