// reducer = A reducer is a function that specifies how the state should change 
//           in response to an action. It takes two arguments: (state, action)
//           and returns the new state.

// action = An action is a plain JavaScript object that describes what happened.
//          It must have a 'type' field, and it can optionally include a 'payload'.

// payload = Payload is the data that you send with an action.
//           It's used by the reducer to update the state.



import { createSlice } from '@reduxjs/toolkit';

const initialValue = {name: "", age: 0, email: ""}

export const userSlice = createSlice({
    name: "user",
    initialState: {value: initialValue},
    reducers:{
        login: (state, action) => {
            state.value = action.payload
        },

        logout: (state) =>{
            state.value = initialValue
        }
    }
})

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;

