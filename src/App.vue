<template>
  <div id="app" @click="click()">
    <header></header>
    <div class="center">
      <div class="photo"></div>
      <list ref="list1" @changeclass="changeclass"></list>
      <div ref="mask" v-show="mask" class="mask" :class="{white:white,black:black}" @click="maskclick()"></div>
    </div>
    <footer>
      <div class="class">设计</div>
      <div class="button class">
        <span class="btnfather" :class="btnfather" @click="appear()">X</span>
        <vbtn ref="vbtn" :ok="ok"></vbtn>  
      </div>
      <div class="class">编程</div>
    </footer>
    
  </div>
</template>

<script>
import vbtn from './components/vbtn';
import list from './components/list';
export default {
  data(){
    return {
      ok:false,
      mask:false,
      white:false,
      black:false,
      btnfather:{
        isCircle:true,
        left:false,
        right:false,
        middle:true,
      }
    }
  },
  components:{
    list,
    vbtn,
  },
  name: 'app',
  methods:{
    click(){
      this.$refs.list1.all()
    },
    changeclass(boo){
      this.btnfather.isCircle = boo;
    },
    appear(){
      var that = this;  
      this.ok = !this.ok;
      this.mask = !this.mask;
      if (that.$store.state.masktext !== ''||that.$store.state.masktext !== '无') {
        that.white = that.$store.state.masktext === 'white' ? true : false;
        that.black = that.$store.state.masktext === 'black' ? true : false;
      }
    },
    maskclick(){
      var that = this
      setTimeout(function(){
        if (that.$refs.mask.getAttribute('class') !== 'mask') {
          that.ok = !that.ok;
          that.mask = !that.mask;
        }
      },0)
    }
  },
  computed: {  
    listenstore() {  
      return this.$store.state.typetext;  
    }  
  },
  watch:{
    listenstore:function(newVal,oldVal){
      if(newVal == 'left'){
        this.btnfather.left = true;
        this.btnfather.right = false;
        this.btnfather.middle = false;
      }else if(newVal == 'right'){
        this.btnfather.left = false;
        this.btnfather.right = true;
        this.btnfather.middle = false;
      }else{
        this.btnfather.left = false;
        this.btnfather.right = false;
        this.btnfather.middle = true;
      }
    }
  }
}
</script>

<style>
  @import url('./assets/css/html.css');
  #app{
    height: 100%;
    width: auto;
    margin: 0 auto;
    background-color: #eee;
    position: relative;
  }
  .center{
    position: absolute;
    top: 2rem;
    bottom: 3rem;
    overflow: hidden;
    height:auto;
    width: 100%;
  }
  header{
    height: 2rem;
    width: 100%;
    z-index: 888;
    background-color: black;
  }
  .photo{
    margin: 1rem auto;
    height: 15rem;
    width: 15rem;
    border-radius: 50%;
    border: 1px solid gray;
    background-image: url('./assets/1.jpg');
    background-size: 15rem 20rem;
  }
  footer{
    background-color: white;
    display: flex;
    width: 100%;
    position: fixed;
    height: 3rem;
    bottom:0rem;
  }
  footer span.btnfather{
    z-index: 999;
    position: absolute;
    display: inline-block;
    height: 3rem;
    width: 3rem;
    font-size: 2rem;
    background-color: greenyellow;
    color: white;
  }
  footer span.isCircle{
    border-radius: 50%
  }
  footer span.middle{
    left: 50%;
    margin-left: -1.5rem;
  }
  footer span.left{
    left:0;
  }
  footer span.right{
    right: 0;
  }
  footer span.circle{
    border-radius: 50%
  }
  footer div.class{
    text-align: center;
    font-size: 1.5rem;
    line-height: 3rem;
    flex: 1;
  }
  footer:hover{
    cursor: pointer;
  }
  .button{
    position: relative;
  }
  div.mask{
    height: 100%;
    width: 100%;
    position: absolute;
  }
  div.white{
    top: 0;
    opacity: 0.7;
    background-color: white;
  }
  div.black{
    opacity: 0.7;
    top: 0;
    background-color: black;
  }
</style>
