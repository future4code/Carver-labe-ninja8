import React from 'react'
import { AppContainer } from './styles'
import Home from './components/Home'
import Cadastro from './components/Cadastro'
import FiltrosLista from './components/FiltrosLista'
import DetalhesServico from './components/DetalhesServico'
import Carrinho from './components/Carrinho'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      telaAtual: 'Home',
      Carrinho: []
    }
    this.irHome = this.irHome.bind(this)
    this.irCadastro = this.irCadastro.bind(this)
    this.irFiltrosLista = this.irFiltrosLista.bind(this)
    this.irDetalhesServico = this.irDetalhesServico.bind(this)
    this.irCarrinho = this.irCarrinho.bind(this)
  }
  escolheTela = () => {
    switch (this.state.telaAtual) {
      case 'Home':
        return (
          <Home
            irParaCadastro={this.irCadastro}
            irFiltrosLista={this.irFiltrosLista}
            irCarrinho={this.irCarrinho}
          />
        )
      case 'Cadastro':
        return <Cadastro irHome={this.irHome} />
      case 'Filtros e lista':
        return (
          <FiltrosLista
            irHome={this.irHome}
            irCarrinho={this.irCarrinho}
            irDetalhesServico={this.irDetalhesServico}
          />
        )
      case '+ Detalhes Serviço':
        return (
          <DetalhesServico
            selectedId={this.state.idFicha}
            irHome={this.irHome}
            irCarrinho={this.irCarrinho}
          />
        )
      case 'Carrinho':
        return (
          <Carrinho
            selectedId={this.state.idFicha}
            irHome={this.irHome}
            irFiltrosLista={this.irFiltrosLista}
          />
        )
      default:
        return <Home irHome={this.irHome} />
    }
  }

  irHome = () => {
    this.setState({ telaAtual: 'Home' })
  }

  irCadastro = () => {
    this.setState({ telaAtual: 'Cadastro' })
  }

  irFiltrosLista = () => {
    this.setState({ telaAtual: 'Filtros e lista' })
  }

  irDetalhesServico = id => {
    this.setState({ telaAtual: '+ Detalhes Serviço', idFicha: id })
  }

  irCarrinho = id => {
    this.setState({ telaAtual: 'Carrinho', idFicha: id })
  }
  render() {
    return <AppContainer>{this.escolheTela()} </AppContainer>
  }
}
