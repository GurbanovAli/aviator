import styled from 'styled-components'

export const StyledPanel = styled.div`
  width: 400px;
  height: 12rem;
  align-content: center;
  margin-right: 20px;
  padding: 10px;
  background: #090f1f;
  border-radius:6px;
`

export const StyledForm = styled.form`
  width: 20rem;
  height: 6rem;
  margin: 2rem auto auto;
  padding: 10px;
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  align-content: center;
`
