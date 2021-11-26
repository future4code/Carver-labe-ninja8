import React from 'react'
import Axios from 'axios'



export class CardCarrinho extends Component {
    state = {
        carrinho: []
    }

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
            <div>
                <p>Carrinho</p>
                {listaServicos}
            </div>
        )
    }
}