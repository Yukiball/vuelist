import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

const store = new Vuex.Store({
	state : {
		typetext:"",
	    numbertext:"",
	    masktext:"",
	    animatetext:"",
	},
	mutations: {
	    changetype (state,val) {
	      state.typetext = val
	    },
	    changenumber (state,val) {
	    	state.numbertext = val
	    },
	    changemask (state,val) {
	    	state.masktext = val
	    },
	    changeanima (state,val) {
	    	state.animatetext = val
	    }
	 }
})

export default store