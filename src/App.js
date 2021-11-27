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
      selectedCard: null,
      carrinho: []
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
            irCadastro={this.irCadastro}
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
            handleCardDetalhes={this.handleCardDetalhes}
          />
        )

      case '+ Detalhes Serviço':
        return (
          <DetalhesServico
            selected={this.state.selectedCard}
            irHome={this.irHome}
            irFiltrosLista={this.irFiltrosLista}
            irCarrinho={this.irCarrinho}
          />
        )
      case 'Carrinho':
        return (
          <Carrinho
            selected={this.state.selectedCard}
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

  irDetalhesServico = item => {
    this.setState({
      telaAtual: '+ Detalhes Serviço',
      selectedCard: item
    })
  }

  irCarrinho = id => {
    this.setState({ telaAtual: 'Carrinho', id: this.state.carrinho })
  }

  addCarrinho = item => {
    const novoCarrinho = [...this.state.carrinho]
    novoCarrinho.push(item)
    this.setState({ carrinho: novoCarrinho })
    console.log(novoCarrinho, 'adcionou ao carrinho?')
  }

  render() {
    return <AppContainer>{this.escolheTela()} </AppContainer>
  }
}
