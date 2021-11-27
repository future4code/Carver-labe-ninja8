import styled from 'styled-components'

export const TelaFiltro = styled.div`
  height: auto;
  min-height: 200vh;
  min-width: 100vw;
  max-width: 100vw;
  min-width: 100vw;
  box-sizing: border-box;
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

export const InputsFiltro = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
  pointer-events: text;
  background-color: #f5f4fd;
  font-size: 16px;
  font-family: sans-serif;
  letter-spacing: 2px;
  color: #7869bf;

  input,
  select {
    color: #7869bf;
    height: 4vh;
    width: 20vw;
    max-width: 400px;
    background-color: white;
    margin-top: 16px;
    margin-bottom: 8px;
    border-color: rgba(0, 0, 0, 0.54);
    border-radius: 4px;
    border: 0;
    padding: 0;
    font-size: 1rem;
    font-family: sans-serif;
    font-weight: 400;
    line-height: 1.4rem;
  }
`

export const GridCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
`
