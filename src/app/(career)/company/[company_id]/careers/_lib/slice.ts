import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface CareerJobRequest {
  company_id: string | string[];
  query_parameters?: string;
}

export interface CareerJobResponse {
  id?: number;
  title?: string;
  department?: string;
  employment_type?: string;
  job_post_deadline?: string;
  location?: {
    id?: number;
    type?: string;
    latitude?: number;
    longitude?: number;
    address?: {
      id?: number;
      unit?: string;
      street?: string;
      city?: string;
      state?: string;
      country?: string;
    };
  };
  company_id?: number;
  created_at?: string;
  updated_at?: string;
}

export interface ErrorResponse {
  detail: string;
}

export const retrieveCareerJobs = createAsyncThunk<
  CareerJobResponse[],
  CareerJobRequest,
  {
    rejectValue: ErrorResponse;
  }
>("retrieveCareerJobs", async (request, thunkAPI) => {
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/careers/companies/${request.company_id}/jobs${request.query_parameters ? "?" + request.query_parameters : ""}`,
  //   {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   }
  // );
  const response = await fetch(`http://localhost:8001/jobs${request.query_parameters ? "?" + request.query_parameters : ""}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  if (response.status === 200) {
    return thunkAPI.fulfillWithValue(await response.json());
  }
  return thunkAPI.rejectWithValue(await response.json());
});

export interface CareerJobState {
  id: number | undefined;
  title: string | undefined;
  department: string | undefined;
  employment_type: string | undefined;
  job_post_deadline: string | undefined;
  location: {
    id: number | undefined;
    type: string | undefined;
    latitude: number | undefined;
    longitude: number | undefined;
    address: {
      id: number | undefined;
      unit: string | undefined;
      street: string | undefined;
      city: string | undefined;
      state: string | undefined;
      country: string | undefined;
    };
  };
  company_id: number | undefined;
  created_at: string | undefined;
  updated_at: string | undefined;
}

export interface CareerJobsState {
  jobs: CareerJobResponse[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | undefined;
}

const CareerJobsInitialState = {
  jobs: [],
  loading: "idle",
  error: undefined,
} as Partial<CareerJobsState>;

export const careerJobsSlice = createSlice({
  name: "careerJobsSlice",
  initialState: CareerJobsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(retrieveCareerJobs.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(retrieveCareerJobs.fulfilled, (state, action) => {
      state.jobs = [...action.payload];
      state.loading = "succeeded";
    });
    builder.addCase(retrieveCareerJobs.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload?.detail;
    });
  },
});

export default careerJobsSlice.reducer;
