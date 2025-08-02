import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const LoginDine = () => {

    const {setUser, user,  axios, navigate, showDineUserLogin, setShowDineUserLogin, dineCart, setDineCart } = useAppContext()

    const [state, setState] = useState("login");
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState('')

    const onSubmitHandler = async (event) => {
        try {
            event.preventDefault()
            const { data } = await axios.post(`/api/dineuser/entry`, {
                name, mobile, dineCart
            })
            if( data.success ) {
                navigate('/dine-order')
                setUser(data.user)
                console.log(user)
                setShowDineUserLogin(false)
                toast.success("Successfully Logged In")
            } else {
                toast.error(data.message)
            }
        } catch (error) {
             toast.error(error.message)
        } 
    }
    return (
        <div 
            onClick={ () => setShowDineUserLogin(false) } 
            className="fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center text-sm text-gray-600 bg-black/50">
            <form onSubmit={ onSubmitHandler } onClick={ (e) => e.stopPropagation() } className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white">
            <p className="text-2xl font-medium m-auto">
                {/* <span className="text-button">User</span> {state === "login" ? "Login" : "Sign Up"} */}
                <span className="text-button">User</span> Entry
            </p>
                <div className="w-full">
                    <p>Name</p>
                    <input onChange={(e) => setName(e.target.value)} value={name} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-blue-200" type="text" required />
                </div>
            <div className="w-full ">
                <p>Mobile</p>
                <input onChange={(e) => {
    const value = e.target.value.replace(/[^0-9-]/g, ''); // allow digits and hyphens only
    setMobile(value);
  }} value={mobile} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-blue-200" type="tel" pattern="[0-9-]*" required />
            </div>
            {/* {state === "register" ? (
                <p>
                    Already have account? <span onClick={() => setState("login")} className="text-button cursor-pointer">click here</span>
                </p>
            ) : (
                <p>
                    Create an account? <span onClick={() => setState("register")} className="text-button cursor-pointer">click here</span>
                </p>
            )} */}
            <button type="submit" className="bg-button hover:bg-blue-600 transition-all text-white w-full py-2 rounded-md cursor-pointer">
                Start Ordering
            </button>
            </form>
        </div>
    );
};
export default LoginDine