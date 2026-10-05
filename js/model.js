export class SonetoModel {
  constructor() {
    this.sonetos = [
      {
        id: "soneto-quevedo-1",
        titulo: "Amor constante más allá de la muerte",
        autor: "Francisco de Quevedo",
        estrofas: [
          [
            "Cerrar podrá mis ojos la última",
            "sombra que me llevare el blanco día,",
            "y podrá desatar esta alma mía",
            "hora a su afán ansioso lisonjera;",
          ],
          [
            "mas no, de esa otra parte, en la ribera,",
            "dejará la memoria, en que ardía:",
            "nadar sabe mi llama la agua fría,",
            "y perder el respeto a ley severa.",
          ],
          [
            "Alma a quien todo un dios prisión ha sido,",
            "venas que humor a tanto fuego han dado,",
            "médulas que han gloriosamente ardido:",
          ],
          [
            "su cuerpo dejará no su cuidado;",
            "serán ceniza, mas tendrá sentido;",
            "polvo serán, mas polvo enamorado.",
          ],
        ],
      },
      {
        id: "soneto-lope-1",
        titulo: "Soneto de repente",
        autor: "Lope de Vega",
        estrofas: [
          [
            "Un soneto me manda hacer Violante",
            "que en mi vida me he visto en tanto aprieto;",
            "catorce versos dicen que es soneto;",
            "burla burlando van los tres delante.",
          ],
          [
            "Yo pensé que no hallara consonante,",
            "y estoy a la mitad de otro cuarteto;",
            "mas si me veo en el primer terceto,",
            "no hay cosa en los cuartetos que me espante.",
          ],
          [
            "Por el primer terceto voy entrando,",
            "y parece que entré con pie derecho,",
            "pues fin con este verso le voy dando.",
          ],
          [
            "Ya estoy en el segundo, y aun sospecho",
            "que voy los trece versos acabando;",
            "contad si son catorce, y está hecho.",
          ],
        ],
      },
      {
        id: "soneto-garcilaso-1",
        titulo: "Soneto XXIII (En tanto que de rosa y azucena)",
        autor: "Garcilaso de la Vega",
        estrofas: [
          [
            "En tanto que de rosa y azucena",
            "se muestra el color en vuestro gesto,",
            "y que vuestro mirar ardiente, honesto,",
            "enciende al corazón y lo refrena;",
          ],
          [
            "y en tanto que el cabello, que en la vena",
            "del oro se escogió, con vuelo presto,",
            "por el hermoso cuello blanco, enhiesto,",
            "el viento mueve, esparce y desordena;",
          ],
          [
            "coged de vuestra alegre primavera",
            "el dulce fruto, antes que el tiempo airado",
            "cubra de nieve la hermosa cumbre.",
          ],
          [
            "Marchitará la rosa el viento helado,",
            "todo lo mudará la edad ligera,",
            "por no hacer mudanza en su costumbre.",
          ],
        ],
      },
    ];
  }
  getListaSonetos() {
    return this.sonetos.map((s) => ({
      id: s.id,
      titulo: s.titulo,
      autor: s.autor,
    }));
  }
  getSonetoById(id) {
    return this.sonetos.find((s) => s.id === id) || this.sonetos[0];
  }
}
