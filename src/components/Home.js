import react from "react";
import styled from "styled-components";

const Header = styled.div`
  margin: 0px;
  padding: 10px 4px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: pink;
`;
const Botao = styled.button`
  background-color: pink;
  border: none;
  font-size: 16px;
`;
const Centro = styled.div`
  text-align: center;
  margin-top: 100px;
`;

export default class Home extends react.Component {
  render() {
    return (
      <div>
        <Header>
          <h2>LabeNinjas</h2>
          <Botao>
            <button alt="Home" onClick={this.props.irParaHome}>
              {" "}
              Home
            </button>
            <button alt="Carrinho" onClick={this.props.irParaCarrinho}>
              Carrinho
            </button>
          </Botao>
        </Header>
        <Centro>
          {" "}
          <h1>LabeNinjas</h1>
          <h4>O talento certo no momento certo</h4>
          <button onClick={this.props.irParaCadastro}>
            {" "}
            Quero ser um ninja
          </button>
          <button onClick={this.props.irParaBuscador}>
            {" "}
            Contratar um Ninja
          </button>
        </Centro>
      </div>
    );
  }
}