<template>
  <div>
      <audio :poster="poster" :name="name" :author="author" :src="src" id="myAudio" controls loop></audio>
      <div class="blank"></div>
      <audio :poster="poster2" :name="name2" :author="author2" :src="src2" id="myAudio2" controls loop></audio>
       <div class="blank"></div>
      <audio :poster="poster3" :name="name3" :author="author3" :src="src3" id="myAudio3" controls loop></audio>
    </div>
</template>

<script>


  export default {
    onLoad(){
      this.audioCtx = wx.createAudioContext('myAudio')
    },
    data() {
      return {
         poster: "http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000",
         name: "此时此刻",
         author: "许巍",
         src: "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46",
         poster2: "http://p2.music.126.net/_E7DK4uAT6T5AQDvfmrKvA==/7860408627008125.jpg",
         name2: "immortals",
         author2: "fall out boy",
         src2: "cloud://hahaha-4f10fd.6861-hahaha-4f10fd/Immortals.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46	",
         poster3: "",
         name3: "",
         author3: "",
         src3: ""
        }
    },
    methods: {
      audioPlay(){
        this.audioCtx.play()
      },
      audioPause(){
        this.audioCtx.pause()
      },
      audio14(){
        this.audioCtx.seek(14)
      },
      audioStart(){
         this.audioCtx.seek(0)
      },
    }
  }

</script>

<style scoped>
.blank{
  border:0px;
  width:100%;
  height:10px;
}
</style>

