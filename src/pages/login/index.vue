<template>
  <div>
      <view class="userinfo">
      <view class="userinfo-avatar">
      <open-data type="userAvatarUrl"></open-data>
      </view>
      <open-data type="userNickName"></open-data>
      </view>
          <div class="i-input">用户名：<input type="text" placeholder="请输入用户名" v-model="username"></div>
          <div class="i-input">密码：<input type="text" placeholder="请输入密码" v-model="userpassword"></div>
      
      <i-button i-class="btn" @click="toHome" type="ghost" shape="circle">进入</i-button>
    </div>
</template>

<script>
  

  export default {
   
    data() {
      return {
        username: "",
        userpassword: "",
      }
    },
    components: {
        
    },
    methods: {
    toHome(){
      if(this.username=='admin'&&this.userpassword=='123'){
          wx.switchTab({
          url: '/pages/index/main'
        })
      }else{
        wx.showToast({
            title: '用户名或密码错误',
            icon: 'none',
            duration: 2000
        })
      }
    },
   
    }
  }

</script>

<style scoped>
    div >>> .i-input {
      padding:7px 15px;
      color:#495060;
      position:relative;
      padding:12px 15px;
      display:flex;
      background:#fff;
      align-items:center;
      line-height:1.4;
      font-size:38rpx;
      overflow:hidden;

    }
   div >>> ._i-icon{
     margin-left:30px;
   }
   div >>> .btn{
     width:85%;
     margin:60px auto;
     color:#f76a24
   }

   div >>> .container1{
     background-color:#f8f8f9;
   }
 
  .userinfo {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
  }

  .userinfo-avatar {
    width: 128rpx;
    height: 128rpx;
    margin-top: 10rpx;
    border-radius: 50%;
    clip-path: circle(64rpx at center);
  }

  .userinfo-nickname {
    color: #fff;
    padding: 5px;
  }

  .weui-footer navigator span {
    text-decoration: underline;
  }

</style>

