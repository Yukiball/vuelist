<template>
  <div id="app" @click="click()">
    <header></header>
    <div class="center">
      <div v-show="mask" class="mask" :class="{white:white,black:black}"></div>
      <div class="photo"></div>
      <list ref="list1" @changeclass="changeclass"></list>
    </div>
    <footer>
      <div>设计</div>
      <div class="button">
        <span class="btnfather" :class="{circle:isCircle}" @click="appear">X</span>
        <vbtn ref="vbtn" v-show="ok"></vbtn>  
      </div>
      <div>编程</div>
    </footer>
    
  </div>
</template>

<script>
import vbtn from './components/vbtn';
import list from './components/list';
export default {
  data(){
    return {
      isCircle:true,
      ok:false,
      mask:false,
      white:false,
      black:false,
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
      this.isCircle = boo;
      console.log(this.isCircle)
    },
    appear(){
      var that = this;
      console.log(this.$store.state.masktext)
      this.ok = !this.ok;
      this.mask = !this.ok
      if (that.$store.state.masktext !== ''||that.$store.state.masktext !== '无') {
        that.white = that.$store.state.masktext === 'white' ? true : false;
        that.black = that.$store.state.masktext === 'black' ? true : false;
      }
    },

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
    left: 50%;
    margin-left: -1.5rem;
    display: inline-block;
    height: 3rem;
    width: 3rem;
    font-size: 2rem;
    background-color: greenyellow;
    color: white;
  }
  footer span.circle{
    border-radius: 50%
  }
  footer div{
    text-align: center;
    font-size: 1.5rem;
    line-height: 3rem;
    flex: 1;
    float: left;
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
    opacity: 0.7;
    background-color: white;
    z-index: 9999
  }
  div.black{
    opacity: 0.7;
    background-color: black;
    z-index: 9999
  }
</style>
