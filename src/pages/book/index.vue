<template>
  <div>
     <div class="blank"></div>
      <i-card i-class="re_card" v-for="item in action" :key="item" :title="item.name" :extra="'作者'+item.author" :thumb="item.image">
        <view slot="content">出版社：{{item.publisher}}
        </view>
        <view slot="footer">简介：{{item.content}}</view>
      </i-card>
    </div>

   

</template>

<script>
  

  export default {
   
    data() {
      return {
          name:'',
          author:'',
          publisher:'',
          content:'',
          image:'',
          action:[{
            name:'平凡的世界',
            author:'路遥',
            publisher:'中国人民出版社',
            content:'还不错',
            image:'cloud://hahaha-4f10fd.6861-hahaha-4f10fd/b0740ca9929d524987431b42d5c59510.jpg'
          },{
            name:'第七天',
            author:'余华',
            publisher:'儿童文学出版社',
            content:'内容丰富',
            image:'cloud://hahaha-4f10fd.6861-hahaha-4f10fd/u=3076621729,414904765&fm=26&gp=0.jpg'
          }]
        }
    }
  }

</script>

<style scoped>
  div >>> .re_card{
    margin-top:5px;
  }
  .blank{
    display:block;
    width:100%;
    height:10px;
}
</style>

