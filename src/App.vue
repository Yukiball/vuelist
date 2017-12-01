<template>
  <div id="app">
    <header></header>
    <div class="center">
      <div class="photo"></div>
      <list></list>
    </div>
    <footer>
      <div>设计</div>
      <div class="button">
        <span>X</span>
      </div>
      <div>编程</div>
    </footer>
    
  </div>
</template>

<script>
import list from './components/list'
export default {
  components:{
    list,
  },
  name: 'app',


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
    width: auto;
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
    position: absolute;
    height: 3rem;
    bottom:0rem;
  }
  footer span {
    display: inline-block;
    height: 3rem;
    width: 3rem;
    font-size: 2rem;
    border-radius: 50%;
    background-color: greenyellow;
    color: white;
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
