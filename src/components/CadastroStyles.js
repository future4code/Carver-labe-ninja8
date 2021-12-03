import styled from 'styled-components'

export const TelaCadastro = styled.div`
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

export const TituloCadastro = styled.div`
  font-size: 3rem;
  font-family: sans-serif;
  letter-spacing: 2px;
  color: #7869bf;
  text-align: center;
  h3 {
    display: block;
    width: 70vw;
    max-width: 400px;
    margin-bottom: 0;
  }
`
export const InputCadastro = styled.div`
  display: flex;
  flex-direction: column;
  pointer-events: text;
  background-color: #f5f4fd;

  input,
  select {
    color: #7869bf;
    width: 70vw;
    max-width: 400px;
    display: flex;
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
export const ButtonCadastro = styled.div`
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
    &:hover {
      color: white;
      background-color: #9281e3;
    }
  }
`
