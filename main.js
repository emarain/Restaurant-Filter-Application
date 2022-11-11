


//object constructor - turns the inputs into an object
//there are defaults that we can assume are false unless told to over ride
//use this. to refer to the object 
function Resturant(name, location, glutenFree=false, vegan=false, vegetarian=false)
{
    this.name = name;
    this.location = location;
    this.glutenFree = glutenFree;
    this.vegan = vegan;
    this.vegetarian = vegetarian;

}

//creating an array that has all of the values of the resturant
//left the ones that dont have GF, Vegan, or Veg options blank
//specified with true or false if they did have those three or some of the options
//using true or false will allow me to create the if statement using boolean values
let allResturants = [
    new Resturant ('Macho Meals', '337 St Paul Ave.'),
    new Resturant ('Veganic Corner', '24 S. Buckingham Road', glutenFree=true, vegan=true, vegetarian=true),
    new Resturant ('Sherryl Meals', '7897 Glen Eagles Court', glutenFree=true, vegan=false, vegetarian=false),
    new Resturant ('Salad Heaven', '593 Harvey Street', glutenFree=false, vegan=true, vegetarian=true),
    new Resturant ('Root Shoots', '18 South Chapel Street', glutenFree=true, vegan=true, vegetarian=true),
    new Resturant ('Grill Moguls', '40 State Rd.', glutenFree=true, vegan=false, vegetarian=false),
    new Resturant ('NovaFood', '9026 Jones Rd.', glutenFree=true, vegan=true, vegetarian=false),
    new Resturant ('Sangli', '426 Summerhouse Ave.'),
    new Resturant ('Lavoya Diner', '83 Beacon Lane', glutenFree=true, vegan=false, vegetarian=true),
    new Resturant ('Andisova', '474 Mayfield Ave.', glutenFree=true, vegan=false, vegetarian=false),
];

//creating a function for the on click event (submit button)
//once this button is clicked it has an output of the selected check boxes


function myFunction(){

    //giving all check boxes the same name "foodOptions" allows us to grab them ALL with one line
    let checkboxes = document.querySelectorAll('input[name="foodOptions"]:checked');
    //creating an empty array for the checked boxes will allow me to place the checked items
    let checked = [];


    //forEach = allows the code to preform a specific action once the CHECKBOXES are ckicked
    checkboxes.forEach((checkbox) => {
        //the "id" value which will be the same as the resturant object property name.
        //this allows the property names to match up with the ids which means that we can tie the check box to a specific resturant
        checked.push(checkbox.id);
    });

    //console.log so that the console window shows the matched resturants when check boxes get clicked
    console.log(allResturants);
    console.log(checked);

    // each time this runs, it'll start with an empty array called matches
    let matches = [];

    //creating if statment to create a reaction when one of the check boxes is clicked and submited 
    //the arraysAreIdentical takes two arrays and tells us if they are euqal with true or false
    //the "checked" array are to see which options are checked to see if it applies to the resturant that should be showing


    if (arraysAreIdentical(checked, ['glutenFree', 'vegan', 'vegetarian']) || checkboxes === true) {
        //this shows the matches for the oprions GF, V, and VG. The requierments are specified in the []
        matches = allResturants.filter( restaurant => restaurant['glutenFree'] === true && restaurant['vegan'] === true && restaurant['vegetarian'] === true )
    } else if (arraysAreIdentical(checked, ['glutenFree', 'vegan'])) {
        matches = allResturants.filter( restaurant => restaurant['glutenFree'] === true && restaurant['vegan'] === true )
    } else if (arraysAreIdentical(checked, ['glutenFree', 'vegetarian'])) {
        matches = allResturants.filter( restaurant => restaurant['glutenFree'] === true && restaurant['vegetarian'] === true )
    } else if (arraysAreIdentical(checked, ['vegan', 'vegetarian'])) {
        matches = allResturants.filter( restaurant => restaurant['vegan'] === true && restaurant['vegetarian'] === true )
    } else if (arraysAreIdentical(checked, ['glutenFree'])) {
        matches = allResturants.filter( restaurant => restaurant['glutenFree'] === true )
    } else if (arraysAreIdentical(checked, ['vegan'])) {
        matches = allResturants.filter( restaurant => restaurant['vegan'] === true )
    } else if (arraysAreIdentical(checked, ['vegetarian'])) {
        matches = allResturants.filter( restaurant => restaurant['vegetarian'] === true )
    } else {
        //this shows matches who dont have any of the options. this is shown because all of them are === false
        matches = allResturants.filter( restaurant => restaurant['glutenFree'] === false && restaurant['vegan'] === false && restaurant['vegetarian'] === false )
    }
    //adding a label to the matches. this is the text that is provided in console window
    console.log("matched restaurants:");
    
    console.log(matches);


    //I created a table beacause I didn't know how to do it how the assignment looked
    //I decided not to do the (th) table header seeing as it is just the name and location of the resturant
    //I did document.getElementById so that I could tie it to the div that will be showing the output/matches
    
    //matches.map - calls a callback function for each element in the array and then returns the results
    //.join - adds the elememnts of an array into a string
    //I am calling the paramaters so that they will show the name AND location

    document.getElementById('restaurants').innerHTML =
        `<table>
        <tr>` + matches.map(match => `
        <td>${match.name}<br>${match.location}</td>
        </tr>`
    ).join('');

}

// Helper function to determine if two arrays contain the same objects
// !== - checks to see if they are not equal
//I defined the 1st and seconds array with the parameters
//I then did an if statement to make sure that if array1 IS NOT = TO array 2 then it returns as FALSE

function arraysAreIdentical(array1, array2){
    if (array1.length !== array2.length) return false;
    for (var i = 0, len = array1.length; i < len; i++){
        if (array1[i] !== array2[i]){
            return false;
        }
    }
    return true; 
}
