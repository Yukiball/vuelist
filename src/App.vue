<template>
  <div id="app" @click="click()">
    <vbtn ref="vbtn" :type="type" :number="number" :mask="mask" :animate="animate" :btnStyle="btnStyle"></vbtn> 
    <div class="center">
      <div class="photo"></div>
      <list ref="list1"></list>
    </div>
    <footer>
      <div class="class">设计</div>
      <div class="button class"></div>
      <div class="class">编程</div>
    </footer>
  </div>
</template>

<script>
import list from './components/list';
import vbtn from './components/vbtn.components.js';
export default {
  name: 'app',
  data(){
    return {
      type:'',
      number:'',
      mask:'',
      animate:'',
      btnStyle:''
    }
  },
  components:{
    list,
    vbtn,
  },
  methods:{
    click(){
      this.$refs.list1.all()
    },
  },
  computed: {  
    listentype(){ return this.$store.state.typetext} ,
    listennumber(){ return this.$store.state.numbertext} ,
    listenmask(){ return this.$store.state.masktext} ,
    listenanimate(){ return this.$store.state.animatetext} ,
    listenbtnStyle(){ return this.$store.state.class} ,

  },
  watch:{
    listentype(newVal,oldVal){
      this.type = newVal;
    },
    listennumber(newVal,oldVal){
      this.number = newVal
    },
    listenmask(newVal,oldVal){
      this.mask = newVal;

    },
    listenanimate(newVal,oldVal){
      this.animate = newVal;
    },
    listenbtnStyle(newVal,oldVal){
      this.btnStyle = newVal;
    },
  }
}
</script>

<style>
  @import url('./assets/css/html.css');
  @import url('./assets/css/vbtn.css');
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
    background-image: url('/src/img/1.jpg');
    background-size: 15rem 20rem;
  }
  footer{
    background-color: white;
    display: flex;
    width: 100%;
    position: fixed;
    height: 4rem;
    bottom:0rem;
  }
  div.class{
    text-align: center;
    font-size: 1.5rem;
    line-height: 4rem;
    flex: 1;
  }
  footer:hover{
    cursor: pointer;
  }
  .button{
    position: relative;
  }
</style>
