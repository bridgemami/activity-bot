/**
Challenge: 

- Make the styling more exciting once an activity idea comes 
back from the Bored API
    - Resources: DOM element "classList" property, uigradients.com, 
      Google Fonts, color.adobe.com
    - Some ideas:
      - Change the title from "BoredBot" to something more exciting!
      - Change the background to something less drab.
      - Bonus: Animate something on the screen to move around and add more 
        excitement to the page
*/

document.getElementById("get-activity").addEventListener("click", () => activity());

function activity () {
    try {
        fetch("https://apis.scrimba.com/bored/api/activity")
        .then((response) => response.json())
        .then((data) => {
          document.getElementById("title").textContent ="FunBot 🎉😎"
          console.log(data);
          document.querySelector("body").classList.add("bright");
          document.getElementById("activity").textContent = `Suggestion: ${data.activity}`;
          document.getElementById("players").textContent = `Participant(s): ${data.participants}`
          document.getElementById("type").textContent = `Type of activity: ${data.type}`
        });
    }
        catch {(err => console.error(err));}
}