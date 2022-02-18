import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios";
import { MenuList } from "./MenuList";
import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

export const Category = () => {
    const { sn, handleToken } = useContext(AppContext)
    const [token, setToken] = useState("");
    const [category, setCategory] = useState("");
    const [itemList, setItemList] = useState([]);
    const [flag, setFlag] = useState(false);


    const handleClick = async (ex) => {
        const res = await axios.get(`https://demo-api.nasj.io/menus?category_id=${ex}`, {
            headers: {
                'x-auth-token': `${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        setItemList(res.data.data.items)
        setFlag(true);
    }


    // console.log('category:', category)

    useEffect(() => {
        getToken();
    }, [])

    useEffect(() => {
        getCategory();
    }, [token])

    const getToken = async () => {
        axios.post("https://demo-api.nasj.io/token/O72Ebw1ro3")
            .then(res => {
                setToken(res.data.token);
                handleToken(res.data.token);
            })
            .catch(err => {
                console.log("error:")
            })

    }

    const getCategory = async () => {
        axios.get('https://demo-api.nasj.io/categories', {
            headers: {
                'x-auth-token': `${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                res.data.data ? setCategory(res.data.data) : setCategory('')
            })
            .catch((error) => {
                console.error(error)
            })
    }


    return (

        <>
            <div
                className={`h-40  mt-20 overflow-x-scroll  flex flex-row w-full  ${sn > 0 ? "hidden" : "visible"}`}>
                {category &&
                    category.map((item) => {
                        return (
                            <div className="" onClick={() => {
                                handleClick(item.id)

                            }} key={item._id} className=" h-20  flex-shrink-0 p-2 mx-4 my-2 w-20  flex flex-col place-items-center text-center ">
                                <img className="w-16 hover:cursor-pointer hover:bg-red-700  rounded-xl bg-red-200 p-2 h-16" src={item.icon} alt="image" />
                                <p className="text-sm" >{item.name}</p>
                            </div>
                        )
                    })
                }
            </div>
            <MenuList className={` ${sn > 0 ? "invisible" : "visible"}`} itemList={itemList} flag={flag} />
        </>
    )
}
