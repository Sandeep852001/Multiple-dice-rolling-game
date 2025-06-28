function rollDice(){
    const numOfDice = document.getElementById("ip").value;
    const diceResult = document.getElementById("diceValues");
    const diceImages = document.getElementById("diceImages");

    const values=[];
    const images = [];
    
    for(let i=0;i<numOfDice;i++){
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="dice${value}" width = "150" height = "150">`);
    }
    diceResult.textContent=`dice:${values.join(`,`)}`;
    diceImages.innerHTML = images.join(` `);

}
