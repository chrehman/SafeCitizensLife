import { configureStore } from '@reduxjs/toolkit'

import loginReducer from './Slices/Login/loginSlice'

export default configureStore({
    reducer: {
        login: loginReducer,
    },
})