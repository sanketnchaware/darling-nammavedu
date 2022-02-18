import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from "../contexts/AppContext";
import axios from "axios";

export const Header = () => {
    const { handleSn, token, handleData } = useContext(AppContext)
    // console.log("header", token)
    const [search, setSearch] = useState('')
    console.log('search:', search)

    useEffect(() => {
        getSearchData();
    }, [search])


    const getSearchData = async () => {
        // https://demo-api.nasj.io/search?term=Chicken
        const res = await axios.get(`https://demo-api.nasj.io/search?term=${search}`, {
            headers: {
                'x-auth-token': `${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        handleData(res.data.data.items);
    }

    return (
        <div>
            <div>
                <div className=" flex flex-col  bg-red-700 h-56 rounded-b-md">
                    <img className="w-1/2 h-13 mx-auto my-4" src="https://darling-nammavedu.scube.me/assets/img/logo.svg" alt="" />
                    <div className="flex place-items-center border m-2 rounded-xl border-white">
                        <svg className="ml-2" _ngcontent-serverApp-c2="" height="18.361" viewBox="0 0 18.36 18.361" width="18.36" xmlns="http://www.w3.org/2000/svg"><g _ngcontent-serverApp-c2="" id="search" transform="translate(0.75 0.75)"><circle _ngcontent-serverApp-c2="" cx="7" cy="7" data-name="Ellipse 412" fill="none" id="Ellipse_412" r="7" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></circle><line _ngcontent-serverApp-c2="" data-name="Line 196" fill="none" id="Line_196" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(12.792 12.792)" x1="3.758" y1="3.758"></line></g></svg>
                        <input
                            onChange={(e) => {
                                setSearch(e.target.value)
                                handleSn(e.target.value.length)
                            
                            }}
                            placeholder="Search for the food item" className="bg-transparent text-white p-2 w-96 rounded-xl mx-auto  placeholder:text-white focus:outline-none" type="text" />
                        {/* <img src="" alt="" /> */}
                    </div>
                </div>

            </div>
        </div>
    )
}
