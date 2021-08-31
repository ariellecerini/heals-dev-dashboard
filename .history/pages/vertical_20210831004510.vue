<template> 
<multipane class="custom-resizer" layout="vertical">
  <div class="pane" style="overflow-y: scroll;">
    <div class="dev container diagram">
        <div class="">
        <button  v-on:click="connect()">connect</button> 
        <div style="display: flex; flex-direction: row; justify-content: space-between; width: 100vw;">
                <card id="takesInput" class="dev takes-input" style="margin: 2% 10%;">
                    <details class="user-info">
                    <summary>
                    <h6 class="dev box-title">User Dietary Needs and Preferences</h6>
                    </summary> 
                
                <div class="custom-select">
                    <select>
                        <option value="0">Use Predefined Persona</option>
                        <option value="1">Persona 1</option>
                        <option value="2">Persona 2</option>
                    </select>
                </div>
                
                <input-form/>
                    </details>
                </card> 
                  

                <card id="start" class="dev card question-input takes-input" style="margin: 2% 10%;">
                    <h6 class="dev box-title">User Question</h6>
                    <textarea class="dev text-area" id="user-question" rows="4" cols="50"/> 
                </card>
      </div>
    </div>
  <div class="dev">
    <div class="dev " style="width: 74%;">
      <details id="end" class="dev static-entities">
        <summary>
          Expanded User Question
        </summary>
        Insert content here  
      </details>
      </div>
<div style="display: flex; flex-direction: row; justify-content: space-between; width: 100vw;">

    <div class = "dev ">
       <div id="KBQA" class='dev KBQA'>
         <card class="dev static-entities">
     <h6 class="dev box-title">KBQA</h6>
        
      </card>
      </div>
    
      <div id="foodKG" class="foodKG">
        <card class="dev static-entities">
               <h6 class="dev box-title"> Food KG</h6>

         
          </card> 
        </div>
    </div>
    </div>
  </div>
  <div class="dev">
    <card id="returned" class="dev was-returned">
           <h6 class="dev box-title">Recommended Recipes</h6>

    </card>
  </div>
  
 

</div>
  </div>
  <multipane-resizer></multipane-resizer>
  <div class="pane" :style="{ flexGrow: 1 }">
    <div>
    <div> 
        <h2>Placeholder</h2> 
        </div>
    </div>
  </div>
</multipane>

</template> 

<script> 

import { Multipane, MultipaneResizer } from 'vue-multipane';
import Card from "../components/Card.vue";
import Accordion from "../components/Accordion.vue"; 
import Codemirror from "../components/codemirror.vue";
import LeaderLine from "leader-line-new"; 
import InputForm from "../components/InputForm.vue";
import "../assets/dev.css"
export default {
  components: {
    Multipane,
    MultipaneResizer,
    

    Codemirror,
    InputForm  },

   data () {
      var sidebar_state = 0; 
        return {
            sidebar_state
        }
    },
  methods: {
    connect: function (){
      new LeaderLine(
        document.getElementById('start'),
        document.getElementById('end'), {
          color: 'black',
          path: 'grid',
          startSocket:'right',
          endSocket: 'left'
        }

        );
      new LeaderLine(
        document.getElementById('takesInput'),
        document.getElementById('end'), {
          color: 'black',
          path: 'grid',
          startSocket:'right',
          endSocket: 'left'
        }
        );
      new LeaderLine(
        document.getElementById('end'),
        document.getElementById('KBQA'), {
          color: 'black',
          path: 'straight',
          startSocket:'right',
          endSocket: 'left'
        }
        );
      new LeaderLine(
        document.getElementById('foodKG'),
        document.getElementById('KBQA'), {
          color: 'black',
          path: 'straight'
        }
        );
      new LeaderLine(
        document.getElementById('KBQA'),
        document.getElementById('returned'), {
          color: 'black',
          path: 'grid',
          startSocket:'right',
          endSocket: 'left'
        }
        );
    }, 
    isReset: function (){

    },
    isRun: function (){

    }, 
    toggleSidebar: function () {


      if (this.sidebar_state === 1){
        this.sidebar_state = 0;
      } else if (this.sidebar_state === 0) {
        this.sidebar_state = 1; 
      }
    console.log("this ran");
    }
  },
  mounted() {
  
  }

};

</script> 

<style> 
details.user-info{
    dropshadow: none; 
}

</script> 