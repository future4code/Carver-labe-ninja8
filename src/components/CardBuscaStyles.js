import styled from 'styled-components'

export const CardItem = styled.div`
  min-height: 40vh;
  min-width: 35vw;
  max-width: 35vw;
  margin-bottom: 12;
`

export const Conteudo = styled.div`
  min-height: 20vh;
  min-width: 30vw;
  margin-bottom: 12;
`
export const Cor1 = styled.div`
  button {
    color: #7869bf;
    font-size: small;
    width: 13vw;
    height: 5vh;
    &:hover {
      color: white;
      background-color: #7869bf;
    }
  }
`

export const Cor2 = styled.div`
  button {
    color: white;
    background-color: #7869bf;
    font-size: small;
    width: 13vw;
    height: 5vh;
    box-shadow: none;
    &:hover {
      color: white;
      background-color: #9281e3;
    }
  }
`
export const Espacamento = styled.div`
  display: flex;
  min-width: 31vw;
  margin-left: 8px;

  justify-content: space-between;
`
