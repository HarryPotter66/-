<template>
  <div @click="clickHandle">
  <i-notice-bar icon="systemprompt" loop>
    {{notice}}举行音乐盛典
      </i-notice-bar>
    <swiper v-if="imgUrls.length > 0" indidator-dots="imgUrls.length > 1" >
      <block v-for="(item, index) in imgUrls" :key="index" >
        <swiper-item>
          <image :src="item" mode="scaleToFill,widthFix" ></image>
        </swiper-item>
      </block>
    </swiper>
    <i-grid i-class="no-border">
     <i-grid-item i-class="no-border">
        <i-grid-icon>
            <image src="/static/images/dancer.png" @click="jump1"/>
        </i-grid-icon>
        <i-grid-label>劲爆舞曲</i-grid-label>
    </i-grid-item>
      <i-grid-item i-class="no-border">
        <i-grid-icon>
            <image src="/static/images/radio.png" @click="jump2"/>
        </i-grid-icon>
        <i-grid-label>经典老曲儿</i-grid-label>
    </i-grid-item>
    <i-grid-item i-class="no-border">
        <i-grid-icon>
            <image src="/static/images/symbol.png" @click="jump3"/>
        </i-grid-icon>
        <i-grid-label>流行音乐</i-grid-label>
     </i-grid-item>
     </i-grid>
     <i-panel title="也许你想了解音乐知识">
      <view class="top-padding">
       
      <i-card title="五线谱" extra="doremi" thumb="cloud://hahaha-4f10fd.6861-hahaha-4f10fd/43061ae0e513449be36cec6b7c70f1cb.jpg">
        <view slot="content"></view>
        <view slot="footer">what is rules in chrom？</view>
      </i-card>
    
      <i-card title="davekoz的经典欣赏" i-class="top-padding" extra=" " thumb="cloud://hahaha-4f10fd.6861-hahaha-4f10fd/untitled.png">
        <view slot="content">畅游爵士古典的海洋</view>
        <view slot="footer"></view>
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
      
      index: [],
      imgUrls: [
        'cloud://hahaha-4f10fd.6861-hahaha-4f10fd/saxophone-546303_640.jpg',
        'cloud://hahaha-4f10fd.6861-hahaha-4f10fd/music-3507317_640.jpg',
        'cloud://hahaha-4f10fd.6861-hahaha-4f10fd/music-1283851_640.jpg'
      ],
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'cloud://hahaha-4f10fd.6861-hahaha-4f10fd/6a2c8d019b4f7f0ced93b265d1af2158.gif'
      },
      mes: [],
      notice: '2019年4月3日',
      grids: ['摇滚', '爵士', '古典', '流行', '民谣']
    }
  },
  components: {
    card
  },

  methods: {
    jump1(){
       wx.navigateTo({
          url: '/pages/dancer/main'
        })
    },
    jump2(){
       wx.navigateTo({
          url: '/pages/radio/main'
        })
    },
    jump3(){
       wx.navigateTo({
          url: '/pages/symbol/main'
        })
    },
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
    const db = wx.cloud.database({ env: 'hahaha-4f10fd' })
    db.collection('know').get().then(
      res => {
        console.log(res)
        this.mes = res.data
      }
    )
    wx.cloud.callFunction({ name: 'me' }).then(
      res => { console.log(res) }
    )
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
