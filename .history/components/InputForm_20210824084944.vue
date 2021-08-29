<template>
    <b-form-group>
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

             
            <div style="width: 100%">
                  <label for="Gender"> Gender Assigned at Birth</label> 
                <select id="Gender">
                    <option value="0">Male</option>
                    <option value="1">Female</option>
                </select>
            </div>

            <div style="width: 100%">
                  <label for="DiStatus">Diabetic Status</label> 
                <select id="DiStatus">
                    <option value="0">Status 1</option>
                    <option value="1">Status 2</option>
                    <option value="2">Status 3</option>
                    <option value="3">Status 4</option>
                </select>
            </div>


            <div style="width: 100%">
                  <label for="CalcBMI">Calculated BMI</label> 
                  <input id="CalcBMI" style="width: 50%; margin-left: auto;"/> 
            </div>

            <div style="width: 100%">
                  <label for="AppGuide">Applicable Guidelines</label> 
                  <input id="AppGuide" style="width: 50%; margin-left: auto;"/> 
            </div>

             
                
          </b-form-group>
</template>