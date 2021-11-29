import React from 'react'
import CardCarrinho from './CardCarrinho'
import {
  TelaCarrinho,
  HeaderApp,
  ButtonHeader,
  Body,
  ButtonCarrinho
} from './CarrinhoStyles'
import WorkIcon from '@material-ui/icons/Work'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

export default class Carrinho extends React.Component {
  finalizar = () => {
    alert('Contratação finalizada!')
  }

  render() {
    const listaAtualizada = this.props.carrinho
    const listaAposAdcionar = [...listaAtualizada]

    const mostrarLista = listaAposAdcionar.map(item => {
      return (
        <CardCarrinho
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          deletaServicoCarrinho={this.props.deletaServicoCarrinho}
        />
      )
    })

    const mostrarValorTotal = listaAposAdcionar.map(item => {
      let precoTotal = 0
      let precoServico = item.price
      if (precoServico === 0) {
        return false
      } else {
        return (precoTotal = precoTotal + precoServico)
      }
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

        <Body>
          <Typography variant="h6">
            <h3>Contratação de serviços:</h3>
          </Typography>
          {mostrarLista}

          <Typography variant="h5" component="h2">
            <p>Valor total das contratações: R$ {mostrarValorTotal}</p>
          </Typography>
          <ButtonCarrinho>
            <Button
              variant="contained"
              color="primary"
              onClick={this.props.irFiltrosLista}
            >
              Voltar para lista
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.finalizar}
            >
              Finalizar contratação!
            </Button>
          </ButtonCarrinho>
        </Body>
      </TelaCarrinho>
    )
  }
}
