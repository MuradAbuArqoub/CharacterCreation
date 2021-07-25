alert("Welcome summoner")
var name = prompt("what name do you go by?") 
alert(name + " huh, never heard of it" )
alert("And what kind of heros are you "+ name + " ?") 



var character = prompt("would you rather be: \n a-Fast and stealthy \n b-Strong and tanky \n c-healing and support \n(answer with alphabites)" )

if(character == 'a')
alert("so you are an assassin as i can see")

else if (character == 'b'){
alert("so ur a fighter even though u dont look like one")
}

else if (character == 'c'){
alert("Healer huh? it would be nice if someone finally healed my back pain")
}

// .............................................
if(character == 'a'){
  var answer = window.confirm("would you like to see more information about assassins?");
  if (answer) {
        window.confirm("sneaky boyz");
    } else {
      window.confirm("you do you");
    }
}
  

else if (character == 'b'){
  var answer = window.confirm("would you like to see more information about fighters?");
if (answer) {
        window.confirm("The Fighter Classes: Other Names: Warrior, Knight, Soldier. One of the most basic classes, the Fighter puts emphasis on strength and physical combat. Wielding melee weapons.");
        } else {
        window.confirm("okay big guy");
    }
}

else if (character == 'c'){
var answer = window.confirm("would you like to see more information about healers?");
if (answer) {
        window.confirm("A folk healer, in a contemporary Western perception, is an unlicensed person who practices the art of healing using traditional practices, herbal remedies and the power of suggestion.");
}
else {
      window.confirm("aight then");
    }
}

// .............................................
var weapons = prompt("choose a weapon of those: \n 1-sword \n 2-daggers \n 3-wizard staff \n 4-moos garin 3'azal sabe3 6agat")

while(weapons != "sowrd" && weapons != "daggers" && weapons != "wizard staff" && weapons != "moos garin 3'azal sabe3 6agat" ){

var weapons = prompt("choose a weapon of those: \n 1-sword \n 2-daggers \n 3-wizard staff \n 4-moos garin 3'azal sabe3 6agat")

}


console.log (numberOfPics);
var numberOfPics = prompt("how many time u would like to see it?")
while(numberOfPics > 10 ){
    numberOfPics = prompt("please enter number less than 10!")
}

  if (weapons == "sword"){
    
    for(var i = 0; i< numberOfPics; i++)

      {document.write(
      "<div>" + "<h3>" + weapons+"</h3>"
    + "<img  src='https://pngimg.com/uploads/sword/sword_PNG5525.png' width='100' height='100'     />" + "</div>")}
  }
  
  else if (weapons =="daggers"){

  for(var i = 0 ; i <numberOfPics;i++)

  {document.write(
    "<div>" + "<h3>" + weapons+"</h3>"
  + "<img  src='https://e7.pngegg.com/pngimages/783/633/png-clipart-dagger-dagger-thumbnail.png' width='100' height='100'     />" + "</div>")}
  }

  else if(weapons =="wizard staff"){
    for(var i = 0 ; i <numberOfPics;i++)
  {document.write(
    "<div>" + "<h3>" + weapons+"</h3>"
  + "<img  src='https://toppng.com/uploads/preview/magic-staff-11563057630zvk5d15ol5.png' width='100' height='100'     />" + "</div>")}
  }

 document.write("enjoy ur stay traveler")

