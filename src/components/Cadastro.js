import React from 'react'
import axios from 'axios'
import {
  TelaCadastro,
  TituloCadastro,
  InputCadastro,
  ButtonCadastro
} from './CadastroStyles'

export default class Cadastro extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      titulo: '',
      descricao: '',
      preco: '',
      formaPagamento: '',
      prazo: ''
    }
    this.handletitulo = this.handletitulo.bind(this)
    this.handledescricao = this.handledescricao.bind(this)
    this.handlepreco = this.handlepreco.bind(this)
    this.handleformaPagamento = this.handleformaPagamento.bind(this)
    this.handleprazo = this.handleprazo.bind(this)
  }

  handletitulo = e => {
    this.setState({
      titulo: e.target.value
    })
  }

  handledescricao = e => {
    this.setState({
      descricao: e.target.value
    })
  }

  handlepreco = e => {
    this.setState({
      preco: e.target.value
    })
  }

  handleformaPagamento = e => {
    this.setState({
      formaPagamento: e.target.value
    })
  }

  handleprazo = e => {
    this.setState({
      prazo: e.target.value
    })
  }

  addMusica = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.selectedId}/tracks`
    const body = {
      name: this.state.nome,
      artist: this.state.artista,
      url: this.state.link
    }
    axios
      .post(url, body, {
        headers: {
          Authorization: 'Kahena-Mansano-Carvers'
        }
      })
      .then(res => {
        alert('Música criada com sucesso!')
        this.listaMusicas()
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <TelaCadastro>
        {/* <HeaderApp>logo e navegação</HeaderApp> */}
        <TituloCadastro>
          <h3>Cadastre o seu serviço</h3>
        </TituloCadastro>
        <InputCadastro>
          <input
            type="text"
            placeholder=" Título do anúncio de serviço"
            value={this.state.titulo}
            onChange={this.handletitulo}
          ></input>
          <input
            type="text"
            placeholder=" Descrição"
            value={this.state.descricao}
            onChange={this.handledescricao}
          ></input>
          <input
            type="number"
            placeholder=" Preço"
            value={this.state.preco}
            onChange={this.handlepreco}
          ></input>
          <select
            value={this.state.formaPagamento}
            onChange={this.handleformaPagamento}
          >
            <option value="cartaoCred">Cartão de Crédito</option>
            <option value="cartaoDeb">Cartão de débito</option>
            <option value="pix">Pix</option>
            <option value="payPal">PayPal</option>
            <option value="boleto">Boleto</option>
          </select>
          <input
            type="date"
            placeholder="  dd/mm/aaaa"
            value={this.state.prazo}
            onChange={this.handleprazo}
          ></input>
        </InputCadastro>
        <ButtonCadastro>
          <button>Cadastrar</button>
        </ButtonCadastro>
      </TelaCadastro>
    )
  }
}
