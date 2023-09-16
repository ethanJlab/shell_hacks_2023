import{ ReactElement } from "react";
import {Link} from 'react-router-dom'

export default function LandingPage():ReactElement{

    const routeToApp = () => {

    }
    return(
        <div>
            <p>This is our landing page</p>

            <a><Link to={"/App"}> Go To App :)</Link></a>
            <br/>
            <a><Link to={"/Dashboard"}>Go To Dashboard</Link></a>
        </div>
    )
}