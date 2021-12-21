import React from 'react'

import { connect } from 'react-redux'
import { setGrPanel } from '../../actions/common'
import { IAppState } from 'store'

import styled from 'styled-components'

const mapStateToProps = (state: IAppState) => ({
  gamerules: state.gamerules
});

const mapDispatchToProps = (dispatch) => ({
    setGrPanel: () => dispatch(setGrPanel())
});

const GrButton: React.FC = ({ setGrPanel }: any) => {
    return (
        <StyledTextBlock onClick={() => setGrPanel()}>
            <P> How to play ? </P>
        </StyledTextBlock>
    )
}

const StyledTextBlock = styled.div`
  width: 10rem;
  height: 1.9rem;
  background: #555;
  border: 1.5px solid #696A66;
  border-radius: 0.4rem;
  margin: auto;
  margin-left: 52%;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  cursor: pointer;
`

const P = styled.p`
  font-weight: 700;
  font-size: 1.3rem;
  font-weight: 300;
  line-height: 1;
  color: white;
  margin: 0.3rem auto;
  `

export default connect(mapStateToProps, mapDispatchToProps)(GrButton)
