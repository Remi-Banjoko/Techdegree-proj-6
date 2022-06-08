
let qwerty = document.getElementById("qwerty");
let random_phrase = document.getElementById("phrase");
let start_btn = document.querySelector(".btn__reset");
let missed = 0;

const phrases = ["My Name Is George" , "It is dangerous to go alone take this", "I used to be an adventurer like you then I took an arrow to the knee" ,

                 "awwwww poop",  "You choose me and I choose you"   ];


let overlay = document.getElementById("overlay");
start_btn.addEventListener("click", () => {

    overlay.style.display = "none";



});


function getRandomPhraseAsArray(arr){
    //do stuff to any arr that is passed in 
    let randomizer = Math.floor(Math.random() * arr.length);
    
    let newPhrase = arr[randomizer];
    newPhrase.split("");
    console.log(newPhrase);
 
    return newPhrase;


} 


function addPhraseToDisplay(arr){
    // do stuff any arr that is passed in, and add to `#phrase ul`
    for (let i = 0; i< arr.length; i++){
        let list_item = document.createElement("li");
        list_item.textContent = arr[i];//Is this correct????

        
        let phrase_list = document.getElementById("phrase");
        phrase_list.appendChild(list_item);

        if(arr[i] !== " "){

           list_item.className = "letter" //add the class letter to the list item


        } else {

            list_item.className = "space"   //add the class space to the list item
        }


    }


}


const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray); 



function checkLetter(btn){

    let letters = document.querySelectorAll(".letter");
    let correct_letter = null;

    for (let i = 0; i < letters.length; i++){

        if(letters[i].innerHTML === btn){

           letters[i].className = "show";
            correct_letter = letters[i].innerHTML; //text of element 
            console.log(`${correct_letter} is the correct letter`)

        }
    }

    return correct_letter;
        
    }




qwerty.addEventListener("click" , (e) => {
       
        console.log(e.target.tagName);
        console.log(e.target.className);
        console.log(e.target.textContent);

        if(e.target.tagName === "BUTTON"){
            if(e.target.className !== "chosen"){

                e.target.className ="chosen";

               let clicked_letter = e.target.textContent;
               console.log(clicked_letter);
              
               let correct_guess = checkLetter(clicked_letter.toLowerCase()); //what do I put here???


               if (correct_guess === null){

                missed+=1;

               }



            }

        }

console.log(missed);

});