
let qwerty = document.getElementById("qwerty");
let random_phrase = document.getElementById("phrase");
let start_btn = document.querySelector(".btn__reset");
let missed = 0;

const phrases = ["My Name Is George" , "It is dangerous to go alone take this", "I used to be an adventurer like you then I took an arrow to the knee" ,

                 "awwwww poop",  "You choose me and I choose you"];


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


let phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray); 



function checkLetter(btn){

    let letters = document.querySelectorAll(".letter");
    let correct_letter = null;

    for (let i = 0; i < letters.length; i++){

        if(letters[i].innerHTML.toLowerCase() === btn){

           letters[i].className += " show";
            correct_letter = letters[i].innerHTML.toLowerCase(); //text of element 
        

        }
    }

    return correct_letter;
        
    }

    let check_letters = document.querySelectorAll(".letter");
        console.log(check_letters.length);

    function check_win(){

        
        
        let correct_guessess = document.querySelectorAll(".show");
        console.log(correct_guessess.length);
    
        if (check_letters.length === correct_guessess.length){
    
            overlay.className = "win";
            let overlay_headline = document.querySelector("h2");
            overlay_headline.textContent ="YOU WIN";
            overlay.style.display = "flex";

            start_btn.addEventListener("click", () => {

                overlay.style.display = "none";
                missed = 0;
                for (let i = 0; i < correct_guessess.length; i++){
                correct_guessess[i].className = "letter";
                }

                let picked_letters = document.querySelectorAll(".chosen");
                for (let i = 0; i < picked_letters.length; i++){
                    picked_letters[i].className = " ";
                    }
                    
                    let phrase_list = document.getElementById("phrase");
                        phrase_list.innerHTML = "<ul></ul>";
                    
                 phraseArray = getRandomPhraseAsArray(phrases);
                 addPhraseToDisplay(phraseArray); 
                
                 const hearts = document.querySelectorAll(".tries img");
                 for (let i = 0; i < hearts.length; i++){
                hearts[i].src = "images/liveHeart.png";
                 }

                 check_letters = document.querySelectorAll(".letter");
                 console.log(check_letters.length);
                 correct_guessess = document.querySelectorAll(".show");
                 console.log(correct_guessess.length);

            
            });



    
    
        } else if(missed>4) {

            overlay.className = "lose";
            let overlay_headline = document.querySelector("h2");
            overlay_headline.textContent ="YOU LOSE";
            overlay.style.display = "flex";


            start_btn.addEventListener("click", () => {

                overlay.style.display = "none";
                missed = 0;
                for (let i = 0; i < correct_guessess.length; i++){
                correct_guessess[i].className = "letter";
                }

                let picked_letters = document.querySelectorAll(".chosen");
                for (let i = 0; i < picked_letters.length; i++){
                    picked_letters[i].className = " ";
                    }
                    
                    let phrase_list = document.getElementById("phrase");
                        phrase_list.innerHTML = "<ul></ul>";
                    
                 phraseArray = getRandomPhraseAsArray(phrases);
                 addPhraseToDisplay(phraseArray); 
                
                 const hearts = document.querySelectorAll(".tries img");
                 
                 for (let i = 0; i < hearts.length; i++){
                hearts[i].src = "images/liveHeart.png";
                 }

                 check_letters = document.querySelectorAll(".letter");
                 console.log(check_letters.length);

                 correct_guessess = document.querySelectorAll(".show");
                 console.log(correct_guessess.length);

            
            });

            



        }
    
    
    
    
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
              
               let correct_guess = checkLetter(clicked_letter); //what do I put here???


               if (correct_guess === null){


                const hearts = document.querySelectorAll(".tries img");
                hearts[missed].src = "images/lostHeart.png";
                missed+=1;
                // let list = document.querySelector("ol");
                // // item.src = "images/lostHeart.png";
                // let heart = document.createElement("img");
                // heart.style.height= "35px";  heart.style.width = "30px";  heart.src= "images/lostHeart.png";
                //  let item = document.createElement("li");
                // item.className = "tries";
                // item.append(heart);
                // list.prepend(item);

                // // let last_item = document.querySelector("ol :li");
                // let last_item = list.lastChild
                // console.log(last_item);
                // last_item.remove();


               }

            }

        }

console.log(missed);

check_win();

});




