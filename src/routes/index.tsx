import React from "react"
import {
    createBrowserRouter,
} from 'react-router-dom'

import { 
    Wrapper,
    HeaderOnly,
} from "./layouts"
import Home from './Home'
import Admin from "./Admin"
import Login from "./Login"
import AuthenticatedRoute from "./AuthenticatedRoute"


const routes = createBrowserRouter([
    {
        path: '/',
        element: (
            <Wrapper>
                <Home />
            </Wrapper>
        )
    },
    {
        path: '/admin',
        element: (
            <AuthenticatedRoute
                isAuthenticatedRoute={(
                    <Wrapper>
                        <Admin />
                    </Wrapper>
                )}
                isNotAuthenticatedRoute={(
                    <HeaderOnly>
                        <Login />
                    </HeaderOnly>
                )}
                />
        )
    },
    {
        path: '/login',
        element: (
            <HeaderOnly>
                <Login />
            </HeaderOnly> 
        )
    }
])


export default routes
