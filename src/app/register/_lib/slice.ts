import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import Cookies from "js-cookie";

export interface RegisterResponse {
  firstname?: string;
  lastname?: string;
  username?: string;
  email?: string;
}

export interface RegisterRequest {
  firstname?: string;
  lastname?: string;
  username?: string;
  email?: string;
  password?: string;
}

export interface ErrorResponse {
  detail: string;
}

export const register = createAsyncThunk<
  RegisterResponse,
  RegisterRequest,
  {
    rejectValue: ErrorResponse;
  }
>("register", async (registerRequestBody: RegisterRequest, thunkAPI) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/register`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerRequestBody),
    }
  );
  if (response.status === 200) {
    return thunkAPI.fulfillWithValue(await response.json());
  }
  return thunkAPI.rejectWithValue(await response.json());
});

export interface RegisterState {
  firstname: string | undefined;
  lastname: string | undefined;
  username: string | undefined;
  email: string | undefined;
  password: string | undefined;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | undefined;
}

const RegisterInitialState = {
  firstname: undefined,
  lastname: undefined,
  username: undefined,
  email: undefined,
  password: undefined,
  loading: "idle",
  error: undefined,
} as Partial<RegisterState>;

export const registerSlice = createSlice({
  name: "registerSlice",
  initialState: RegisterInitialState,
  reducers: {
    updateFirstname: (state, action) => {
      state.firstname = action.payload;
    },
    updateLastname: (state, action) => {
      state.lastname = action.payload;
    },
    updateUsername: (state, action) => {
      state.username = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = "succeeded";
      // state.accessToken = action.payload.access_token
      // state.refreshToken = action.payload.refresh_token
      // Cookies.set("accessToken", action.payload.access_token!, {secure: true, sameSite: 'Strict', expires: 1/24});
      // Cookies.set("refreshToken", action.payload.refresh_token!, {secure: true, sameSite: 'Strict', expires: 180});
    });
    builder.addCase(register.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload?.detail;
    });
    // builder.addCase(google.pending, (state, action) => {
    //     state.loading = 'pending'
    // })
    // builder.addCase(google.fulfilled, (state, action) => {
    //         state.loading = 'succeeded';
    //         state.accessToken = action.payload.access_token;
    //         state.refreshToken = action.payload.refresh_token;
    //         Cookies.set("accessToken", action.payload.access_token!, {secure: true, sameSite: 'Strict', expires: 1/24});
    //         Cookies.set("refreshToken", action.payload.refresh_token!, {secure: true, sameSite: 'Strict', expires: 180});
    // });
    // builder.addCase(google.rejected, (state, action) => {
    //         state.loading = 'failed'
    //         state.error = action.payload?.detail
    // })
    // builder.addCase(linkedin.pending, (state, action) => {
    //     state.loading = 'pending'
    // })
    // builder.addCase(linkedin.fulfilled, (state, action) => {
    //         state.loading = 'succeeded';
    //         state.accessToken = action.payload.access_token;
    //         state.refreshToken = action.payload.refresh_token;
    //         Cookies.set("accessToken", action.payload.access_token!, {secure: true, sameSite: 'Strict', expires: 1/24});
    //         Cookies.set("refreshToken", action.payload.refresh_token!, {secure: true, sameSite: 'Strict', expires: 180});
    // });
    // builder.addCase(linkedin.rejected, (state, action) => {
    //         state.loading = 'failed'
    //         state.error = action.payload?.detail
    // })
  },
});

export const {
  updateFirstname,
  updateLastname,
  updateUsername,
  updateEmail,
  updatePassword,
} = registerSlice.actions;

export default registerSlice.reducer;
