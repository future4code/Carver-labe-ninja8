import React from 'react'
import {
  TelaHome,
  Headerapp,
  ButtonHeader,
  Body,
  ButtonLayout
} from './Homestyles'
import WorkIcon from '@material-ui/icons/Work'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'

export default class Home extends React.Component {
  render() {
    return (
      <TelaHome>
        <Headerapp>
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
        </Headerapp>
        <Body>
          <img
            src="https://i.postimg.cc/YC8JDN1K/labeninjas2-removebg-preview.png"
            alt="Logo Labeninjas."
          />
          <ButtonLayout>
            <Button
              variant="contained"
              color="primary"
              onClick={this.props.irCadastro}
            >
              Quero ser um ninja
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.props.irFiltrosLista}
            >
              Contratar um Ninja
            </Button>
          </ButtonLayout>
        </Body>
      </TelaHome>
    )
  }
}
