let gravedad = .5;
let numHijos = 50;

let numParticulas = 100;
let particulasCreadas = 0;

function crearParticula() {
	let particula = document.createElement("div");
	particula.className="particula";

	let y = window.innerHeight;
	let x = Math.random() * window.innerWidth;

	particula.style.top = y + "px";
	particula.style.left = x + "px";

	let velocidadY = -15 - (Math.random() * 15);

	particula.setAttribute("data-velocidad-y", velocidadY);
	particula.setAttribute("data-velocidad-x", -5 + (10*Math.random()));
	particula.setAttribute("data-padre", "true");	

	particula.style.background = elegirColor();

	document.getElementsByTagName("body")[0].append(particula);

	particulasCreadas++;

	if (particulasCreadas < numParticulas) {
	    setTimeout(crearParticula, 50 + (Math.random() * 150));
	}
}

function empezar() {
	crearParticula();
}

function actualizar() {
	let particulas = document.getElementsByClassName("particula");
	for (let p=0; p < particulas.length; p++) {
		let particula = particulas[p];

		let velocidadY = parseFloat(particula.getAttribute("data-velocidad-y"));
		velocidadY += gravedad;

		particula.setAttribute("data-velocidad-y", velocidadY);

		let top = particula.style.top ? particula.style.top : "0"; //10px
		top = parseFloat(top.replace("px", ""));
		top += velocidadY;
		particula.style.top = top + "px";

		let velocidadX = parseFloat(particula.getAttribute("data-velocidad-x"));

		let left = particula.style.left ? particula.style.left : "0";
		left = parseFloat(left.replace("px", ""));
		left += velocidadX;
		particula.style.left = left + "px";

		let padre = particula.getAttribute("data-padre");

		if (velocidadY >= 0 && padre === "true") {
			explotar(particula);
		}

		if (top > window.innerHeight) {
			particula.remove();
		}
	}

	setTimeout(actualizar, 20);
}

function explotar(particula) {

	for (let h=0; h < numHijos; h++) {
		let hijo = document.createElement("div");
		hijo.className = "particula";

		hijo.style.top = particula.style.top;
		hijo.style.left = particula.style.left;
		hijo.style.background = particula.style.background;

		let velocidadY = (Math.random() * 20) - 18;
		hijo.setAttribute("data-velocidad-y", velocidadY);
		let velocidadX = (Math.random() * 16) - 8;
		hijo.setAttribute("data-velocidad-x", velocidadX);


		hijo.setAttribute("data-padre", false);

		//Agregar el hijo 
		document.getElementsByTagName("body")[0].append(hijo);
	}

    particula.remove();
}

window.onload = function() {
	empezar();
	actualizar();
};

function elegirColor() {
  let colores = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += colores[Math.floor(Math.random() * 16)];
  }
  return color;
}