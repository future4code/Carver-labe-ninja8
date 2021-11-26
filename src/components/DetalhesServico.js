import React from 'react'
import axios from 'axios'

export default class DetalhesServico extends React.Component {
  state = {
    prestadores:  []
  }

  componentDidMount = () => {
    this.pegarJobs()
  }

  pegarJobs = () => {
    const url = `https://labeninjas.herokuapp.com/jobs`
    axios
      .get(url, {
        headers: {
          Authorization: '3d475e97-ff99-4efb-af1a-8a21d2ce38dd'
        }
      })
      .then((res) => {
        console.log("pegar jobs", res.data)
        this.setState({ prestadores: res.data })
      })
      .catch((err) => {
        alert('ocorreu um erro')
      })
  }

  infoJob = (id) => {
    const url = `https://labeninjas.herokuapp.com/jobs/:${id}`
    axios
      .get(url, {
        headers: {
          Authorization: '3d475e97-ff99-4efb-af1a-8a21d2ce38dd'
        }
      })
      .then((res) => {
        console.log(res.data)
        console.log(res.data.title)
        console.log(res.data.description)
      })
      .catch((err) => {
        alert('erro')
        console.log(err)
      })
  }

  render() {
    console.log(this.state.prestadores)
    const listaJobs = this.state.prestadores.map((x) => {
      return <div key={x.id}>
          {x.title}
          <button onClick={() => this.infoJob(x.id)}>Mais informações</button>
          </div>
      
    })

    return (
      <div>
        <h1>Detalhes dos serviços</h1>
        <button onClick={this.props.irHome}> Home </button>
        <div>{listaJobs}</div>
      </div>
    )
  }
}
