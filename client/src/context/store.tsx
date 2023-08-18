'use client'

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";
import { Product } from '../app/productInterface';

interface User {
    username: string;
    uid: number;
}

type AuthType = {
    username: string;
    setUsername: Dispatch<SetStateAction<string>>
    uid: number;
    setUid: Dispatch<SetStateAction<number>>
    loggedIn: boolean;
    setLoggedIn: Dispatch<SetStateAction<boolean>>
}

const AuthContext = createContext<AuthType>({
    username: '',
    setUsername: (): string => '',
    uid: -1,
    setUid: (): number => -1,
    loggedIn: false,
    setLoggedIn: (): boolean => false,
})

export const AuthContextProvider = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    const [uid, setUid] = useState(-1);
    const [username, setUsername] = useState('');
    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <AuthContext.Provider value={{uid, setUid, username, setUsername, loggedIn, setLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext);