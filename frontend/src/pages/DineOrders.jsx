import { useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import { useState } from "react";
import DineOrdersBar from "../components/DineOrdersBar";

const DineOrders = () => {
    const { dineCart, user, products, currency } = useAppContext()
    const [dineCartArray, setDineCartArray] = useState([])
    
        const getDineCart = () => {
        let tempArray = []
        for(const key in dineCart){
          const product = products.find( (item)=> item._id === key)
          product.quantity = dineCart[key]
          tempArray.push(product)
        }
        setDineCartArray(tempArray)
        // console.log(dineCartArray)
      }
      useEffect(()=> {
        getDineCart()
      }, [dineCart, products])

    return (
      <div>
          <div className="flex-1 pb-10 flex flex-col justify-between">
            <div className="w-full md:p-10 p-4">
                <h2 className="pb-4 text-lg font-medium">All Products</h2>
                <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
                    <table className="md:table-auto table-fixed w-full overflow-hidden">
                        <thead className="text-gray-900 text-sm text-left">
                            <tr>
                                <th className="px-4 py-3 font-semibold">Product</th>
                                <th className="px-4 py-3 font-semibold hidden md:block">Category</th>
                                <th className="px-4 py-3 font-semibold ">Price</th>
                                <th className="px-4 py-3 font-semibold">Quantity</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-800">
                            {dineCartArray.map((product, index) => (
                                <tr key={index} className="border-t border-gray-500/20">
                                    <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                                        <div className="border border-gray-300 rounded p-2">
                                            <img src={`${import.meta.env.VITE_BACKEND_URL}/products/${product.image}`} alt="Product" className="w-16" />
                                        </div>
                                        <span className="truncate max-sm:hidden w-full">{product.name}</span>
                                    </td>
                                    <td className="px-4 py-3">{product.category}</td>
                                    <td className="px-4 py-3 max-sm:hidden">{currency} {product.price * product.quantity}</td>
                                    <td className="px-4 py-3 max-sm:hidden"> {product.quantity}</td>
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div> 
        <DineOrdersBar/>
      </div>
    );
};
export default DineOrders

{/* <td className="px-4 py-3">
    <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
        <input type="checkbox" className="sr-only peer" defaultChecked={product.inStock} />
        <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"></div>
        <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
    </label>
</td> */}