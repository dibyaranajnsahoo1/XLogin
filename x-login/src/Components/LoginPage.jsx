import React,{useState} from "react";


const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [massage, setMassage] = useState("")
    const [welcome, setWelcome] = useState(false)





    const handleClick = (e)=>{
        e.preventDefault();
        if(username=="user" && password=="password"){
            setMassage('Welcome, user')
            setWelcome(true)
        }else{
            setMassage('Invalid username or password')
            setWelcome(false)
        }

    }

    return(
       <div>
        {/* style={{display:"flex", flexDirection:"column"}} */}
       
        
        <h1>Login page</h1>
        {welcome ? massage : 
                        <div style={{display:'flex', flexDirection:'column'}}>
                            {massage}
                            <form onSubmit={handleClick}>
                                        <div>
                                        <label htmlFor="username">Username:</label>
                                        <input
                                            type="text"
                                            id="username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            required
                                        />
                                        </div>
                                        <div>
                                        <label htmlFor="password">Password:</label>
                                        <input
                                            type="password"
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                        </div>
                                        <button type="submit">Submit</button>
                                    </form>
                        </div> 
        

        }
        
        
       </div>
    )

}
export default Login;