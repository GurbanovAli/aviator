import React from 'react';

import { connect } from 'react-redux'
import { IAppState } from 'store'

import { StyledContainer, Div, Div2, P1, P2, P3 } from './style'

const mapStateToProps = (state: IAppState) => ({
    lang: state.lang,
    historyOfBet: state.historyOfBet,
    isFlying: state.isFlying
});

const connector = connect(mapStateToProps);

const Item: React.FC<IAppState> = ({ lang, historyOfBet }: IAppState) => (
    <>
        <Div2>
            <p> {lang.history.values[0]} </p>
            <p> {lang.history.values[1]} </p>
            <p> {lang.history.values[2]} </p>
            <p> {lang.history.values[3]} </p>
        </Div2>
        {
            historyOfBet.historyOfBet.map((item, index) => (
                <Div key={index}>
                    <P1> {item.bet}{item.currency} </P1>
                    <P2> {lang.history.values[4] + " " + item.data} </P2>
                    <P3> {item.win ? lang.history.values[5] : " - "} </P3>
                    <P3> {item.win ? (item.bet + item.count) : " - "} </P3>
                </Div>
            ))
        }
    </>
);

const History: React.FC<IAppState> = ({ lang, historyOfBet }: IAppState) => (
    <StyledContainer>
        <Item lang={lang} historyOfBet={historyOfBet} />
    </StyledContainer>
);

export default connector(History)
