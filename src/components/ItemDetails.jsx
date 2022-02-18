import React, { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import axios from "axios"
export const ItemDetails = () => {

    const { id } = useParams()
    console.log(id)
    const { token } = useContext(AppContext)
    const [details, setDetails] = useState({})
    const [r, setR] = useState([]);
    console.log(r)
    console.log('details:', details)



    useEffect(() => {

        getDetails()

    }, [details])

    //https://demo-api.nasj.io/menus/610b63654ade7f3fcac26e4b
    const getDetails = async () => {
        const res = await axios.get(`https://demo-api.nasj.io/menus/${id}`, {
            headers: {
                'x-auth-token': `${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        setDetails(res.data.data)
        setR(res.data.data.related)
    }
    return (
        <div className=" ">
            <div className=" h-72 w-full  m-4  relative ">

                <NavLink to="/" className=" opacity-50 hover:opacity-100  text-3xl absolute top-4 left-4 ">⬅️</NavLink>
                <img className=" rounded-3xl mb-4 h-full  w-full" src={details.image} alt="menu-image" />

                <div className="flex justify-between  mb-4 border-b-2 pb-4 border-grey-100 " >

                    <p className="font-bold">{details.name}</p>
                    <p className="font-bold">Rs.{details.price}</p>

                </div>

                <div className="">
                    <h1 className=" font-bold text-2xl">Recommended</h1>

                    {
                        r.map((item) => {
                            return (
                                <NavLink to={`/details/${item._id}`}>

                                    <div className="flex place-items-center justify-between p-4 border-2 border-grey-100 m-4 rounded-3xl">


                                        <div>
                                            <img className="rounded-3xl w-20 h-20 mb-4 " src={item.image} alt="image" />
                                        </div>
                                        <div>
                                            <p className="font-bold">{item.name}</p>
                                        </div>
                                        <div>

                                            <p className="font-bold">Rs.{item.price}</p>
                                        </div>


                                    </div>
                                </NavLink>
                            )
                        })
                    }
                </div>



            </div>












        </div >


    )
}




