import { ReactElement, useState } from "react";
import { TextField,Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LandingPage(): ReactElement {
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");
  const [isLoading,setIsLoading] = useState(false);
  
  const dashNavi = useNavigate();
  

  const goDash = () => {
    

    dashNavi("/Dashboard",{state: {userID: 'myUserId'}});
  }


   const handleLogin = async () => {
    
    //do user auth check here
    //re rout to the dashboard
    
    setIsLoading(true);
    
    await setTimeout(() => {
      setIsLoading(false);
      goDash();
    },1000);


    
    
    
   }

  
  return (
    <div className="flex  justify-center items-center h-full">
      <div className="bg-neutral-900 flex flex-col w-1/2 h-1/3 justify-center items-center gap-10 p-5 rounded-xl">
        <div>
          <p className="text-[#FAF9F6] text-6xl">Login</p>
        </div>

        <div>
          <TextField label="Email"   className="bg-[#FAF9F6] rounded-xl " required color="success" value={userName} onChange={(e) => setUserName(e.target.value)} />
        </div>
        
        <div>
            <TextField label="Password" className="bg-[#FAF9F6] rounded-xl" required type="password" color="success" onChange={(e) => setUserPass(e.target.value)}/>
        </div>

        <div>
            <Button variant="contained" className="bg-[#FAF9F6]" onClick={handleLogin} disabled={isLoading}><p>{ isLoading ? "Loading..." : "Submit"}</p></Button>
        </div>

        <div>
            <a className="text-[#FAF9F6] text-2xl "  >New? Come take your first step towards financial literacy </a>
        </div>
      </div>
      {/* <p className="text-white">This is our landing page</p>

            <a><Link to={"/App"} className="text-white"> Go To App :)</Link></a>
            <br/>
            <a><Link to={"/Dashboard"} className="text-white">Go To Dashboard</Link></a> */}
    </div>
  );
}
