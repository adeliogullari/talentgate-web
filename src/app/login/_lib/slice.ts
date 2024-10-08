import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";


export interface LoginResponse {
    access_token?: string;
    refresh_token?: string;
}

export interface LoginRequest {
    email?: string;
    password?: string;
}

export interface GoogleResponse {
    access_token?: string;
    refresh_token?: string;
}

export interface GoogleRequest {
    token?: string | null | undefined;
}

export interface LinkedinResponse {
    access_token?: string;
    refresh_token?: string;
}

export interface LinkedinRequest {
    token?: string | null | undefined;
}

export interface ErrorResponse {
    detail: string;
}

export const login = createAsyncThunk<
    LoginResponse,
    LoginRequest,
    {
        rejectValue: ErrorResponse
    }
>(
    'login',
    async(loginRequestBody: LoginRequest, thunkAPI) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/login`, {
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
    GoogleResponse,
    GoogleRequest,
    {
        rejectValue: ErrorResponse
    }
>(
    'google',
    async(googleRequestBody: GoogleRequest, thunkAPI) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/google`, {
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

export const linkedin = createAsyncThunk<
    LinkedinResponse,
    LinkedinRequest,
    {
        rejectValue: ErrorResponse
    }
>(
    'linkedin',
    async(linkedinRequestBody: LinkedinRequest, thunkAPI) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/linkedin`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(linkedinRequestBody)
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
        Cookies.set("accessToken", action.payload.access_token!, {secure: true, sameSite: 'Strict', expires: 1/24});
        Cookies.set("refreshToken", action.payload.refresh_token!, {secure: true, sameSite: 'Strict', expires: 180});
    })
    builder.addCase(login.rejected, (state, action) => {
        state.loading = 'failed'
        state.error = action.payload?.detail
    })
    builder.addCase(google.pending, (state, action) => {
        state.loading = 'pending'
    })
    builder.addCase(google.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.accessToken = action.payload.access_token;
            state.refreshToken = action.payload.refresh_token;
            Cookies.set("accessToken", action.payload.access_token!, {secure: true, sameSite: 'Strict', expires: 1/24});
            Cookies.set("refreshToken", action.payload.refresh_token!, {secure: true, sameSite: 'Strict', expires: 180});
    });
    builder.addCase(google.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload?.detail
    })
    builder.addCase(linkedin.pending, (state, action) => {
        state.loading = 'pending'
    })
    builder.addCase(linkedin.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.accessToken = action.payload.access_token;
            state.refreshToken = action.payload.refresh_token;
            Cookies.set("accessToken", action.payload.access_token!, {secure: true, sameSite: 'Strict', expires: 1/24});
            Cookies.set("refreshToken", action.payload.refresh_token!, {secure: true, sameSite: 'Strict', expires: 180});
    });
    builder.addCase(linkedin.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload?.detail
    })
}})

export const {updateEmail, updatePassword, updateAccessToken, updateRefreshToken} = loginSlice.actions

export default loginSlice.reducer