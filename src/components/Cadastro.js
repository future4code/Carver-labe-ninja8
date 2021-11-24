import React from 'react'
import axios from 'axios'
import {
  HeaderApp,
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
    console.log(this.state.titulo, 'Foi o título')
  }

  handledescricao = e => {
    this.setState({
      descricao: e.target.value
    })
    console.log(this.state.descricao, 'Foi a descrição')
  }

  handlepreco = e => {
    this.setState({
      preco: e.target.value
    })
    console.log(this.state.preco, 'Foi o preço')
  }

  handleformaPagamento = e => {
    this.setState({
      formaPagamento: e.target.value
    })
    console.log(this.state.formaPagamento, 'Foi o pagamento')
  }

  handleprazo = e => {
    this.setState({
      prazo: e.target.value
    })
    console.log(this.state.prazo, 'Foi o prazo')
  }

  addNinja = () => {
    const url = `https://labeninjas.herokuapp.com/jobs`
    const body = {
      title: this.state.titulo,
      description: this.state.descricao,
      price: this.state.preco,
      paymentMethods: this.state.formaPagamento,
      dueDate: this.state.prazo
    }
    axios
      .post(url, body, {
        headers: {
          Authorization: '3d475e97-ff99-4efb-af1a-8a21d2ce38dd'
        }
      })
      .then(res => {
        alert('Agora você é um LabeNinja!')
        console.log(res)
      })
      .catch(err => {
        alert('Este cadastro já existe!')
        console.log(err)
      })
  }

  render() {
    return (
      <TelaCadastro>
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
            <option value={this.state.formaPagamento}>Cartão de Crédito</option>
            <option value={this.state.formaPagamento}>Cartão de débito</option>
            <option value={this.state.formaPagamento}>Pix</option>
            <option value={this.state.formaPagamento}>PayPal</option>
            <option value={this.state.formaPagamento}>Boleto</option>
          </select>
          <input
            type="date"
            placeholder="  dd/mm/aaaa"
            value={this.state.prazo}
            onChange={this.handleprazo}
          ></input>
        </InputCadastro>
        <ButtonCadastro>
          <button type="button" onClick={this.addNinja}>
            Cadastrar
          </button>
        </ButtonCadastro>
      </TelaCadastro>
    )
  }
}
