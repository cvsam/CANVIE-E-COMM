import { Link } from "react-router-dom"
import { Page404 } from "../assets"    

const NotFound = () => (
    <div className="flex justify-center items-center min-h-screen w-full">
        <div className="flex flex-col justify-center items-center">
            <img src={ Page404 } alt="page not found" className="w-1/3 sm:w-1/3"/>
            <Link to="/" className="mt-5 hover:underline hover:text-blue-800 text-2xl xl:text-3xl">
                Go back to Home
            </Link>
        </div>
    </div>
)

export default NotFound