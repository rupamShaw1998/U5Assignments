import { useContext, useState } from "react";

export const LoginContext = useContext();

export const LoginContextProvider = ({children}) => {
    const [isAuth, setAuth] = useState(false);

    const handleLogin = () => {
        setAuth(true);
    };
    return (
        <LoginContext.provider value={{isAuth, handleLogin}}>
            {children}
        </LoginContext.provider>
    );
};