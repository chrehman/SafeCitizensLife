import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogin: false,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState:{
        isLogin: false,
    },
    reducers: {
        login:(state,action)=>{
            console.log(action)
            return {isLogin: true,data:action.payload}
        }
    },
})

// Action creators are generated for each case reducer function
export const { login } = loginSlice.actions

export default loginSlice.reducer