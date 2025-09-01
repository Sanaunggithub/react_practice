// useDispatch = hook that is used to modify the value of the state

import { useDispatch } from 'react-redux';
import {login, logout} from './user'

function Login() {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() =>{
                dispatch(login({
                    name:"san",
                    age:24,
                    email: "wilbersanaung@gmail.com"}))
                }}
                >Login
            </button>

            <button onClick={() =>{
                dispatch(logout())
            }}>
                logout
            </button>

        </div>
    );
}

export default Login;