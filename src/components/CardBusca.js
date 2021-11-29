import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {
  CardBuscaStyle,
  Conteudo,
  Cor1,
  Cor2,
  Espacamento
} from './CardBuscaStyles'

export default class CardBusca extends React.Component {
  render() {
    const { id, title, description, price, paymentMethods, dueDate } =
      this.props

    return (
      <CardBuscaStyle>
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
                {price}
              </Typography>
              <Typography variant="body2" component="p">
                {description}
              </Typography>
            </Conteudo>
          </CardContent>
          <CardActions>
            <Espacamento>
              <Cor1>
                <Button
                  size="small"
                  onClick={() =>
                    this.props.irDetalhesServico({
                      title,
                      description,
                      price,
                      paymentMethods,
                      dueDate
                    })
                  }
                >
                  + Detalhes
                </Button>
              </Cor1>
              <Cor2>
                <Button
                  variant="contained"
                  onClick={() =>
                    this.props.addCarrinho({
                      id,
                      title,
                      description,
                      price,
                      paymentMethods,
                      dueDate
                    })
                  }
                >
                  Contratar
                </Button>
              </Cor2>
            </Espacamento>
          </CardActions>
        </Card>
      </CardBuscaStyle>
    )
  }
}
