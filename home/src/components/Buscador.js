import react from "react";

export default class Buscador extends react.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.irParaHome}> Home</button>
        <button onClick={this.props.irParaCarrinho}>Carrinho</button>
        <h2>Lista De Prestadores </h2>
      </div>
    );
  }
}