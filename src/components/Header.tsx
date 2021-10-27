import { Layout } from 'antd'
import styled from 'styled-components'

const { Header } = Layout

const StyledHeader = styled(Header)`
  height:60px;
  background:#001529;
  display:flex;
  align-items:center;
  color:#FFF;
  padding:0 55px;
  font-size: 44px;
  font-family: cursive;
`
export default StyledHeader
