<template>
  <div id="app" @click="click()">
    <header></header>
    <div class="center">
      <div class="photo"></div>
      <list ref="list1" @changeclass="changeclass"></list>
    </div>
    <footer>
      <div>设计</div>
      <div class="button">
        <span :class="{circle:isCircle}" @click="appear">X</span>
      </div>
      <div>编程</div>
    </footer>
    
  </div>
</template>

<script>
import list from './components/list'
export default {
  data(){
    return {
      isCircle:true
    }
  },
  components:{
    list,
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
      //添加appear
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
  header{
    height: 2rem;
    width: 100%;
    z-index: 888;
    background-color: black;
  }
  .photo{
    margin: 1rem auto;
    height: 20rem;
    width: 20rem;
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
  footer span {
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
</style>
