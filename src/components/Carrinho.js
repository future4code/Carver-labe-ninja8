import React from 'react'
import CardCarrinho from './CardCarrinho'
import { TelaCarrinho, HeaderApp, ButtonHeader, Body } from './CarrinhoStyles'
import WorkIcon from '@material-ui/icons/Work'
import IconButton from '@material-ui/core/IconButton'

export default class CarrinhoSevicos extends React.Component {
  render() {
    const listaAtualizada = this.props.carrinho
    const listaAposAdcionar = [...listaAtualizada]

    const mostrarLista = listaAposAdcionar.map(item => {
      return <CardCarrinho title={item.title} price={item.price} />
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
