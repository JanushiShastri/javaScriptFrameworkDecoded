function greet(firstname, lastname, lan, ...other){ //this other is called spread if while funciton calling number of parametes increase or undefiend then other will take that as array list javascript, this is called spread
    lan = lan || "en";
    console.log(firstname);
    console.log(lastname);
    console.log(lan);
    console.log("-----------");
    console.log(arguments);


}
greet();
greet("janushi", "shastri");
greet("janushi", "shastri", "guj");
greet("janushi", "shastri", "guj","add", "born");
