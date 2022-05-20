let closeBtn = document.querySelector(".open-modal");
let openBtn = document.querySelector(".close-modal");
let quote = document.querySelector(".quote");
let prevBtn = document.querySelector(".prev");
let randomBtn = document.querySelector(".random");
let nextBtn = document.querySelector(".next");
let counterDisplay = document.querySelector(".counter");
let author = document.querySelector(".author");

closeBtn.addEventListener("click", () => document.querySelector(".big_box").classList.remove("hide"));
openBtn.addEventListener("click", () => document.querySelector(".big_box").classList.add("hide"));

// storing fetchData in array
let arrData = [],start = 0;
// creater fetch data container
function DataFunction(startPoint) {
        if(start>=0 && start <=arrData[0].length){
            quote.textContent = arrData[0][startPoint].text;
            author.textContent = "( " + arrData[0][startPoint].author + " )";
            counterDisplay.textContent = (startPoint + "/" + arrData[0].length);
        }
        else{start=0}
}

// fetching Data
fetch("https://type.fit/api/quotes").then(data => data.json()).then((resp) => {
    arrData.push(resp);
    console.log(arrData[0])
    DataFunction(start);
    nextBtn.addEventListener("click", () => DataFunction(++start));
    randomBtn.addEventListener("click", () => DataFunction(Math.floor(Math.random() * arrData[0].length)));
    prevBtn.addEventListener("click", () => DataFunction(--start));
})