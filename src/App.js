import React from 'react'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      telaAtual: `Home`,
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
        return <Home irHome={this.irHome} />
      case 'Cadastro':
        return <Cadastro irCadastro={this.irCadastro} />
      // case 'Filtros e lista':
      //   return <FiltrosLista irFiltrosLista={this.irFiltrosLista} />

      //     <Carrinho
      //       selectedId={this.state.idFicha}
      //       irCarrinho={this.irCarrinho}
      //     />
      //   )

    }
  }

  // irHome = () => {
  //   this.setState({ telaAtual: 'Home' })
  // }

  // irCadastro = () => {
  //   this.setState({ telaAtual: 'Cadastro' })
  // }

  // irFiltrosLista = () => {
  //   this.setState({ telaAtual: 'Filtros e lista' })
  // }

  // irDetalhesServico = id => {
  //   this.setState({ telaAtual: '+ Detalhes Serviço', idFicha: id })
  // }

  // irCarrinho = id => {
  //   this.setState({ telaAtual: 'Carrinho', idFicha: id })
  // }

  adicionarCarrinho = () => {
    const url = `https://labeninjas.herokuapp.com/jobs/${}`
    Axios.get(url, {
      headers: {
        Authorization: "3d475e97-ff99-4efb-af1a-8a21d2ce38dd"
      }
    })
      .then((res) => {
        this.setState({ carrinho: res.data })
      })
      .catch((err) => {
        alert("Ocorreu um erro")
      })
  }

  deletaServico = (id) => {
    const url = `https://labeninjas.herokuapp.com/jobs/${}`
    Axios.delete(url, {
      headers: {
        Authorization: "3d475e97-ff99-4efb-af1a-8a21d2ce38dd"
      }
    })
      .then((res) => {
        alert("Playlist deletada com sucesso");
        this.adicionarCarrinho()
      })
      .catch((err) => {
        alert("Ocorreu um erro")
      })
  }

  valorTotal = () => {
    let precoTotal = 0;

    this.state.carrinho.map((item) => {
      precoTotal += item.price
    })
    if (precoTotal === 0) {
      return false
    } else {
      return <div><b>Total: R$ </b>{precoTotal.toFixed(2)}</div>
    }
  }

  render() {
    return (
      <div>
        <InteractiveList />
      </div>
      // // <AppContainer>
      //   {/* {this.escolheTela()} */}

      // {/* </AppContainer> */}
    )
  }
}
