import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

export default class TelaListaPrestadores extends React.Component {
  state = {
    prestadores: [],
    titulo: '',
    descricao: '',
    preco: '',
    metodo: '',
    recebeData: ''
  }

  infoPrestador = id => {
    const url = `https://labeninjas.herokuapp.com/jobs/:${id}`
    axios
      .get(url, {
        headers: {
          Authorization: '3d475e97-ff99-4efb-af1a-8a21d2ce38dd'
        }
      })
      .then(res => {
        this.pegarPrestador()
        console.log(res.data)
        this.setState({ titulo: res.data.result })
        this.setState({ descricao: res.data.result })
        this.setState({ preco: res.data.result })
        this.setState({ metodo: res.data.result.paymentMethod })
        this.setState({ recebeData: res.data.result })
      })
      .catch(err => {
        alert('erro')
      })
  }

  render() {
    console.log('bananinha')
    console.log(this.state.prestadores)
    const TelaListaPrestadores = this.state.prestadores.map(x => {
      return
      ;<CardPrestador key={x.id}>
        {x.name}
        <button onClick={() => this.infoPrestador(x.id)}>Informações</button>
      </CardPrestador>
    })

    return (
      <div>
        <button onClick={this.props.irHome}>Ir para Tela de cadastro</button>
        <h2>Tela Lista de Usuarios</h2>
        {listaUsuarios}
      </div>
    )
  }
}
