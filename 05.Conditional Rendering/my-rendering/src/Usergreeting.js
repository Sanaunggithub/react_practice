function Usergreeting(props){
    const welcome = <h2 className="welcome">Welcome {props.userName}</h2>
    const logIn = <h2 className="login">Please Log in to continue</h2>
    return(props.isLoggedIn ? welcome : logIn)
}

export default Usergreeting