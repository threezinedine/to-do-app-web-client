import React from 'react'

import Sidebar from './Sidebar'
import Header from './Header'
import styles from './layouts.module.scss'


interface Props {
    children: React.ReactNode
}

const Wrapper: React.FC<Props> = ({
            children,
        }) => {
    return (
        <div>
            <Header/>
            <Sidebar>
                { children }
            </Sidebar>
        </div>
    ) 
}


const HeaderOnly: React.FC<Props> = ({
            children
        }) => {
    return (
        <div>
            <Header/>
            { children }
        </div>
    )
}


export {
    Wrapper,
    HeaderOnly,
}
