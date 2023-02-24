var res = [];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var d = new Date();
var search = document.getElementById("search");
async function getdata() {
    var data = await fetch("http://api.weatherapi.com/v1/search.json?key=762bba6dad754ab4a8a172721232102&q=frans")
    res = await data.json();
    displaywether(res.slice(0,3))
    console.log(res)

}
getdata();

function displaywether(arr) {
    var box = '';

    for (var i = 0; i < arr.slice(0,1).length; i++) {

        

            box += `

        <div class="col-lg-4 col-md-12 cards-1 " onclick=" recipeID( ${arr[i].id})"  >


        <div class="today d-flex justify-content-between">
            <div class="day" id="today"></div>
            <div class="date" id="date"></div>
        </div><!-- today -->

        <div class="contant " id="contant">
            <div class="location my-4 px-3 fs-2" id="location">${arr[i].name}</div>

            <div class="degree d-flex justify-content-between align-items-center px-4" id="degree">
                <div class="num " id="num">
                    ${arr[i].lat }
                    <sup>o</sup>
                    C
                </div><!-- num -->
                <div class="icons " id="icons">
                    <img src="imges/116.webp" width="50px" alt="">
                </div>
            </div><!-- degree -->
            <div class="custom text-info px-3 py-3">Partly cloudy</div>
            <div class="ms-3 mt-3 pb-5">

                <span class="me-3">
                    <img src="imges/icon-umberella.png" alt="">
                    20%
                </span>
                <span class="me-3">
                    <img src="imges/icon-wind.png" alt="">
                    18Km/h
                </span>
                <span class="me-3">
                    <img src="imges/icon-compass.png" alt="">
                    East
                </span>
            </div>


        </div><!-- contant -->

    </div><!-- 1 -->



        `
       
    }

    
    for (var i = 1; i < arr.slice(0,2).length; i++) {

        

        box += `


        <div class="col-lg-4 col-md-12 cards-1 ">


        <div class="today-1 d-flex justify-content-between">
            <div class="day-1 m-auto" id="day-1"></div>
        </div><!-- today -->


        <div class="contant-1 " id="contant-1">
            <div class="icons-1 text-center py-4">
                <img src="imges/113.webp" width="90px" alt="">

            </div><!-- icons-1 -->
            <div class="degree-1 text-white text-center ">
            ${arr[i].lat }
                <sup>o</sup>
                C

            </div><!-- degree-1 -->
            <small class="text-white d-flex justify-content-center my-3">
            ${arr[i].lon }
                <sup>o</sup>
            </small>

            <div class="text-info text-center mb-5 p-5 ">sunny</div>




        </div><!-- contant -->

    </div><!-- 2 -->



    `
   
}



    
    for (var i =2; i < arr.slice(0,3).length; i++) {

        

        box += `


        <div class="col-lg-4 col-md-12 cards-1 ">


        <div class="today-2 d-flex justify-content-between">
            <div class="day-2 m-auto" id="day-2"></div>
        </div><!-- today -->


        <div class="contant-2 " id="contant-2">
            <div class="icons-1 text-center py-4">
                <img src="imges/113.webp" width="90px" alt="">

            </div><!-- icons-1 -->
            <div class="degree-1 text-white text-center ">
            ${arr[i].lat }
                <sup>o</sup>
                C

            </div><!-- degree-1 -->
            <small class="text-white d-flex justify-content-center my-3">
            ${arr[i].lon }
                <sup>o</sup>
            </small>

            <div class="text-info text-center mb-5 p-5 ">sunny</div>




        </div><!-- contant -->

    </div><!-- 3 -->





    `
   
}



    document.getElementById("Row").innerHTML = box
    document.getElementById("date").innerHTML=d.toDateString();
    document.getElementById("today").innerHTML=days[d.getDay()];

    document.getElementById("day-1").innerHTML=days[d.getDay()+1];
    document.getElementById("day-2").innerHTML=days[d.getDay()-5];
    
}


//////search


// var product ={
//     pserch : search,
    

// }



// function serch(term){
//     var recipe=[]

//     for(var i = 0 ; i<recipe.length; i++){
//         if(recipe[i].pserch.tolowerCase().includes(term.tolowerCase())){
//             recipe.push(product[i]);

//         }
//     }
//     displaywether(recipe);
// }