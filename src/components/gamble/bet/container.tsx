import React,{ useState } from 'react';
import { connect, ConnectedProps } from 'react-redux'

import styled from 'styled-components'

import { IAppState } from 'store'

const mapStateToProps = (state: IAppState) => ({
  fetching: state.common.fetching
})
const mapActionsToProps = (dispatch) => ({
})
import { StyledContainer} from './style'

const connector = connect(mapStateToProps, mapActionsToProps)

const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 6rem;
  height: 3rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  cursor: pointer;
    :active{
      background: gray;
    }
  `

const Bet: React.FC = () => {
  const [bet, setBet] = useState(5);

  return (
    <StyledContainer>
      <React.Fragment>
        <div>
        <button onClick={()=>setBet(bet !== 0 ? bet - 1 : 0)}>
        -
        </button>
        <input type="text" name="current_bet" value={bet}/>
        <button onClick={()=>setBet(bet !== 50 ? bet + 1 : 50)}>
        +
        </button>
        </div>

        <div>

        </div>
        <Button>
          bet
        </Button>
      </React.Fragment>
    </StyledContainer>
  )
};

export default connector(Bet)
