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
      selectedCardDetalhes: null,

      carrinho: []
    }

    this.irHome = this.irHome.bind(this)
    this.irCadastro = this.irCadastro.bind(this)
    this.irFiltrosLista = this.irFiltrosLista.bind(this)
    this.irDetalhesServico = this.irDetalhesServico.bind(this)
    this.addCarrinho = this.addCarrinho.bind(this)
    this.deletaServicoCarrinho = this.deletaServicoCarrinho.bind(this)
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
            selectedDetalhes={this.state.selectedCardDetalhes}
            irHome={this.irHome}
            addCarrinho={this.addCarrinho}
            irCarrinho={this.irCarrinho}
            irDetalhesServico={this.irDetalhesServico}
            handleCardDetalhes={this.handleCardDetalhes}
          />
        )

      case '+ Detalhes Serviço':
        return (
          <DetalhesServico
            selectedDetalhes={this.state.selectedCardDetalhes}
            irHome={this.irHome}
            irFiltrosLista={this.irFiltrosLista}
            addCarrinho={this.addCarrinho}
            irCarrinho={this.irCarrinho}
          />
        )
      case 'Carrinho':
        return (
          <Carrinho
            carrinho={this.state.carrinho}
            irHome={this.irHome}
            irFiltrosLista={this.irFiltrosLista}
            deletaServicoCarrinho={this.deletaServicoCarrinho}
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
      selectedCardDetalhes: item
    })
  }

  irCarrinho = () => {
    this.setState({ telaAtual: 'Carrinho' })
  }

  addCarrinho = item => {
    const novoCarrinho = [...this.state.carrinho]
    novoCarrinho.push(item)
    this.setState({
      carrinho: novoCarrinho
    })
    alert('Serviço adcionado ao carrinho!')
  }

  deletaServicoCarrinho = item => {
    console.log(item)
    const novoCarrinho = [...this.state.carrinho]
    const findById = value => {
      return value.id === item.id
    }
    const index = novoCarrinho.findIndex(findById)
    console.log(index)
    novoCarrinho.splice(index, 1)
    this.setState({ carrinho: novoCarrinho })
    alert('Serviço removido do carrinho!')

    console.log(novoCarrinho, 'deletou ao carrinho?')
  }

  render() {
    return <AppContainer>{this.escolheTela()} </AppContainer>
  }
}
