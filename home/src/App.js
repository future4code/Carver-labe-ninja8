import react from "react";
import Home from "./components/Home";
import Carrinho from "./components/Carrinho";
import Buscador from "./components/Buscador";
import Cadastro from "./components/Cadastro";

export default class App extends react.Component {
  state = {
    telaAtual: "Home"
  };

  escolhaTela = () => {
    switch (this.state.telaAtual) {
      case "Home":
        return (
          <Home
            irParaCarrinho={this.irParaCarrinho}
            irParaCadastro={this.irParaCadastro}
            irParaBuscador={this.irParaBuscador}
          />
        );
      case "Carrinho":
        return (
          <Carrinho
            irParaCarrinho={this.irParaCarrinho}
            irParaHome={this.irParaHome}
          />
        );
      case "Cadastro":
        return (
          <Cadastro
            irParaCadastro={this.irParaCadastro}
            irParaHome={this.irParaHome}
          />
        );
      case "Buscador":
        return (
          <Buscador
            irParaBuscador={this.irParaBuscador}
            irParaHome={this.irParaHome}
            irParaCarrinho={this.irParaCarrinho}
          />
        );

      default:
        return <div>erro! Pagina não encontrada</div>;
    }
  };

  irParaHome = () => {
    this.setState({ telaAtual: "Home" });
  };

  irParaCarrinho = () => {
    this.setState({ telaAtual: "Carrinho" });
  };
  irParaBuscador = () => {
    this.setState({ telaAtual: "Buscador" });
  };
  irParaCadastro = () => {
    this.setState({ telaAtual: "Cadastro" });
  };

  render() {
    return <div>{this.escolhaTela()}</div>;
  }
}
