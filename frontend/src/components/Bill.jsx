import React from 'react';
import { useAppContext } from '../context/AppContext';

const Bill = ({order}) => {
    const {setShowBill, products, currency} = useAppContext()
    // console.log(order)
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-2xl shadow-lg w-[90%] max-w-sm p-6 text-center">
        <div className="flex flex-col items-center">
          <div className="bg-green-500 rounded-full w-14 h-14 flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-1">Order Receipt</h2>
          <p className="text-gray-600 mb-4">Thank you for your order!</p>

          <hr className="border-gray-300 w-full mb-4" />

          <div className="text-left w-full space-y-1 text-sm">
            <p>
              <span className="font-semibold">Order ID:</span> {order._id }
            </p>
            <p>
              <span className="font-semibold">Name:</span> {order.name}
            </p>
            <p>
              <span className="font-semibold">Phone:</span> {order.mobile}
            </p>
            {/* <p>
              <span className="font-semibold">Guests:</span> 6
            </p> */}
          </div>

          <hr className="border-gray-300 w-full my-4" />

          <div className="w-full text-left text-sm space-y-1">
            <p className="flex justify-between">
              <span className="font-semibold">Items Ordered</span>
            </p>
            <div className='  justify-between'>
                <div>{  
                order.items.map( (item, index)=> 
                   <div key={index} className="grid grid-cols-2 justify-between">
                    <p>{item.product.name} x {item.quantity}</p>
                    <p className="flex justify-end pr-5">
                    <span>{Number(item.product.price) * Number(item.quantity)}</span>
                   </p> 
                   </div> )
            
           }</div>
                {/* <div>{  
                filteredProducts.map( (item, index)=> 
                   <p key={index} className="flex justify-end pr-5">
                    <span> {item.price} </span>
                   </p> )
           }</div> */}
            </div>
          </div>

          <hr className="border-gray-300 w-full my-4" />

          <div className="w-full text-left text-sm space-y-1">
            {/* <p className="flex justify-between">
              <span className="font-semibold">Subtotal:</span>
              <span>{currency} {order.amount}</span>
            </p> */}
            {/* <p className="flex justify-between">
              <span className="font-semibold">Tax:</span>
              <span>₹21.00</span>
            </p> */}
            <p className="flex justify-between font-semibold text-lg mt-2">
              <span>Grand Total:</span>
              <span>{currency} {order.amount}</span>
            </p>
            <p className="mt-2">
              <span className="font-semibold">Payment Method:</span> {order.paymentType}
            </p>
          </div>

          <div className="flex justify-between items-center w-full mt-6 text-sm font-medium">
            <button
              onClick={() => window.print()}
              className="text-blue-500 hover:underline"
            >
              Print Receipt
            </button>
            <button
              onClick={() => setShowBill(false)}
              className="text-red-500 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bill;
