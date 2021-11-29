import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import WorkIcon from '@material-ui/icons/Work'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import { ListagemCarrinho } from './CardCarrinhoStyles'

export default class CardCarrinho extends React.Component {
  render() {
    const { id, title, description, price, paymentMethods, dueDate } =
      this.props
    return (
      <ListagemCarrinho>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>

            <ListItemText>
              <p>Serviço: {this.props.title} </p>

              <p> - Preço da contratação: R$ {this.props.price}</p>
            </ListItemText>

            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() =>
                  this.props.deletaServicoCarrinho({
                    id,
                    title,
                    description,
                    price,
                    paymentMethods,
                    dueDate
                  })
                }
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </ListagemCarrinho>
    )
  }
}
