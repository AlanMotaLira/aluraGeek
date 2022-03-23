class ArgumentoInvalido extends Error {
    constructor(mensagem) {
      super(mensagem);
      this.name = 'ArgumentoInvalido';
      this.idErro = 1
    }
  }

  export default ArgumentoInvalido