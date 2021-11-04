import React, { useState } from 'react'
import { ConnectedRouter } from 'connected-react-router'
import routeHistory from 'route-history'
import { Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'
import styled from 'styled-components'

import NotFound from './NotFound'
import Gamble from './gamble'
import Header from './Header'
import Account from './accountPanel/account'

const { Content } = Layout

function App() {

    const [check, setCheck] = useState<number>(400);

    return (
        <ConnectedRouter history={routeHistory}>
            <Layout style={{ minHeight: '100%' }}>
                <Header>
                    Aviator
                    <Account check={check} />
                </Header>
                <Layout>
                    <Content>
                        <Switch>
                            <Route exact path="/">
                                <Gamble check={check} setCheck={setCheck} />
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
