import styled from 'styled-components'

export const TelaCarrinho = styled.div`
  max-height: 100vh;
  min-height: 100vh;
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f4fd;
`
export const HeaderApp = styled.div`
  height: 15vh;
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: #7869bf;
  justify-content: space-between;
  -webkit-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);

  -moz-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);

  -ms-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);

  -o-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);

  img {
    height: 10vh;
    width: auto;
    margin-left: 3vw;
    margin-right: 3vw;
  }
  p {
    font-size: 1rem;
    font-family: sans-serif;
    letter-spacing: 2px;
    color: white;
    text-align: center;
  }
`
export const ButtonHeader = styled.div`
  margin-right: 3vw;
`

export const Body = styled.div`
  height: 65vh;
  width: 100vw;
  background-color: #f5f4fd;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f4fd;
  p {
    font-size: 1rem;
    font-family: sans-serif;
    letter-spacing: 2px;
    color: #7869bf;
    text-align: center;
  }
  h3 {
    font-size: 2rem;
    font-family: sans-serif;
    letter-spacing: 2px;
    color: #7869bf;
    text-align: center;
    display: block;
    margin-top: 10px;
    margin-bottom: 0;
  }
`

export const ButtonCarrinho = styled.div`
  button {
    margin-top: 16px;
    color: white;
    background-color: #7869bf;
    border-radius: 4px;

    font-size: 1rem;
    font-family: sans-serif;
    line-height: 1.4rem;
    width: 70vw;
    max-width: 400px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    &:hover {
      color: white;
      background-color: #9281e3;
    }
  }
`
