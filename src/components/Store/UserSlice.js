import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fakeUserData = {
    id: 1,
    user: 'john_doe',
    email: 'john.doe@example.com',
  };

  
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async(userCredential) => {
        localStorage.setItem('user', JSON.stringify(fakeUserData))
        return fakeUserData;
    }
)
const userSlice = createSlice ({
    name: 'user',
    logeado: false,
    initialState: {
        loading: false,
        user: null,
        error: null,
    },
    extraReducers: (builder)=>{
        builder.addCase(loginUser.pending, (state)=>{
            state.loading = true
            state.user = null
            state.error = null
            state.logeado = false
        })
        .addCase(loginUser.fulfilled, (state, action)=>{
            state.loading = false
            state.user = action.payload
            state.error = null
            state.logeado = true
        })
        .addCase(loginUser.rejected, (state, action)=>{
            state.loading = false
            state.user = null
            state.logeado = false
            console.log(action.error.message)
            if (action.error.message === 'Request failed with status code 401') {
                state.error = 'Acces Denied! Invalid Credentials';
            } else {
                state.error = action.error.message
            }
        })

    }
});

export default userSlice.reducer;