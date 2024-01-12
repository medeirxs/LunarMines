const draw = [... document.querySelectorAll(".default")]
var defaultContainer = "default.png";
var diamondContainer = "diamond.png";
var bombContainer = "bomb.png";

var lowestValue = 0
var highestValue = 10
var winNumbers = [1, 2, 3, 4, 5, 6]

var WalletValue = 1000
var BetValue = 5
var winValue =  Number(BetValue) * 2

function addValue(){
    updateBetValue(++BetValue)
}

function subtractValue(){
    if(BetValue === 0){
        updateBetValue(BetValue)
    }
    else{
        updateBetValue(--BetValue)
    }
}

function updateBetValue(val){
    document.getElementById('bet').innerHTML = `Aposta: ${val},00 BRL`;
}

function WalletValueUpdate(valW){ 
    if(valW < 0){
        let WalletValue = document.getElementById('WalletValue').innerHTML = `0,00 BRL`
    }else{
        let WalletValue = document.getElementById('WalletValue').innerHTML = `${valW},00 BRL`
    }
    
}

draw.map((ob)=>{
    ob.addEventListener("click",(evt)=>{
        const el = evt.target
        var winValue =  Number(BetValue) * 2
        let DrawNumber = Math.floor(Math.random() * (highestValue - lowestValue + 1)) + lowestValue
        if(winNumbers.includes(DrawNumber)){
            WalletValueUpdate(WalletValue += winValue)
            el.src = diamondContainer
        }else{
            WalletValueUpdate(WalletValue -= winValue * 4)
            el.src = bombContainer
            let BlockPlay = document.getElementById('block').style.display = 'block'
        }
    })
})


function play(){
    if(WalletValue <= 0){
        let BlockPlay = document.getElementById('block').style.display = 'block'
    }else{
        WalletValueUpdate(WalletValue -= Number(BetValue))
        let BlockPlay = document.getElementById('block').style.display = 'none'
        let play = document.getElementById('play').style.display = 'none'
        let sacarinner = document.getElementById('sacar').style.display = 'flex'

    }
}

function sacar(){
    let play = document.getElementById('play').style.display = 'flex'
    let sacar = document.getElementById('sacar').style.display = 'none'
    draw.map((ob)=>{
        ob.src = defaultContainer
    })
}