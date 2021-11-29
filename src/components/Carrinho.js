import React from 'react'
import Axios from 'axios'
import CardCarrinho from './CardCarrinho'
import { TelaCarrinho, HeaderApp, ButtonHeader, Body } from './CarrinhoStyles'
import WorkIcon from '@material-ui/icons/Work'
import IconButton from '@material-ui/core/IconButton'

export class Carrinho extends Component {
    state = {
        carrinho: []
    }

    adicionarCarrinho = (id) => {
        const url = `https://labeninjas.herokuapp.com/jobs/${id}`
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
        const url = `https://labeninjas.herokuapp.com/jobs/${id}`
        Axios.delete(url, {
            headers: {
                Authorization: "3d475e97-ff99-4efb-af1a-8a21d2ce38dd"
            }
        })
            .then((res) => {
                alert("Item deletado com sucesso");
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
// const listaAtualizada = this.props.carrinho
//     const listaAposAdcionar = [...listaAtualizada]

//     const mostrarLista = listaAposAdcionar.map(item => {
//       return <CardCarrinho title={item.title} price={item.price} />
//     })

    render() {
      
        console.log(this.state.carrinho);
        const listaServicos = this.state.carrinho.map((item) => {
            return (
                <CardPlaylist key={item.id}>
                    {item.title}
                    {item.price}
                    <button onClick={() => this.deletaServico(item.id)}>X</button>
                </CardPlaylist>
            )
        })
        return (
          <TelaCarrinho>
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


        <Body>{mostrarLista}</Body>
      </TelaCarrinho>
    )
  }
}

