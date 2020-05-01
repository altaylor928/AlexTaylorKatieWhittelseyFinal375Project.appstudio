var query = ""
var req = ""
var results = ""
var meals = ""

function onXHRLoad() {
    let message = ""
    let apiData = JSON.parse(this.responseText)
    //console.log(apiData)
    //console.log(apiData.products[0].title)
    for (i = 0; i < 10; i++) {
        console.log(`${apiData.products[i].title}`)
        selMeal.addItem(apiData.products[i].title)
    }
}

function callAPI(URL) {
    var xhttp = new XMLHttpRequest();
    
    // if you need cors (you'll get a cors error if you don't have it and you need it)
    // use this code to add the cors code to your url 
        xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/' + URL)
    
    
       xhttp.setRequestHeader('x-rapidapi-host','spoonacular-recipe-food-nutrition-v1.p.rapidapi.com')
       xhttp.setRequestHeader('x-rapidapi-key','edc7eb4035mshe6375f705bb6efep1b33c9jsn5d2c01d6c528')
        

    // make the API request
    xhttp.addEventListener('load', onXHRLoad)
    xhttp.send()
}


// change name of button below
btnSearch.onclick=function(){
   meal = inptFood.value
    // url that Postman made with all the parameters embedded into it
    let requestURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/search?query=" + meal 
  // call the API calling code above
  callAPI(requestURL)
}

btnAdd1.onclick=function(s){
    let m = selMeal.value
    let c = "unknown"
    //console.log(m)
    //console.log(c)
    query = "INSERT INTO foodlog (Meal,Calories) VALUES ('" + m + "', '" + c + "')"
    //alert(query)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=alt49968&pass=Bballsoccer24!&database=alt49968&query=" + query)

    if (req.status == 200) { //transit worked.
        if (req.responseText == 500) {   // means the insert succeeded
            NSB.MsgBox(`You have successfully added the meal!`)
          } else
             NSB.MsgBox(`There was a problem with adding the meal to the database.`)
    } else {
        // transit error
        NSB.MsgBox(`Error: $req.status}`)
  }
}

//  change name of Form below
Search.onshow=function(){
}

hmbrMenu1.onclick=function(s){     // when just click the control. 's' is
                                 // the object returned
    if (typeof(s) == "object") { // do nothing - they just clicked on the control
       return
    } else {
    
        // if user clicked on a form name change based on what they chose (s)
        switch(s) {
        case "Food Log":
            ChangeForm(FoodLog)
            break
        case "Home":
            ChangeForm(Home)
            break
        case "Weight Log":
            ChangeForm(WeightLog)
            break
       case "Calorie Calculation":
            ChangeForm(CalMain)
            break
        case "Meal Plan":
            ChangeForm(MealPlan)
            break
        }
    }
}