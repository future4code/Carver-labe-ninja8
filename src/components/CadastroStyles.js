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
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    font-size: 1rem;
    font-family: sans-serif;
    line-height: 1.4rem;
    width: 70vw;
    max-width: 400px;
    box-sizing: border-box;
  }
`
