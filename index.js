var fetch = require('node-fetch');

(async () => {
	var response = await fetch('https://data.transportation.gov/resource/4f3n-jbg2.json?year=2019');
	var body = await response.text();

  let obj = JSON.parse(body);
  console.log(obj);
  let array = [];
  let visit = [];
  let cheapest = [];
  console.log("1. Los Angeles");
  console.log("2. San Francisco"); 
  console.log("3. New York City"); 
  console.log("4. Denver");
  console.log("5. Atlanta"); 
  console.log("6. Orlando");
  
  let city1Number = prompt("Give a first city to search (You can use the number above for a specific city)");
  if (city1Number == 1){
    city1 = "Los Angeles";
  }
  if ( city1Number == 2){
    city1 = "San Francisco";
  }
  if ( city1Number == 3){
    city1 = "New York City";
  }
  if ( city1Number == 4){
    city1 = "Denver";
  }
  if ( city1Number == 5){
    city1 = "Atlanta";
  }
  if ( city1Number == 6){
    city1 = "Orlando";
  }
  let city2Number = prompt("Give a second city to search (You can use the number above for a specific city)");
  if (city2Number == 1){
    city2 = "Los Angeles";
  }
  if ( city2Number == 2){
    city2 = "San Francisco";
  }
  if ( city2Number == 3){
    city2 = "New York City";
  }
  if ( city2Number == 4){
    city2 = "Denver";
  }
  if ( city2Number == 5){
    city2 = "Atlanta";
  }
  if ( city2Number == 6){
    city2 = "Orlando";
  }
    for( let i = 0; i<obj.length; i++){
      let flight = obj[i];
      if( flight.city1.startsWith(city1)){
        //push flgiht into flgiht found array
        array.push(flight);
        //console.log("push1 " + flight.city2);
        if( flight.city2.startsWith(city2)){
          console.log("Direct " + flight.city1 + flight.city2 + " $" + Number(flight.fare).toFixed(2) + " found!" );  
       } 
      }
    //console.log("Looking flight from " + flight.city1);
      while( array.length != 0){
            let flight = array.shift();
            //console.log("pop2 " + flight.city2);
            visit.push(flight);
            if( flight.city2.startsWith(city2)){
          console.log("Indirect " + flight.city1 + " to " + flight.city2 + " " + " $" +  Number(flight.fare).toFixed(2) + " found!"); 
          cheapest.push(flight); 
       }else {
         for(let i=0; i<obj.length; i++){
           let flight2 = obj[i];
           if( flight2.city1.startsWith(flight.city2) && ! visit.includes(flight2)){
             array.push(flight2);
           }
         }
        }
      }
    }
   // if (visit.length < 1){
    //console.log("Sorry, Flight Not Found");
    //}
     //else{
    let min = cheapest[0];
      for (let flight2 of cheapest){
      if(flight2.fare < min.fare)
      min = flight2;
  }
  let total = Number(min.fare);
  console.log("This is the cheapest fare $" + total.toFixed(2) + " " + min.city1 + " " + min.city2);

  for( let i = 0; i<obj.length; i++){
      let flight = obj[i];
     // console.log(flight.city1 + city1);
      if( flight.city1.startsWith(city1)
        && min.city1.startsWith(flight.city2)){
        total += Number(flight.fare);
        //console.log(flight.fare);
        console.log("This is the total fare " + flight.city1 + " to " + min.city2 + " $" + total.toFixed(2));
        }
  }
//}
})();;