import React, { useState } from 'react'
import { ConnectedRouter } from 'connected-react-router'
import routeHistory from 'route-history'
import { Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'
import styled from 'styled-components'

import NotFound from './NotFound'
import Header from './Header'
import Gamble from './gamble'
import History from './history'

import Logo from './logo/logo'
import Account from './accountPanel/account'
import GrButton from './grButton/button'

import 'antd/dist/antd.css';

const { Content } = Layout

function App() {

    const [isGr, setIsGr] = useState<boolean>(false);

    console.clear();

    return (
        <ConnectedRouter history={routeHistory}>
            <Layout style={{ minHeight: '100%' }}>
                <Header>
                    <Logo />
                    <GrButton isGr={isGr} setIsGr={setIsGr} />
                    <Account />
                </Header>
                <Layout>
                    <Content>
                        <Switch>
                            <Route exact path="/">
                                <History />
                                <Gamble isGr={isGr} setIsGr={setIsGr} />
                            </Route>
                            <Route component={NotFound} />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </ConnectedRouter>
    )
}

export default styled(App)`
    background:#001529;
  .ant-layout-header{
    height:60px;
    background:#001529;
    display:flex;
    align-items:center;
  }
`
