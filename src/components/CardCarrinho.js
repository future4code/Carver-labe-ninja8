import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import WorkIcon from '@material-ui/icons/Work'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete'
import { ListagemCarrinho, ItemStyle } from './CardCarrinhoStyles'

function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value
    })
  )
}
export default class InteractiveList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // jobsSelecionados: [],
      card: {
        id: '',
        title: 'Nome prestador',

        price: '2.000 converter em number'
      }
    }
  }

  render() {
    return (
      <ListagemCarrinho>
        <Typography variant="h6">Contratação de serviços:</Typography>
        <List>
          <ItemStyle>
            {generate(
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <WorkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={this.state.card.title}
                  secondary={this.state.card.price}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            )}
          </ItemStyle>
        </List>
      </ListagemCarrinho>
    )
  }
}
