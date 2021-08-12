<template>
  <div class="container diagram">
    <div class="column col-left">
      <card class="question-input">
        <input type="text" /> 
        <button onClick="">Submit</button>
      </card>
      <card>
        </card> 
    </div>
  <div class="col-centerd">
    <div class="center section1">
      <card>
        Expanded User Question
        </card>
      </div>
    <div class = "center section2">
       <div class='KBQA'>
         <card>
     
      
      </card>
      </div>
    
      <div class="foodKG">
        <card>
          </card> 
        </div>
    </div>
  </div>
  <div class="column col-right">
    <card>
    Recommended Recipes
    </card>
  </div>

</div>
</template>

<script>
import Card from "../components/Card.vue";
export default {}
</script>

<style>
.container .diagram{
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  text-align: center;
  width: 100%; 
  padding: 4% 3%;
  flex-direction: row; 
}

.col-centerd{
  display: flex;
  flex-direction: row;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}



.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.col-left{
  display: flex; 
  flex-direction: column; 
}


div{
  border: grey; 
}


</style>
