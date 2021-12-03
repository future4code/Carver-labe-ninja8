import React from 'react'
import {
  TelaDetalhes,
  Headerapp,
  ButtonHeader,
  TituloDetalhes,
  Body,
  ButtonDetalhes
} from './DetalhesServicoStyles'
import WorkIcon from '@material-ui/icons/Work'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'

export default class DetalhesServicos extends React.Component {
  render() {
    const { id, title, description, price, paymentMethods, dueDate } =
      this.props
    return (
      <TelaDetalhes>
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

        <TituloDetalhes>
          <h3>Detalhes do serviço</h3>
        </TituloDetalhes>
        <Body>
          <p>{this.props.selectedDetalhes.title}</p>
          <p>Descrição: {this.props.selectedDetalhes.description}</p>
          <p>Disponibilidade: {this.props.selectedDetalhes.dueDate}</p>
          <p>R$ {this.props.selectedDetalhes.price}</p>
          <p>
            Formas de pagamento aceitas:{' '}
            {this.props.selectedDetalhes.paymentMethods}
          </p>
          <ButtonDetalhes>
            <Button
              variant="contained"
              color="primary"
              onClick={this.props.irFiltrosLista}
            >
              ← Voltar para a lista
            </Button>

            <Button
              variant="contained"
              color="primary"
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
              <WorkIcon />
              {'          '}Contratar Serviço{'          '}
              <WorkIcon />
            </Button>
          </ButtonDetalhes>
        </Body>
      </TelaDetalhes>
    )
  }
}
