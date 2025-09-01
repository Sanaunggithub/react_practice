// store = A store holds the whole state tree of the application.
//         It holds the current state and lets you dispatch actions to change it.


import {configureStore} from '@reduxjs/toolkit'
import userReducer from './user'

export const store = configureStore({
    reducer:{
       user: userReducer // you can give the name anything
    },
})