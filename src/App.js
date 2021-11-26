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
      telaAtual: 'Filtros e lista',
      id: '',
      title: '',
      description: '',
      price: '',
      paymentMethods: [],
      dueDate: '',
      carrinho: []
    }

    this.irHome = this.irHome.bind(this)
    this.irCadastro = this.irCadastro.bind(this)
    this.irFiltrosLista = this.irFiltrosLista.bind(this)
    this.irDetalhesServico = this.irDetalhesServico.bind(this)
    this.irCarrinho = this.irCarrinho.bind(this)
    this.handleCardDetalhes = this.handleCardDetalhes.bind(this)
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
            handleCardDetalhes={this.handleCardDetalhes}
          />
        )

      case '+ Detalhes Serviço':
        return (
          <DetalhesServico
            selectedId={this.state.idFicha}
            irHome={this.irHome}
            irCarrinho={this.irCarrinho}
            handleCardDetalhes={this.handleCardDetalhes}
          />
        )
      case 'Carrinho':
        return (
          <Carrinho
            selectedId={this.state.carrinho}
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
    this.setState({ telaAtual: 'Carrinho', id: this.state.carrinho })
  }

  addCarrinho = id => {
    const novoCarrinho = this.state.carrinho.push(id)
    this.setState({ carrinho: novoCarrinho })
    console.log(novoCarrinho, 'adcionou ao carrinho?')
  }

  handleCardDetalhes = item => {
    const precoModificado = Number(item.price)
    this.setState({
      id: item.id,
      title: item.title,
      description: item.description,
      price: precoModificado,
      paymentMethods: [item.paymentMethods],
      dueDate: item.dueDate
    })
  }

  render() {
    return <AppContainer>{this.escolheTela()} </AppContainer>
  }
}
