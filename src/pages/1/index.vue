<template>
  <div>
   <view class='container'>
    准备好了吗？朋友
</view>
  <button class='btn' open-type='openSetting' bindtap='gopage'>
    <image class='btnImg' src='./static/tabs/start.png'></image>
  <view>进入</view>
  </button>
  </div>
</template>

<script>


export default {
  components: {
  
  },

  data () {
    return {
      
    }
  },

  created () {
    let logs
    if (mpvuePlatform === 'my') {
      logs = mpvue.getStorageSync({key: 'logs'}).data || []
    } else {
      logs = mpvue.getStorageSync('logs') || []
    }
    this.logs = logs.map(log => formatTime(new Date(log)))
  }
}
</script>

<style>
.btn1{
  width: 200rpx;
  height: 200rpx;
  margin-top: 20rpx;
  background-color: white;
  color: #999999;
  border-radius: 0rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30rpx;
}
.container{

  border: 2rpx black solid;

  width: 400rpx;

  height: 200rpx;

  text-align: center;

  line-height: 200rpx;

}
.btnImg{
  margin-right: 8rpx;
  width: 46rpx;
  height: 46rpx;
}

.btn1::after {
  border-radius: 98rpx;
  border: 0; 
}
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
</style>
