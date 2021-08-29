<template>
 <split-pane v-on:resize="resize" :min-percent='20' :default-percent='30' split="vertical">
      <template slot="paneL">
        <div class="dev container diagram">
    <div class="dev column col-left">
      <button  v-on:click="connect()">connect</button> 
      <card id="start" class="dev card question-input takes-input">
        <h6 class="dev box-title">User Question</h6>
        <textarea class="dev text-area" id="user-question" rows="4" cols="50"/> 
      </card>
      <card id="takesInput" class="dev takes-input">
          <h6 class="dev box-title">User Dietary Needs and Preferences</h6>
          
          <div class="custom-select">
              <select>
                <option value="0">Use Predefined Persona</option>
                <option value="1">Persona 1</option>
                <option value="2">Persona 2</option>
              </select>
          </div>
          <form>
            <div style="width: 100%">
             <label style="width: 25%" for="AgeInYears">Age</label>
            <input  style="width: 70%" id="AgeInYears" type="number">
              <span style="margin-left: -23%;">yrs</span>
              </input>
             </div>

            <div style="width: 100%">

                <label style="width: 25%" for="WeightInLbs">Weight</label>
                <input id="WeightInLbs" style="width: 70%" type="number" label="Weight"/> 
                 <span  style="margin-left: -23%;">lbs</span>
                  </div>

                              <div style="width: 100%">

              <label style="width: 25%" for="HeightInFt">Height</label>
                <input id="HeightInFt" style="width: 70%" type="number" label="height" /> <span>ft</span>
                
                  </div>
          </form>
           
        </card> 
    </div>
  <div class="dev col-centerd">
    <div class="dev center section1">
      <details id="end" class="dev static-entities">
        <summary>
          Expanded User Question
        </summary>
        Insert content here  
      </details>
      </div>
    <div class = "dev center section2">
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
  <div class="dev column col-right">
    <card id="returned" class="dev was-returned">
           <h6 class="dev box-title">Recommended Recipes</h6>

    </card>
  </div>
  
 
          <button class="sidebar-toggle" v-on:click="toggleSidebar()">Code Editor</button>

</div>
      </template>
      

          <div v-if="sidebar_state===1">
              <template slot="paneR">
       
          <div>
             <div id="sidebarHome" class="sidebar-holder"> 
             <div class="sidebar" ref="sidebar"> 
                  <Codemirror/>
                    </div>
                    </div>
            </div> 
             </template>
            </div>
         
          
      
    </split-pane>
 <!-- <split-pane  split="horizontal">
      <template slot="paneT">
        <split-pane split="vertical">
          <template slot="paneL">
            <div>
              This is a test
            </div>
          </template>
          <template slot="paneR"> -->
              <!-- This is another test -->
            <!-- <div id="sidebarHome" class="sidebar-holder"> -->
          <!-- <button class="sidebar-toggle" v-on:click="toggleSidebar()">Code Editor</button> -->

          <!-- <div v-if="sidebar_state===1"> -->
              <!-- <div class="sidebar" ref="sidebar">
                  <Codemirror/>
                    </div>
                    </div>
            </div>  -->
          <!-- </template>
        </split-pane>
     </template>
     <template slot="paneB">
        <div class="sticky-footer">
            <button class="secondary white" v-on:click="isReset()">
              Reset
            </button>

            <button class="primary"  v-on:click="isRun()">
              Continue
            </button>
        </div> 
        </template>
    </split-pane>-->
  
</template> 
<script>

import Codemirror from "../components/codemirror.vue";
export default {
    data () {
      var sidebar_state = 0; 
        return {
            sidebar_state
        }
    },
     methods: {isReset: function (){

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
  }

}

</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
