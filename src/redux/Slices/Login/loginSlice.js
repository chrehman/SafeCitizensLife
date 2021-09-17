import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import { getCitizenInfo } from '../../../services/Store';


export const fetchUser = createAsyncThunk(
    "login/fetchUser",
    async (uid, thunkApi) => {

        const data = await getCitizenInfo(uid)

        console.log("THUNK", data._data);
        // thunkApi.success(data);
        return data._data;

    }
)


export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLogin: false,
        isLoading: false,
        isError: '',

    },
    reducers: {
        login: (state, action) => {
            // console.log(action)
            return { isLogin: true, data: action.payload }
        }
    },
    extraReducers: {
        [fetchUser.fulfilled]: (state, action) => {
            console.log("Action FULFILLED", action.payload)
            state.isLoading = false
        },
        [fetchUser.pending]: (state) => {
            state.isLoading = true
        },
        [fetchUser.rejected]: (state, action) => {
            state.error = "Error in api"
            state.isLoading = false
        }
    }
})

// Action creators are generated for each case reducer function
export const { login } = loginSlice.actions

export default loginSlice.reducer