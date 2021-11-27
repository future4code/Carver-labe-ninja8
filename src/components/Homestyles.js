import styled from 'styled-components'

export const TelaHome = styled.div`
  max-height: 100vh;
  min-height: 100vh;
  max-width: 100vw;
  min-width: 100vw;
  box-sizing: border-box;
`

export const Headerapp = styled.div`
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
  height: 85vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #f5f4fd;
  img {
    margin-top: 2vh;
  }
`
export const ButtonLayout = styled.div`
  button {
    margin: 20px;
    width: 100vw;
    margin-top: 16px;
    background-color: #7869bf;
    border-radius: 4px;
    font-size: 1rem;
    font-family: sans-serif;
    letter-spacing: 2px;
    color: white;
    text-align: center;
    width: 20vw;
    box-sizing: border-box;
    &:hover {
      background-color: #9281e3;
    }
  }
`
