<template>
  <div @click="clickHandle">
  <i-notice-bar icon="systemprompt" loop>
    {{notice}}举行音乐盛典
    </i-notice-bar>
   <img class="userinfo-avatar" src="cloud://hahaha-4f10fd.6861-hahaha-4f10fd/music.png" background-size="cover" />
   <i-grid i-class="no-border">
    <i-grid-item v-for="item in grids" :key="item"  i-class="no-border">
     <i-grid-lable>{{item}}</i-grid-lable>
    </i-grid-item>
   </i-grid>
    <i-panel title="也许你想了解的音乐知识">
      <view class="top-padding">
      <i-card title="五线谱" extra="doremi" thumb="cloud://hahaha-4f10fd.6861-hahaha-4f10fd/music.png">
        <view slot="content"></view>
        <view slot="footer">what is rules in chrom？</view>
      </i-card>
      <view class="top-padding"></view>
      <i-card title="卡片标题" i-class="top-padding" extra="额外内容" thumb="cloud://hahaha-4f10fd.6861-hahaha-4f10fd/music.png">
        <view slot="content">内容不错</view>
        <view slot="footer">尾部内容</view>
      </i-card>
      <view class="top-padding"></view>
      <i-card title="卡片标题" i-class="top-padding" extra="额外内容" thumb="cloud://hahaha-4f10fd.6861-hahaha-4f10fd/music.png">
        <view slot="content">内容不错</view>
        <view slot="footer">尾部内容</view>
      </i-card>
      <view class="top-padding"></view>
      <i-card title="卡片标题" i-class="top-padding" extra="额外内容" thumb="cloud://hahaha-4f10fd.6861-hahaha-4f10fd/music.png">
        <view slot="content">内容不错</view>
        <view slot="footer">尾部内容</view>
      </i-card>
      <view class="top-padding"></view>
      <i-card title="卡片标题" i-class="top-padding" extra="额外内容" thumb="cloud://hahaha-4f10fd.6861-hahaha-4f10fd/music.png">
        <view slot="content">内容不错</view>
        <view slot="footer">尾部内容</view>
      </i-card>
       <view class="top-padding"></view>
    </view>
    </i-panel>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      notice: '2019年4月3日',
      grids: ['摇滚', '爵士', '古典', '流行', '民谣']
    }
  },
  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all{
  width:7.5rem;
  height:1rem;
  background-color:blue;
}
.all:after{
  display:block;
  content:'';
  clear:both;
}
.left{
  float:left;
  width:3rem;
  height:1rem;
  background-color:red;
}

.right{
  float:left;
  width:4.5rem;
  height:1rem;
  background-color:green;
}
</style>
