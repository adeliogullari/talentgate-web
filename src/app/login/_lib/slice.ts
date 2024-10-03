import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";


export interface LoginResponseBody {
    access_token?: string;
    refresh_token?: string;
}

export interface LoginRequestBody {
    email?: string;
    password?: string;
}

export interface GoogleRequestBody {
    token?: string | null | undefined;
}

export interface ErrorResponse {
    detail: string;
}

export const login = createAsyncThunk<
    LoginResponseBody,
    LoginRequestBody,
    {
        rejectValue: ErrorResponse
    }
>(
    'login',
    async(loginRequestBody: LoginRequestBody, thunkAPI) => {
        const response = await fetch('http://localhost:8000/api/v1/auth/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(loginRequestBody)
        })
        if (response.status === 200) {
            return thunkAPI.fulfillWithValue((await response.json()))
        }
        return thunkAPI.rejectWithValue((await response.json()))
    }
)

export const google = createAsyncThunk<
    LoginResponseBody,
    GoogleRequestBody,
    {
        rejectValue: ErrorResponse
    }
>(
    'google',
    async(googleRequestBody: GoogleRequestBody, thunkAPI) => {
        const response = await fetch('http://localhost:8000/api/v1/auth/google', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(googleRequestBody)
        })
        if (response.status === 200) {
            return thunkAPI.fulfillWithValue((await response.json()))
        }
        return thunkAPI.rejectWithValue((await response.json()))
    }
)

export interface LoginState {
    email: string | undefined
    password: string | undefined
    accessToken: string | undefined
    refreshToken: string | undefined
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
    error: string | undefined
}

const LoginInitialState = {
    email: undefined,
    password: undefined,
    accessToken: undefined,
    refreshToken: undefined,
    loading: 'idle',
    error: undefined
} as Partial<LoginState>

export const loginSlice = createSlice({name: 'loginSlice', initialState: LoginInitialState, reducers: {
    updateEmail: (state, action) => {
        state.email = action.payload;
    },
    updatePassword: (state, action) => {
        state.password = action.payload;
    },
    updateAccessToken: (state, action) => {
        state.accessToken = action.payload
    },
    updateRefreshToken: (state, action) => {
        state.refreshToken = action.payload
    },
},
extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
        state.loading = 'pending'
    })
    builder.addCase(login.fulfilled, (state, action) => {
        state.loading = 'succeeded'
        state.accessToken = action.payload.access_token
        state.refreshToken = action.payload.refresh_token
        Cookies.set("accessToken", action.payload.access_token!)
        Cookies.set("refreshToken", action.payload.refresh_token!)
    })
    builder.addCase(login.rejected, (state, action) => {
        state.loading = 'failed'
        state.error = action.payload?.detail
    })
            // Handle fulfilled state for Google login
        builder.addCase(google.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.accessToken = action.payload.access_token;
            state.refreshToken = action.payload.refresh_token;
            Cookies.set("accessToken", action.payload.access_token!);
            Cookies.set("refreshToken", action.payload.refresh_token!);
        });
}})

export const {updateEmail, updatePassword, updateAccessToken, updateRefreshToken} = loginSlice.actions

export default loginSlice.reducer