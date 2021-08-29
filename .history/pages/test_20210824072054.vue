<template>
<multipane class="custom-resizer" layout="vertical">
  <div class="pane">
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
  
 

</div>
  </div>
  <multipane-resizer></multipane-resizer>
  <div class="pane" :style="{ flexGrow: 1 }">
    <div>
      <h6 class="title is-6">Pane 3</h6>
    </div>
  </div>
</multipane>
</template>

<script>
import { Multipane, MultipaneResizer } from 'vue-multipane';
export default {
  components: {
    Multipane,
    MultipaneResizer,
  },
};
</script>

<style>
.custom-resizer {
  width: 100%;
  height: 400px;
}
.custom-resizer > .pane {
  text-align: left;
  padding: 15px;
  overflow: hidden;
  background: #eee;
  border: 1px solid #ccc;
}
.custom-resizer > .pane ~ .pane {
}
.custom-resizer > .multipane-resizer {
  margin: 0; left: 0;
  position: relative;
  /* &:before {
    display: block;
    content: "";
    width: 3px;
    height: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -20px;
    margin-left: -1.5px;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
  } */
  /* &:hover {
    &:before {
      border-color: #999;
    }
  } */
}
</style>