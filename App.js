console.log("Hello World this is my first stage in learning Javascript");
console.log("Here is a code for a random number generator");

console.log(Math.floor(Math.random() * 10));

/* conventions used when naming Variables;
1- Variables starts with lower case letters and are descriptive, to ease interpretation
2- Variables don't contain space else it will be interpreted as two different variable
rather use underscores or camelCase letters to describe a variable name with two or more words 
*/

/* Variable Data Types in Javascript, there exist about seven; 
1- string: can be declared using a single, double quotes or a backticks 
in a string using backticks you can point to variables and their respective values will be substituted into the line.*/

let stri1="What is your Name dude? is it \"Mike\"?";
console.log(stri1);
/* As we can see the backslash character helps me to tell the interpreter not to take the next character as it would normally do
*/

/* 2- Number datatype;
there are different kinds of numbers it can represent. First
of all, integers, for example: 4 or 89. But the number data type can
also be used to represent decimals, exponentials, octal, hexadecimal,
and binary numbers*/

let car = {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
   };
   for (let prop in car){
    console.log(prop);
    console.log(car[prop]);
   }

   let arrkey= Object.keys(car);
   arrkey.forEach(e=> console.log(e));

   /* CLASSES and OOP in JavaScript
   Classes in JavaScript represents an alternative syntax to write an object using a constructor 
   a class is created using a special keyword called class followed by the name of the class
   inside the class the next thing declared and defined is the constructor having parameters and body function*/
   
   class ClassName{
    constructor(prop1, prop2){
        this.prop1 = prop1;
        this.prop2 = prop2;
    }
   }
   let obj= new ClassName("Ghost", "Goats");
   // Classes are just some special functions beneath the surface 

   // Exercise 7.1
    class Person{
        #firstName;
        #lastName;
        constructor(firstName, lastName){
            if(firstName.startsWith("M")){
                this.#firstName=firstName;
            }
            else{
                this.#firstName="M"+firstName;
            }
            this.#lastName=lastName;
        }
        get firstName(){
            return this.#firstName;
        }
         get lastName(){
            return this.#lastName;
         }
         set firstName(firstName){
            this.#firstName=firstName;
         }
         set lastName(lastName){
            this.#lastName=lastName;
         }
    }

    let friend=new Person("el", "Modeiro");
    console.log("hello " ,friend.firstName, friend.lastName);

    /* Getters and setters are more of like properties than functions 
    they're termed accessors. its considered good practice to make fields private as much as possible providing access to them only using accessors
    in this way, the properties cannot be set from outside without the object itself being in control. this is called the principle of Encapsulation*/
    // the class encapsulate the data and the object is in control of its own fields
 

    /* the principle of Inheritance:
    with the extend keyword we specify that a certain class is the child of another class. in this case, motorcycle us a child class of vehicle
     take note the super function  inside the child class constructor is calling the parent constructor making sure that the fields from the parent are set as well and that the methods are available without having to do anything else, they're automatically inherited 
     calling the  super() is madatory else you will get a reference error */

    // decoding and encoding URI
    /* methods are encodeURI(variableNameOfTheURI) decodeURI(variableNameOfTheURI)
    encodeURIComponent(variableNameOfTheURI) decodeURIComponent(variableNameOfTheURI) bestway
    */

    function rainbowify(){
        let divs=document.getElementsByTagName("div");// this method returns an HTML collection of all the elements with tag name "div" and store the array in the declared variable divs 
        for(let i=0; i<divs.length;i++){
            divs[i].style.backgroundColor=divs[i].id;
    }
}