export default class FiltrosLista extends React.Component {
    state = {
      prestadores: "",
      listaDePosts: [

       
        {
          id: Math.random(),
          imagem: "",
          nome: "Assassino de ALUGUEL",
          preco: 70
        },
        {
          id: Math.random(),
          imagem: "",
          nome: "Pedreiro",
          preco: 15
        },
        {
          id: Math.random(),
          imagem: "",
          nome: "Prestador",
          preco: 45
        },
      
      
      ],
      order: 1,
      qntDePrestadores: 0,
      inputValorMaximo: "",
      inputValorMinimo: "",
      inputPrestador: "",
  
    }

    componentDidMount(){
        this.filtroPrestadores()

    }

    getAllPrestadores = (id) => {
        const url = `https://labeninjas.herokuapp.com/jobs/:${id}`
        axios.get(url, {
            headers:{
                Authorization: "3d475e97-ff99-4efb-af1a-8a21d2ce38dd"
            }
        }) 
        .then((res) => {
            this.filtroPrestadores()
            console.log(res.data)
            this.setState({clicou: true})
            this.setState({nome: res.data.result.title})
        })
        .then((res) => {
            this.filtroPrestadores()
            console.log(res.data)
            this.setState({clicou: true})
            this.setState({nome: res.data.result.description})
        })










        .catch ((err) => {
            alert("erro")
        })
    
        










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
  
    render() {
      return (
        <DivPai>
            <ContainerFiltros>
              <h1>Filtros</h1>
              <Paragrafo> Valor Máximo</Paragrafo>
              <Input
                type="number"
                value={this.state.inputValorMaximo}
                onChange={this.onChangeMaximo}
                placeholder="Preço Máximo"
              />
              <Paragrafo> Valor Mínimo</Paragrafo>
              <Input
                type="Number"
                value={this.state.inputValorMinimo}
                onChange={this.onChangeMinimo}
                placeholder="Preço Mínimo"
              />
              <Paragrafo> Buscar Prestador</Paragrafo>
  
              <div>
                <Input
                  defaultValue=""
                  type="text"
                  onChange={this.onChangePrestador}
                  placeholder="Digite aqui"
                />
              </div>
  
            </ContainerFiltros>
  
            <ContainerPosts>
  
              <DivOrdenacao>
                <span>
                  <label>
                    Ordenação:
                    <select name="order" value={this.state.order} onChange={this.updateOrder}>
                      <option value={1}>Crescente</option>
                      <option value={-1}>Decrescente</option>
                    </select>
                  </label>
                </span>
              </DivOrdenacao>
  
              <GradeDePosts>
                {this.state.listaDePosts.filter(listaDePosts => {
                  return listaDePosts.nome.toLowerCase().includes(this.state.inputPrestador.toLowerCase())
                })
  
                  .filter(listaDePosts => {
                    return this.state.inputValorMinimo === "" || listaDePosts.preco >= this.state.inputValorMinimo
                  })
                  .filter(listaDePosts => {
                    return this.state.inputValorMaximo === "" || listaDePosts.preco <= this.state.inputValorMaximo
                  })
                  .sort((primeiroPost, segundoPost) => {
                    return this.state.order * (primeiroPost.preco - segundoPost.preco)
                  })
                  .map((post) => {
                    return (
  
                      <Post imagem={post.imagem} nome={post.nome} preco={post.preco} />
                    )
                  })}
              </GradeDePosts>
  
            </ContainerPosts>
  
            <ContainerFiltros>
              
            </ContainerFiltros>
        </DivPai>
  
  
  
      );
    }
  }
  
