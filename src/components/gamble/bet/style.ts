import styled from 'styled-components'

export const StyledContainer = styled.div`
  width: 800px;
  height: 220px;
  margin: 10px;
  grid-row: 2 / 2;
  display:flex;
  justify-content: space-around;
`

export const StyledBlock = styled.div`
  width: 400px;
  height: 200px;
  padding: 10px;
  display:flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background: #090f1f;
  border-radius:6px;
`

export const StyledTextBlock = styled.div`
  width: 150px;
  height: 100px;
  margin: 0 auto;
  text-align: center;
`

export const StyledInfoPanel = styled.div`
  width: 360px;
  height: 60px;
  margin: 5px auto;
  padding: auto;
  text-align: center;
  border-radius: 5px;
`
