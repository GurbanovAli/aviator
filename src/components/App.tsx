import React from 'react'

import { ConnectedRouter } from 'connected-react-router'
import routeHistory from 'route-history'
import { Switch, Route } from 'react-router-dom'

import { Layout } from 'antd'
import styled from 'styled-components'

import NotFound from './NotFound'
import Header from './header'
import Gamble from './gamble'

import 'antd/dist/antd.css';

const { Content } = Layout

export default function App() {
    return (
        <ConnectedRouter history={routeHistory}>
            <Layout>
                <Header />
                <Layout style={{ maxWidth:'1600px', maxHeight:'820px', background: '#E0E0E0' }}>
                    <Content>
                        <Switch>
                            <Route exact path="/">
                                <Gamble />
                            </Route>
                            <Route component={NotFound} />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </ConnectedRouter>
    )
}
