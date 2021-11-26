import React from 'react'
import axios from 'axios'
import CardItem from './CardBusca'
import {
  HeaderApp,
  TelaFiltro,
  InputsFiltro
  // ButtonFiltro
} from './FiltrosStyles'
import Button from '@material-ui/core/Button'

export default class FiltrosLista extends React.Component {
  state = {
    listaDePrestadores: [],
    listaFiltrada: [],
    order: 1,
    qntDePrestadores: 0,
    inputValorMaximo: '',
    inputValorMinimo: '',
    inputPrestador: ''
  }

  componentDidMount() {
    this.getAllJobs()
  }

  updateOrder = event => {
    this.setState({ order: event.target.value })
  }

  onChangeMaximo = event => {
    this.setState({ inputValorMaximo: event.target.value })
    console.log(this.state.inputValorMaximo, 'valor maximo')
  }

  onChangeMinimo = event => {
    this.setState({ inputValorMinimo: event.target.value })
    console.log(this.state.inputValorMinimo, 'valor minimo')
  }

  onChangePrestador = event => {
    this.setState({ inputPrestador: event.target.value })
    console.log(this.state.inputPrestador, 'nome buscado')
  }

  filtrosDeBusca = () => {
    const novaLista = this.state.listaDePrestadores
      .filter(element => element.title === this.state.inputPrestador)
      .filter(element => element.price > this.state.inputValorMinimo)
      .filter(element => element.price < this.state.inputValorMaximoo)
    this.setState({ listaFiltrada: novaLista })
    console.log(this.state.listaDePrestadores, 'nova lista')
  }

  mudarQnt = () => {
    this.setState({})
  }

  getAllJobs = () => {
    const url = `https://labeninjas.herokuapp.com/jobs`
    axios
      .get(url, {
        headers: {
          Authorization: '3d475e97-ff99-4efb-af1a-8a21d2ce38dd'
        }
      })
      .then(resposta => {
        console.log(resposta)
        this.setState({ listaDePrestadores: resposta.data.jobs })
      })
      .catch(erro => {
        console.log(erro.response)
      })
  }

  render() {
    const mostrarLista = this.state.listaDePrestadores.map(item => {
      return (
        <CardItem key={item.id}>
          {item.id}
          {item.title}
          {item.description}
          {item.price}
          {item.paymentMethods}
          {item.dueDate}
          <button onClick={() => this.detalhesCard(item)} />
          <button onClick={() => this.props.addCarrinho(item)} />
        </CardItem>
      )
    })
    return (
      <TelaFiltro>
        <HeaderApp>
          <a href="Home" onClick={this.props.irHome}>
            <img
              src="https://i.postimg.cc/VsX1fLHZ/Design-sem-nome.png"
              alt="Logo de um ninja."
            />
          </a>

          <p>O talento certo, no momento certo.</p>

          <a href="Home" onClick={this.props.irHome}>
            <img
              src="https://i.postimg.cc/SRK1BdXM/Design-sem-nome-3.png"
              alt="Escrito LabeNinjas."
            />
          </a>
        </HeaderApp>
        <InputsFiltro>
          <h1>Filtros</h1>
          <p>Valor Máximo:</p>
          <input
            type="Number"
            value={this.state.inputValorMaximo}
            onChange={this.onChangeMaximo}
            placeholder="Preço Máximo"
          />
          <p>Valor Mínimo:</p>
          <input
            type="Number"
            value={this.state.inputValorMinimo}
            onChange={this.onChangeMinimo}
            placeholder="Preço Mínimo"
          />
          <p>Buscar Prestador:</p>

          <div>
            <input
              type="text"
              placeholder="Nome do Prestador"
              onChange={this.onChangePrestador}
              value={this.state.inputPrestador}
            />
          </div>

          <div>
            <span>
              <label>
                Ordenação:
                <select
                  name="order"
                  value={this.state.order}
                  onChange={this.updateOrder}
                >
                  <option value={1}>Crescente</option>
                  <option value={-1}>Decrescente</option>
                </select>
              </label>
            </span>
          </div>
        </InputsFiltro>

        <div>{mostrarLista}</div>

        {/* <div>
          {this.state.listaDePrestadores
            .filter(listaDePrestadores => {
              return listaDePrestadores.nome
                .toLowerCase()
                .includes(this.state.inputPrestador.toLowerCase())
            })

            .filter(listaDePrestadores => {
              return (
                this.state.inputValorMinimo === '' ||
                listaDePrestadores.preco >= this.state.inputValorMinimo
              )
            })
            .filter(listaDePrestadores => {
              return (
                this.state.inputValorMaximo === '' ||
                listaDePrestadores.preco <= this.state.inputValorMaximo
              )
            })
            .sort((primeiroPost, segundoPost) => {
              return this.state.order * (primeiroPost.preco - segundoPost.preco)
            })}
        </div> */}
      </TelaFiltro>
    )
  }
}
