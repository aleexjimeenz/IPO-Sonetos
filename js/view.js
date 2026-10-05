export class SonetoView {
  constructor() {
    this.selectElement = document.getElementById("soneto-select");
    this.tituloElement = document.getElementById("soneto-titulo");
    this.autorElement = document.getElementById("soneto-autor");
    this.bodyElement = document.getElementById("soneto-body");
  }

  poblarSelector(listaSonetos) {
    this.selectElement.innerHTML = "";
    listaSonetos.forEach(soneto => {
      const option = document.createElement("option");
      option.value = soneto.id;
      option.textContent = `${soneto.titulo} — ${soneto.autor}`;
      this.selectElement.appendChild(option);
    });
  }

  renderizarSoneto(soneto) {
    this.tituloElement.textContent = soneto.titulo;
    this.autorElement.textContent = soneto.autor;
    this.bodyElement.innerHTML = "";

    // Construcción semántica: Estrofas y versos con Flexbox centrado (0 etiquetas <br>)
    soneto.estrofas.forEach((estrofaVersos) => {
      const estrofaDiv = document.createElement("div");
      estrofaDiv.classList.add("estrofa");

      estrofaVersos.forEach(textoVerso => {
        const versoP = document.createElement("p");
        versoP.classList.add("verso");
        versoP.textContent = textoVerso;
        estrofaDiv.appendChild(versoP);
      });

      this.bodyElement.appendChild(estrofaDiv);
    });
  }

  bindCambioSoneto(handler) {
    this.selectElement.addEventListener("change", (e) => {
      handler(e.target.value);
    });
  }
}