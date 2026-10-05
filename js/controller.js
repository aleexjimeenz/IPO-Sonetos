export class SonetoController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    const lista = this.model.getListaSonetos();
    this.view.poblarSelector(lista);

    if (lista.length > 0) {
      const primerSoneto = this.model.getSonetoById(lista[0].id);
      this.view.renderizarSoneto(primerSoneto);
    }

    this.view.bindCambioSoneto((id) => this.handleSeleccionSoneto(id));
  }

  handleSeleccionSoneto(id) {
    const soneto = this.model.getSonetoById(id);
    this.view.renderizarSoneto(soneto);
  }
}