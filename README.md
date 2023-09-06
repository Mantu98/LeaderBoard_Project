# LeaderBoard_Project


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

STYLES :=> 

body{
    padding: 0;
    margin: 0;
    background-color: #1c1c1c;;
}

.maincontainer {
    /* border: 2px solid green; */
    width: 60%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

#scoreBoaredContainer {
    width: 100%;
}

.scoreBoard {
    /* border: 2px solid red; */
    margin: 1rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    background-color: black;
    box-shadow: 3px 3px 3px gray;
}

.scoreBoard p {
    /* border: 2px solid green; */
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    font: 1.5rem;
    font-weight: 600;
    color: white;
}
h1{
    color: white;
}
 
#addDetails {
    height: 100%;
    font-size: 1rem;
    color: white;
    background-color: rgb(138, 1, 1);
}

.form {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.form input {
    width: 20%;
    padding: 0.2rem 0;
    background-color: #302f2f;
    color: aliceblue;
    box-shadow: 3px 3px 7px black 4px 4px 10px black;
}



HTML :=>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
      <div class="maincontainer">
          <h1>Leader Board</h1>
          <div class="form">
              <input type="text" id="fname" placeholder="fname">
              <input type="text" name="" id="lname" placeholder="lname">
              <input type="text" id="country" placeholder="country">
              <input type="number" id="score" placeholder="score">
              <button id="addDetails">Add Details</button>
          </div>
            
        <div id="scoreBoaredContainer"></div>
      </div>
    <script src="./event.js"></script>
</body>
</html>
