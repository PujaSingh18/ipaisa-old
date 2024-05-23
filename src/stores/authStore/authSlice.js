import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginApi } from "./authApi";



export const login = createAsyncThunk('login', async payload => {

    const response = await loginApi(payload);
    console.log(response,"This is response")
    return response;

});


const initialState = {
    authData : [{}],
    loading : false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.authData = action.payload;
                state.loading = false;
            })
            .addCase(login.rejected, (state) => {
                state.loading = false;
            });
    }
    });
export default authSlice.reducer;