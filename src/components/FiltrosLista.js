import React from "react";
import axios from "axios";


export default class FiltrosLista extends React.Component {
  state = {
    prestadores: "",
    listaDePrestadores: [],
    order: 1,
    qntDePrestadores: 0,
    inputValorMaximo: "",
    inputValorMinimo: "",
    inputPrestador: "",

  }

  componentDidMount(){
      this.getAllJobs();
             
  }

  updateOrder = (event) => {
    this.setState({ order: event.target.value })
  }
  //----------------------------------
  onChangeMaximo = (event) => {
    this.setState({ inputValorMaximo: event.target.value });
  };

  onChangeMinimo = (event) => {
    this.setState({ inputValorMinimo: event.target.value });
  };

  onChangePrestador = (event) => {
    this.setState({ inputPrestador: event.target.value });
  };

  mudarQnt = () => {
    this.setState({})
  }


  getAllJobs = () => {
    axios.get("https://labeninjas.herokuapp.com/jobs",{
      headers: {
        Authorization: "3d475e97-ff99-4efb-af1a-8a21d2ce38dd"
      }
         
    })
    .then((resposta) =>{
      this.setState({prestadores:resposta.data.jobs})
    })
    .catch((erro)=>{
      console.log(erro.response)
    })
    }



  filtrarPrestadores = (id) => {
      const url = `https://labeninjas.herokuapp.com/jobs` //${id}
      axios.get(url, {
          headers:{
              Authorization: "3d475e97-ff99-4efb-af1a-8a21d2ce38dd"
          }
      }) 
      .then((res) => {
          console.log(res.data)
          this.setState({prestadores: res.data.result.title})
          this.setState({prestadores: res.data.result.description})
          this.setState({prestadores: res.data.result.price})
          
      })
      .catch ((err) => {
          alert("erro")
      })
  
      
  }





  
  render() {
   
    return (
        

            <div>
              
            



            <h1>Filtros</h1>
            <p> Valor Máximo</p>
            <input
              type="Number"
              value={this.state.inputValorMaximo}
              onChange={this.onChangeMaximo}
              placeholder="Preço Máximo"
            />
            <p> Valor Mínimo</p>
            <input
              type="Number"
              value={this.state.inputValorMinimo}
              onChange={this.onChangeMinimo}
              placeholder="Preço Mínimo"
            />
            <p> Buscar Prestador</p>

            <div>
              <input
                defaultValue=""
                type="text"
                onChange={this.onChangePrestador}
                placeholder="Digite aqui"
              />
            </div>

          

            <div>
              <span>
                <label>
                  Ordenação:
                  <select name="order" value={this.state.order} onChange={this.updateOrder}>
                    <option value={1}>Crescente</option>
                    <option value={-1}>Decrescente</option>
                  </select>
                </label>
              </span>
            </div>

            <div>
              {this.state.listaDePrestadores.filter(listaDePrestadores => {
                return listaDePrestadores.nome.toLowerCase().includes(this.state.inputPrestador.toLowerCase())
              })

                .filter(listaDePrestadores => {
                  return this.state.inputValorMinimo === "" || listaDePrestadores.preco >= this.state.inputValorMinimo
                })
                .filter(listaDePrestadores => {
                  return this.state.inputValorMaximo === "" || listaDePrestadores.preco <= this.state.inputValorMaximo
                })
                .sort((primeiroPost, segundoPost) => {
                  return this.state.order * (primeiroPost.preco - segundoPost.preco)
                })
                }
            </div>

         

          
            
         
      </div>



    );
  }


}
