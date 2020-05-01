//user enters age, height, weight, gender

let gender = ["Male","Female"]

btnSubmit.onclick=function(){
    let age = inptAge.value
        let newAge = parseInt(age)
            //console.log(newAge)
    let height = inptHeight.value
        let newHeight = parseInt(height)
    let weight = inptWeight.value
        let newWeight = parseInt(weight)
  
    let femaleResult = ((10 * newWeight) * 30.48) + ((6.25 * newHeight) / 2.2) - (5 * newAge) - 161
        let femaleCalories = parseInt(femaleResult)
        let fCals = femaleCalories.toFixed(2) 
          //console.log(fCals)
    let maleResult = ((10 * newWeight) * 30.48) + ((6.25 * newHeight) / 2.2) - (5 * newAge) + 5
        let maleCalories = parseInt(maleResult)
        let mCals = maleCalories.toFixed(2)  
          //console.log(mCals)
     
       if (selGender == "Female") {
       modHome.toggle()   // show the modal control
       modHome.value = `Your daily calorie intake to maintain your weight should be ${fCals} calories.`
  } else {
       modHome.toggle()   // show the modal control
       modHome.value = `Your daily calorie intake to maintain your weight should be ${mCals} calories.`
       }
}

Home.onshow=function(){
  selGender.clear()
  for (i = 0; i <= gender.length - 1; i++) {
       selGender.addItem(gender[i])
       }
}

hmbrMenu4.onclick=function(s){     // when just click the control. 's' is
                                 // the object returned
    if (typeof(s) == "object") { // do nothing - they just clicked on the control
       return
    } else {
    
        // if user clicked on a form name change based on what they chose (s)
        switch(s) {
        case "Search for Food":
            ChangeForm(Search)
            break
        case "Home":
            ChangeForm(Home)
            break
        case "Weight Log":
            ChangeForm(WeightLog)
            break
       case "Food Log":
            ChangeForm(FoodLog)
            break
        case "Meal Plan":
            ChangeForm(MealPlan)
            break
        }
    }
}