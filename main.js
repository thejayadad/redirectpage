
let count = document.getElementById("count")
let counter = 1;
let btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    setInterval(() => {
        count.innerText = counter;
        counter++
        if(counter > 5) location.replace("https://www.espn.com")
     }, 1000)

})
