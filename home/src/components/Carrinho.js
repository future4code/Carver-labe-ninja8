import react from "react";

export default class Carrinho extends react.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.irParaHome}> Home</button>
        <h2>Carrinho Vazio </h2>
      </div>
    );
  }
}