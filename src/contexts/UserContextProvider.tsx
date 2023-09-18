import React, {createContext, useContext} from "react";
import {avatar} from "../assets";

interface UserContext {
    firstName: string
    lastName: string
    position: string
    email: string
    image: string
    id: number
}

const UserCtx = createContext<UserContext | null>(null)


export const UserContextProvider = ({children}: { children: React.ReactNode }) => {
    const user = {
        firstName: 'Jane',
        lastName: 'Doe',
        position: 'Designer',
        email: 'janedoe@mail.com',
        image: avatar,
        id: 100
    }

    return (
        <UserCtx.Provider value={{
            ...user
        }}>
            {children}
        </UserCtx.Provider>
    )
}

export const useUserContext = () => {
    const userContext = useContext(UserCtx)

    if (!userContext) {
        throw new Error(
            "UserContext has to be used within <UserContext.Provider>"
        );
    }

    return userContext
}
