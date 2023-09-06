
const scoreBoaredContainer = document.getElementById("scoreBoaredContainer");
const addDetails = document.getElementById("addDetails");
 
 addDetails.addEventListener("click", () => {

    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const country = document.getElementById("country");
    const score = document.getElementById("score");

    const scoreBoard = document.createElement("div");
    scoreBoard.classList.add("scoreBoard");
    
    scoreBoard.innerHTML = `
      <p>${fname.value} ${lname.value}</p>
      <p>${country.value}</p>
      <p>${score .value}</p>
      <p class="deleteIcon">&#x1f5d1;</p>
    `;
   
    scoreBoaredContainer.appendChild(scoreBoard);
    fname.value = "";
    lname.value = "";
    country.value = "";
    score.value = "";

    sortScoreBoard();
    DeleteItem();
});

function sortScoreBoard() {
    const ScoreBoard = document.querySelectorAll(".scoreBoard");
    const arr = [];
    ScoreBoard.forEach((ele)=>arr.push(ele));
    const sortedArray = arr.map((ele) => {
        return ele;
    })
    .sort((a, b) => {
        let runOfMan1 = parseInt(a.children[2].textContent);
        let runOfMan2 = parseInt(b.children[2].textContent);
        
        if(runOfMan1 > runOfMan2) {return -1}
        if(runOfMan1 < runOfMan2) {return 1}
    });

    sortedArray.forEach((ele) => {
        scoreBoaredContainer.append(ele);
    });
};

function DeleteItem() {
    const deleteIcon = document.querySelectorAll(".deleteIcon");
    deleteIcon.forEach((ele) => {
        ele.addEventListener("click", (e) => {
            return e.target.parentElement.remove();
        })
    })
}

