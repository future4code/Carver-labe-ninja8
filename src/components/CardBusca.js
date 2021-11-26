import React from 'react'
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
      id: '',
      title: '',
      description: '',
      price: '',
      paymentMethods: [],
      dueDate: ''
    }
    this.handleId = this.handleId.bind(this)
    this.handleTitulo = this.handleTitulo.bind(this)
    this.handleDescricao = this.handleDescricao.bind(this)
    this.handlePrice = this.handlePrice.bind(this)
    this.handleformaPagamento = this.handleformaPagamento.bind(this)
    this.handlePrazo = this.handlePrazo.bind(this)
  }

  handleId = item => {
    this.setState({
      id: item.id
    })
  }

  handleTitulo = item => {
    this.setState({
      title: item.title
    })
  }

  handleDescricao = item => {
    this.setState({
      description: item.description
    })
  }

  handlePrice = item => {
    const precoModificado = Number(item.price)
    this.setState({
      price: precoModificado
    })
  }
  handleformaPagamento = item => {
    this.setState({
      paymentMethods: item.paymentMethods
    })
  }

  handlePrazo = item => {
    this.setState({
      dueDate: item.dueDate
    })
  }

  render() {
    return (
      <CardItem>
        <Card>
          <CardContent>
            <Conteudo>
              <Typography color="textSecondary" gutterBottom>
                {this.props.dueDate}
              </Typography>
              <Typography variant="h5" component="h2">
                {this.props.title}
              </Typography>
              <Typography className="price" color="textSecondary">
                {this.props.price}
              </Typography>
              <Typography variant="body2" component="p">
                {this.props.description}
              </Typography>
            </Conteudo>
          </CardContent>
          <CardActions>
            <Espacamento>
              <Cor1>
                <Button
                  size="small"
                  onClick={() => this.props.irDetalhesServico(this.props.key)}
                >
                  + Detalhes
                </Button>
              </Cor1>
              <Cor2>
                <Button
                  variant="contained"
                  // onClick={onClick={(item) => this.props.handleCardDetalhes(item)}
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
