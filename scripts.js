/** Variables init **/
var resultatOutput = document.getElementById("resultat"),
    btn = document.getElementById("calculateBTN"),
    numberA = document.getElementById("a"),
    numberB = document.getElementById("b");

/** Functions def **/
function calculer(e){
    e.preventDefault();
    var a = parseFloat(numberA.value),
        b = parseFloat(numberB.value),
        res = ((a/b)*100).toFixed(2);
    if(b!==0){
        resultatOutput.innerText = res + "%";
    }else{
        resultatOutput.classList.add("error");
        resultatOutput.innerText = "Dévision par zero est impossible";
    }
}
function resetElements(){
    if(resultatOutput.classList.contains("error")){
        resultatOutput.classList.remove("error");
        resultatOutput.innerText = 0 + "%";
    }
}

/** for git conflict **/
/** functions implementation **/
numberB.addEventListener('keyup',resetElements);
btn.addEventListener('click',calculer);