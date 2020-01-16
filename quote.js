var quotes = [
    "“Why should you continue going after your dreams? Because seeing the look on the faces of the people who said you couldn’t… will be priceless.” —Kevin Ngo",
    "“Start where you are. Use what you have. Do what you can.” —Arthur Ashe",
    "“You just can’t beat the person who never gives up.” —Babe Ruth",
    "“Change your life today. Don’t gamble on the future, act now, without delay.” —Simone de Beauvoir",
    "“One way to keep momentum going is to have constantly greater goals.” —Michael Korda",
    "“We aim above the mark to hit the mark.” —Ralph Waldo Emerson",
    "“Keep your eyes on the stars, and your feet on the ground.” —Theodore Roosevelt",
    "“There will be obstacles. There will be doubters. There will be mistakes. But with hard work, there are no limits.” —Michael Phelps",
    "“Don’t watch the clock; do what it does. Keep going.” —Sam Levenson",
    "“Aim for the moon. If you miss, you may hit a star.” —W. Clement Stone",
    "“The future belongs to those who believe in the beauty of their dreams.” —Eleanor Roosevelt",
    "“If you can dream it, you can do it.” —Walt Disney",
    "“Press forward. Do not stop, do not linger in your journey, but strive for the mark set before you.” —George Whitefield",
    "“Do not wait; the time will never be ‘just right.’ Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along.” —George Herbert",
    "“Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.” —Norman Vincent Peale",
    "“Where there is a will, there is a way. If there is a chance in a million that you can do something, anything, to keep what you want from ending, do it. Pry the door open or, if need be, wedge your foot in that door and keep it open.” —Pauline Kael",
    "“Never give up, for that is just the place and time that the tide will turn.” —Harriet Beecher Stow"
]

var color = document.getElementById("entire");
console.log(color);
function colorChange(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    color.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
var setColor = window.setInterval(colorChange, 4000);

let input = document.getElementById("text");
let submit = document.getElementById("button");
let newQuote = document.getElementById("newquote");

submit.addEventListener("click", show)
function show(event){
    event.preventDefault();
    if(quotes.includes(document.getElementById("text").value)=== true){
        alert("This quote exists already");
    }if(document.getElementById("text").value.trim()=== ""){
        alert("No quote to submit, You have to type a quote");
    }else{
    result = text.value;
    quotes.push(text.value);
    document.getElementById("text").value ="";
    alert("Quote has been successfully added");
    }

}

newQuote.addEventListener("click", display)
function display(reveal){
    for(let i =0; i < quotes.length; i++){
        let randomQuotes = Math.floor(Math.random() * (quotes.length));
        document.getElementById("para").innerHTML = quotes[randomQuotes];
        
    }
}
 
