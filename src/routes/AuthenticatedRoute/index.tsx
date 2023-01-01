import React, {
    Fragment,
    useEffect,
    useState,
} from "react";


interface AuthenticatedProps {
    isAuthenticatedRoute: React.ReactNode
    isNotAuthenticatedRoute: React.ReactNode
}


const AuthenticatedRoute: React.FC<AuthenticatedProps> = ({
            isAuthenticatedRoute,
            isNotAuthenticatedRoute,
        }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(():void => {
        const tokenKey = process.env.TOKEN_KEY ? process.env.TOKEN_KEY : "TOKEN_KEY"
        const token: string | null = localStorage.getItem(tokenKey)

        if (token) {
            setIsAuthenticated(true)
        } else {
            setIsAuthenticated(false)
        }
    }, [])

    return (
        <Fragment>
            { isAuthenticated && (isAuthenticatedRoute) } 
            { !isAuthenticated && (isNotAuthenticatedRoute) } 
        </Fragment>
    )
}


export default AuthenticatedRoute
