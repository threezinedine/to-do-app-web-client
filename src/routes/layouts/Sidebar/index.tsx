import React from "react"
import styles from './Sidebar.module.scss'


interface Props {
    children: React.ReactNode
}


const Sidebar: React.FC<Props> = ({
            children,
        }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.sidebar}>Sidebar</div>
            <div className={styles.mainPage}>
                {children}
            </div>
        </div>
    )
}


export default Sidebar
