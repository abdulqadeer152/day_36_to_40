//// Day 36

import { time } from "console";

/// Question # 106

// This function checks if a year is a leap year
function isLeapYear(year: number): boolean {
    // Checks the conditions for a leap year
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  
  console.log(isLeapYear(2020)); // Outputs: true
  console.log(isLeapYear(1900)); // Outputs: false


  /// Question # 107

  // This function checks if a number is divisible by both 2 and 3
  function isDivisibleByTwoAndThree(numbers:number): boolean{
    return numbers % 2 === 0 &&  numbers % 3 == 0

  }

  console.log(isDivisibleByTwoAndThree(12));
  console.log(isDivisibleByTwoAndThree(14));
  

  /// Question # 108

// This function compares two strings, ignoring case sensitivity
  function areStringsEqualIgnoreCase(str1:string, str2:string):boolean{
    return str1.toLowerCase()  === str2.toUpperCase()
  }
  console.log(areStringsEqualIgnoreCase("hallow", "HALLOW"));
  
  console.log(areStringsEqualIgnoreCase("world", "WORLD"));


  //// Day 37

  /// Question # 109

  // Checks the current hour and logs "Good Morning" if it's before 12 PM
const checkTime= new Date();
if(checkTime.getHours() < 12){
     console.log('Good Morning');
     
};


////// Question # 110

function grade(score:number){
    if(score >= 90){
        return 'A'
    }else if(score >= 80){
        return 'B'
    }else if(score >= 70){
        return 'C'
    }else if(score >= 60){
        return 'D'
    }else{
        return'Fail'
    }
}

console.log(grade(95));
console.log(grade(78));


///// Question # 111

function categorizeage(age:number){
    if(age < 13){
        return "Child"
    }else if(age <= 20){
        return "Teendeger"
    }else if(age <= 35){
        return "Adult"
    }
}
console.log(categorizeage(12));
console.log(categorizeage(24));
console.log(categorizeage(19));


//// day 38
//// Question # 112

const countries = new Map<string,string>();

countries.set("USA", "Washington, D.C."); // Adds USA to the Map
countries.set("London", "Magolenor");
countries.set("Paris", "France");
countries.set("Afganistan", "Kapul");

console.log(countries);


//// Question # 113

const countriesS = new Map<string, string>();
countriesS.set("USA", "Washington, D.C."); // Adds USA to the Map
countriesS.set("France", "Paris"); // Adds France to the Map
countriesS.set("Japan", "Tokyo");

function isCapitalofcanada(countriesS: Map<string,string>){
    if(countriesS.has("Canada")){
        console.log(`The Capital of Canada is ${countriesS.get("canada")}`);
        
    }else {
        console.log('Canada Is not found in the map');
        
    }
}
  isCapitalofcanada(countriesS);


  //// Question # 114

  // Creates a Map to store student IDs (keys) and names (values)

  const student = new Map<number,string>();

  student.set(1,"Kallow");
  student.set(2, "kashalo")
  student.set(3, "falto")

student.forEach((name, id) => {
    console.log(`Students id ${id}, student name: ${name}`);
    
});


//// day 39

/// Question # 115

function logDayOfWeek(dayNumber: number): void {
    switch (dayNumber) {
      case 1:
        console.log("Sunday");
        break;
        case 2:
        console.log("monday");
        break;
        case 3:
        console.log("tuesday");
        break;
        case 4:
        console.log("wednesday");
        break;
        case 5:
        console.log("thursday");
        break;
        case 6:
        console.log("friday");
        break;
        case 7:
        console.log("saturday");
        break;
}
}

logDayOfWeek(4);

//// Question # 116

function logseason(month:number){
    switch(month){
        case 12:
        case 1:
            case 2:
                console.log('Winter');
                break
                case 3:
        case 4:
            case 5:
                console.log('spring');
                break
                case 6:
        case 7:
            case 8:
                console.log('summer');
                break
                case 9:
        case 10:
            case 11:
                console.log('Autumn');
                break
                
    }

}

logseason(4);


//// Question # 117

function defualtgrade(remark:string){
    switch(remark){
        case 'A':
            console.log('Exellent');
            break;
            case 'B':
                console.log('Good');
                break;
                case 'C':
                    console.log('Welldone');
                    break;
                    case 'D':
                        console.log('Better');
                        break;
                        case 'A':
                            console.log('fail');
                            break;
                            default:
                                console.log('Invalid');
                                break
                                
            
    }
}

defualtgrade('A');


///// DAy 40

/// Question # 118

// This loop logs numbers from 1 to 10
for (let i =1; i <= 10; i++){
    console.log(i);
    
}


//// Quwestion # 119

let count : number= 0;
while (count < 5) {
    console.log("Hallow World");
    count++
}


//// Question # 120

// Defines an array of favorite movies
const favoriteMovies: string[] = [
    "Inception",
    "The Matrix",
    "Interstellar",
    "The Prestige",
  ];

  for (const movie of favoriteMovies){
    console.log(movie);
    
  }