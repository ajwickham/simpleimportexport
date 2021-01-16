import Dog from './scripts.js';


let myPuppy = new Dog("Ernie",3);
let speech = myPuppy.speak();

$(document).ready(function() {
    $("#response").text(speech); 
});


