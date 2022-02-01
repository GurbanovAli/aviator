import React from 'react'

import { ConnectedRouter } from 'connected-react-router'
import routeHistory from 'route-history'
import { Switch, Route } from 'react-router-dom'

import { Layout } from 'antd'
import styled from 'styled-components'
import { device, size } from "device"

import NotFound from './NotFound'
import Header from './header'
import Gamble from './gamble'

import 'antd/dist/antd.css';

const { Content } = Layout

export default function App() {

    const { innerWidth: width, innerHeight: height } = window;
    const isSize = Object.values(size);
    const setSize = isSize.find(item => item >= window.innerWidth);

    return (
        <ConnectedRouter history={routeHistory}>
            <Layout>
                <Header />
                <Layout style={{ maxWidth: setSize + 'px', maxHeight: '820px'}}>
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
