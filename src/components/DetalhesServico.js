import React from "react"
import axios from "axios"
import styled from "styled-components"



export default class TelaListaPrestadores extends React.Component{
    state = {
        prestadores: [],
    }

    componentDidMount() {
       this.pegarPrestadores()
    }

    pegarPrestadores = () => {
        const url = "{{baseURL}}/jobs"
        const body = {
            name: demo,
        }
        axios.get(url, {
            headers:{
                Authorization: "victor-vale-carver"
            }
        })
        .then((res) => {
            this.setState({prestadores: res.data})
        })
        .catch((err) => {
            alert("ocorreu um problema, tente novamente")
        })
    }


    infoPrestador = (id) => {
        const url = `https://labeninjas.herokuapp.com/jobs/:${id}`
        axios.get(url, {
            headers:{
                Authorization: "3d475e97-ff99-4efb-af1a-8a21d2ce38dd"
            }
        }) 
        .then((res) => {
            this.pegarPrestador()
            console.log(res.data)
            this.setState({clicou: true})
            this.setState({nome: res.data.result.title})
        })
        .catch ((err) => {
            alert("erro")
        })
        
    }


    render(){
        console.log(this.state.prestadores)
        const listaUsuarios = this.state.usuarios.map((x) => {
            return <CardUsuario key={x.id}>
                {x.name}
                <button onClick={() => this.infoUsuario(x.id)}>Informações</button>
                </CardUsuario>

        
        })

        return (

            <div>
                <button onClick={this.props.irParaCadastro}>Ir para Tela de cadastro</button>
                <h2>Tela Lista de Usuarios</h2>
                {listaUsuarios}
            

            </div>

        )
    }
}