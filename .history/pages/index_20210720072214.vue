<template>
  <div class="container diagram">
    <div class="column col-left">
      <card class="question-input takes-input">
        <h4>User Question</h4>
        <input type="text" /> 
        <button onClick="">Submit</button>
      </card>
      <card class="takes-input">
        </card> 
    </div>
  <div class="col-centerd">
    <div class="center section1">
      <card class="static-entities">
        Expanded User Question
        </card>
      </div>
    <div class = "center section2">
       <div class='KBQA'>
         <card class="static-entities">
     
      
      </card>
      </div>
    
      <div class="foodKG">
        <card class="static-entities">
          </card> 
        </div>
    </div>
  </div>
  <div class="column col-right">
    <card class="was-returned">
    Recommended Recipes
    </card>
  </div>

</div>
</template>

<script>
import '../assets/style.css';
import Card from "../components/Card.vue";


export default {}
</script>

<style>
.container.diagram{
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: 100%; 
  padding: 4% 3%;
  flex-direction: row;

}

.takes-input{
  box-shadow: -3px 6px 6px #00000019;

  /* box-shadow: inset 0px 0px 6px #00000029; */
}

.was-returned{
  box-shadow: inset 0px 0px 9px #00000029;
}

.static-entities{
  border: 1px solid #E5E5E5;
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

/* .diagram{
  display: flex; 
  flex-direction: row; 
} */

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
  height: 100%; 
  min-height: 80vh; 
  justify-content: space-around;
}


div{
  border: grey; 
}


</style>
