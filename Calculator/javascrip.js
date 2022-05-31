function display(val){

    document.getElementById('result').value += val

    return val

}
function solve(){

    let x = document.getElementById('result').value

    let y = eval(x);

    document.getElementById('result').value = y

    return y

}
function clearScreen(){

    document.getElementById('result').value = ''
}

// auto change background

function getRandomColor() { //To give me a new rgb number everytime
    return (Math.floor(Math.random() * (255 - 0)) + 10);
    }

    function getColor() {
    return `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
    }

    (function changeColor(){
     setInterval((() => document.body.style.background = getColor()), 
    1000);
    })()
    var imageSources = ["red_light.jpg", "red_and_yellow_light.jpg", "yellow_light.jpg", "green_light.jpg"]

    var index = 0;
    etInterval (function(){
    if (index === imageSources.length) {
        index = 0;
    }
    document.getElementById("image").src = imageSources[index];
    index++;
    } , 2000);  