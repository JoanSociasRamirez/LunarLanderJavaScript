var y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var g = 1.622;
var a = g;
var dt = 0.016683;
var timer = null;
var fueltimer = null;
var fuel = 30;
var fuelTotal = 30
var fuelminimo = 0;
var alturamax = 70;
var myVar;
var level = 1;

function myFunction() {
    myVar = setTimeout(alertFunc, 1000);
}
window.onload = function () {
    document.getElementById("showm").onclick = function () {
        document.getElementsByClassName("c")[0].style.display = "block";
        stop();

    }


    document.getElementById("pausa").onclick = function () {
        pausar();
    };

    document.getElementById("hidem").onclick = function () {
        document.getElementsByClassName("c")[0].style.display = "none";
        start();
    }
    //Empezar a mover nave
    start();

    //Funciones del motor//
    document.onkeydown = motorOn;
    document.onkeyup = motorOff;
    document.onclick = function () {
    document.onmousedown = noClick;
        if (a == g) {
            motorOn();

        } else {
            motorOff();
        }

    }

    document.getElementById("level").onclick = function cambiarLevel() {
        switch (level) {
            case 1:
                fuel = 25;
                fuelTotal = 25;
                document.getElementById("level").innerHTML = "Media";
                level = 2
                restart();
                break;
            case 2:
                fuel = 10;
                fuelTotal = 20;
                document.getElementById("level").innerHTML = "Difícil";
                level = 3
                restart();
                break;
            case 3:
                fuel = 30;
                fuelTotal = 30;
                document.getElementById("level").innerHTML = "Fácil";
                level = 1
                restart();
                break;
        }
    }
}

function motorOn() {
    if (fueltimer == null && fuel > 0) {
        fueltimer = setInterval(function () {
            restarFuel();
        }, 100)
        a = -g;
        document.getElementById("img").src = "img/nave2.png"
    }
}

function motorOff() {
    clearInterval(fueltimer);
    fueltimer = null;
    a = g;
    document.getElementById("img").src = "img/nave.png";
}

function restarFuel() {
    if (fuel > fuelminimo) {
        fuel -= 1;
    } else {
        motorOff();
    }
}

function start() {
    timer = setInterval(function () {
        moverNave();
    }, dt * 1000);
}

function stop() {
    clearInterval(timer);
}

function moverNave() {
    v += a * dt;
    document.getElementById("velocidad").innerHTML = v.toFixed(2);
    y += v * dt;
    document.getElementById("altura").innerHTML = (alturamax - y).toFixed(2);
    document.getElementById("fuel").innerHTML = fuel;

    //mover 80%top
    if (y < alturamax) {
        document.getElementById("nave").style.top = y + "%";

    } else {
        fuel = 0;
        stop();
        if (v > 10 || y <= 0) {
            document.getElementById("img").src = "img/nave_rota.png";
            myFunction();

        } else {
            alert("¡FELICIDADES! Pulsa Aceptar para volver a Jugar.");
            window.location.href = 'index.html';
        }
    }
}

function pausar() {
    stop();
    document.getElementById("pausa").style.display = "none";
    document.getElementById("reanudar").style.display = "inline-block";
}

function restart() {

	y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
	v = 0;
	g = 1.622;
	a = g;
	dt = 0.016683;
	fuel=fuelTotal;
	document.getElementById("fuel").style.color="black";
}

function stop() {
    clearInterval(timer);
}

function alertFunc() {
    alert("GAME OVER! Pulsa Aceptar para volver a intentarlo.");

    window.location.href = 'index.html';
}

