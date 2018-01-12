<template>
  <div class="vbtn">
     <div :class="classObject" v-show="this.$store.state.numbertext === '2' ? false : true"><span style="background-color:yellow"></span></div>
     <div :class="classObject"><span style="background-color:pink"></span></div>
     <div></div>
     <div :class="classObject"><span style="background-color:blue"></span></div>
     <div :class="classObject" v-show="this.$store.state.numbertext === '2' ? false : true"><span style="background-color:black"></span></div>
  </div>
</template>

<script>
export default {
  name:'vbtn',
  data(){
    return{
      classObject: {
        active: true,
        'text-danger': false
      }
    }
  },
  methods:{

  },
  watch:{
    'this.$store.state.numbertext':function(){
      console.log(this.$store.state.numbertext)
    }
  },
  mounted(){

  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .vbtn{
    position: absolute;
    top:0;
    width: 100%;
    display: flex;
  }
  .vbtn div.flex{
    flex: 1;
  }
  .vbtn div.abso{
    position: absolute;
  }
  .vbtn span{
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    font-size: 2rem;
    display: inline-block;
    border-radius: 50%
  }
</style>
