import React from 'react'
import { Header } from "./Header";
import { MenuList } from "./MenuList";
import { Category } from "./Category";


export const Home = () => {
    return (
        <div>
            <Header  />
            <Category />
            {/* <MenuList /> */}
        </div>
    )
}
