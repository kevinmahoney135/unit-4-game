var winCount = 0;
var lossCount = 0;
var randomNumber = 0;
var totalSum = 0;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function initGame() {
    randomNumber = getRndInteger(19,120);
    totalSum = 0;
    
    var btnId = "#btn1";
    
    console.log("randomNumber = " + randomNumber);
    
    for (var i = 1; i <= 4; i++) {
        var rndCrystalVal = getRndInteger(1,12);
        console.log("Crystal"+i+" value =" + rndCrystalVal);
        btnId = "#btn" + i;
        $(btnId).attr("val",rndCrystalVal);
    }

    $("#randomNum").text(randomNumber);
}

$(document).ready(function(){
    
    initGame();
    
    $(".crystalBtn").on("click", function() {
        var btnVal = $(this).attr("val");
        totalSum += parseInt(btnVal);
        $("#totScore").text(totalSum);
        if (totalSum === randomNumber) {
            winCount++;
            $("#wins").text(winCount);
            initGame();
        }
        else if (totalSum > randomNumber) {
            lossCount++;
            $("#losses").text(lossCount);
            initGame();
        }
    })
})