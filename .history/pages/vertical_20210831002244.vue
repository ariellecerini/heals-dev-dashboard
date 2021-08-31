<template> 
<multipane class="custom-resizer" layout="vertical">
  <div class="pane" style="overflow-y: scroll;">
    <div class="dev container diagram">
        <div class="">
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
          
          <input-form/>
           
        </card> 
    </div>
  <div class="dev">
    <div class="dev ">
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
    <div> 
        <h2>Placeholder</h2> 
        </div>
    </div>
  </div>
</multipane>

</template> 

<script> 

export default{



}


</script> 