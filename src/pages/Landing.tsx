import{ ReactElement } from "react";
import {Link} from 'react-router-dom'

export default function LandingPage():ReactElement{

    const routeToApp = () => {

    }
    return(
        <div className="">
            <p className="text-white">This is our landing page</p>

            <a><Link to={"/App"} className="text-white"> Go To App :)</Link></a>
            <br/>
            <a><Link to={"/Dashboard"} className="text-white">Go To Dashboard</Link></a>
        </div>
    )
}