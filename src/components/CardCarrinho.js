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

export default class CardCarrinho extends React.Component {
  render() {
    return (
      <ListagemCarrinho>
        <Typography variant="h6">Contratação de serviços:</Typography>
        <List>
          <ItemStyle>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>
                <p>{this.props.title}</p>
                <p>{this.props.price}</p>
              </ListItemText>
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </ItemStyle>
        </List>
      </ListagemCarrinho>
    )
  }
}
