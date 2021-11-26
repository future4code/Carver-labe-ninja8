import React from 'react'
// import axios from 'axios'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { CardItem, Conteudo, Cor1, Cor2, Espacamento } from './CardBuscaStyles'

export default class SimpleCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs: [],
      card: {
        id: '',
        title: 'Nome prestador',
        description: 'Serviço prestador em detalhes da descrição.',
        price: '2.000 converter em number',
        dueDate: '22/12/21'
      }
    }
    this.handleId = this.handleId.bind(this)
    this.handleTitulo = this.handleTitulo.bind(this)
    this.handleDescricao = this.handleDescricao.bind(this)
    this.handlePrice = this.handlePrice.bind(this)
    this.handlePrazo = this.handlePrazo.bind(this)
  }

  componentDidMount() {
    this.listaCardsAtual()
  }

  handleId = e => {
    this.setState({
      card: { id: e.target.value }
    })
  }

  handleTitulo = e => {
    this.setState({
      card: { title: e.target.value }
    })
  }

  listaCardsAtual = () => {
    const url = `https://labeninjas.herokuapp.com/jobs`

    axios
      .get(url, {
        headers: {
          Authorization: '3d475e97-ff99-4efb-af1a-8a21d2ce38dd'
        }
      })
      .then(res => {
        this.setState({ jobs: res.data.result.list })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <CardItem key={this.state.card.id}>
        <Card>
          <CardContent>
            <Conteudo>
              <Typography color="textSecondary" gutterBottom>
                {this.state.card.dueDate}
              </Typography>
              <Typography variant="h5" component="h2">
                {this.state.card.title}
              </Typography>
              <Typography className="price" color="textSecondary">
                {this.state.card.price}
              </Typography>
              <Typography variant="body2" component="p">
                {this.state.card.description}
              </Typography>
            </Conteudo>
          </CardContent>
          <CardActions>
            <Espacamento>
              <Cor1>
                <Button
                  size="small"
                  onClick={() =>
                    this.props.irDetalhesServico(this.state.card.id)
                  }
                >
                  + Detalhes
                </Button>
              </Cor1>
              <Cor2>
                <Button
                  variant="contained"
                  onClick={() => this.addCarrinho(this.state.card.id)}
                >
                  Contratar
                </Button>
              </Cor2>
            </Espacamento>
          </CardActions>
        </Card>
      </CardItem>
    )
  }
}
