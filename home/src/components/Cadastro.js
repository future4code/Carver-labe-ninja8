import react from "react";

export default class Cadastro extends react.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.irParaHome}> Home</button>

        <h2>Cadastro</h2>
      </div>
    );
  }
}