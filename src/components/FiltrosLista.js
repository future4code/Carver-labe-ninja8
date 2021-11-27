import React from 'react'
import axios from 'axios'
import CardItem from './CardBusca'
import {
  HeaderApp,
  ButtonHeader,
  TelaFiltro,
  InputsFiltro,
  GridCards
} from './FiltrosStyles'
import WorkIcon from '@material-ui/icons/Work'
import IconButton from '@material-ui/core/IconButton'

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
      .filter(element => element.price < this.state.inputValorMaximo)
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
        <CardItem
          key={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          paymentMethods={item.paymentMethods}
          dueDate={item.dueDate}
        />
      )
    })

    console.log(this.state.listaDePrestadores, 'nova lista')
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

          <ButtonHeader>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={this.props.irCarrinho}
            >
              <WorkIcon />
            </IconButton>
          </ButtonHeader>
        </HeaderApp>
        <InputsFiltro>
          <input
            type="Number"
            value={this.state.inputValorMaximo}
            onChange={this.onChangeMaximo}
            placeholder="Valor máximo"
          />

          <input
            type="Number"
            value={this.state.inputValorMinimo}
            onChange={this.onChangeMinimo}
            placeholder="Valor mínimo"
          />

          <div>
            <input
              type="text"
              placeholder="Buscar por serviço"
              onChange={this.onChangePrestador}
              value={this.state.inputPrestador}
            />
          </div>

          <div>
            <select
              name="order"
              value={this.state.order}
              onChange={this.updateOrder}
            >
              <option value={1}>Crescente</option>
              <option value={-1}>Decrescente</option>
            </select>
          </div>
        
        </InputsFiltro>

        <GridCards>{mostrarLista}</GridCards>

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
