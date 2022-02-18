import React from 'react'
import { useContext } from 'react'
import { AppContext } from "../contexts/AppContext";
import { Link } from "react-router-dom";
export const MenuList = ({ itemList, flag }) => {
  const { sn, data } = useContext(AppContext);
  console.log("sn", sn)
  console.log("data", data)
  // console.log("items", itemList)

  if (sn > 0 && !flag) {
    return (
      <div>
        {
          data.map((item) => {
            return (
              <div key={item._id} className="my-4 border-b-2">

                <Link to={`/details/${item._id}`}>
                  <img className="h-48 rounded-3xl w-full" src={item.image} alt="menu-image" />
                  <div className="flex justify-between m-4 " >
                    <p className="font-bold">{item.name}</p>
                    <p className="font-bold">Rs. {item.price}</p>

                  </div>

                </Link>
              </div>
            )
          })
        }
      </div>
    )
  }
  else {
    return (
      <div>
        <div className="border-b-2 flex justify-between p-4">
          <h3>Items</h3>
          <h3>{itemList.length}</h3>
        </div>
        {
          itemList.length <= 0 && flag === true || flag === false ?
            <img src="https://darling-nammavedu.scube.me/assets/icon/no-item.svg" />
            :
            itemList.map((item) => {
              return <div key={item._id} className="my-4 border-b-2">

                <Link to={`/details/${item._id}`}>
                  <img className="h-48 rounded-3xl w-full" src={item.image} alt="menu-image" />
                  <div className="flex justify-between m-4 " >
                    <p className="font-bold">{item.name}</p>
                    <p className="font-bold">Rs. {item.price}</p>

                  </div>

                </Link>
              </div>
            })


        }
      </div>
    )
  }


}
