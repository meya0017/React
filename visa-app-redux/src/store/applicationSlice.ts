// src/store/applicationSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type ApplicationData = {
  fullName: string;
  passportNumber: string;
  nationality: string;
  photo: File | null;
  document: File | null;
};

export type SubmitResult = {
  message: string;
  data: ApplicationData;
};

type ApplicationState = {
  data: ApplicationData;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  submittedResult?: SubmitResult | null;
};

const initialState: ApplicationState = {
  data: {
    fullName: "",
    passportNumber: "",
    nationality: "",
    photo: null,
    document: null,
  },
  status: "idle",
  error: null,
  submittedResult: null,
};

/**
 * submitApplication thunk
 * - returns SubmitResult on success
 * - rejects with a string message on failure
 */
export const submitApplication = createAsyncThunk<
  SubmitResult, // return type of the fulfilled action
  ApplicationData, // type of the first thunk argument (payload)
  { rejectValue: string } // thunkAPI.rejectWithValue type
>(
  "application/submit",
  async (payload: ApplicationData, { rejectWithValue }) => {
    try {
      await new Promise((r) => setTimeout(r, 700)); // simulate latency
      // TODO: replace with real fetch/axios with FormData
      return { message: "Submitted successfully", data: payload };
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      return rejectWithValue(msg || "Submit failed");
    }
  }
);

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    update(state, action: PayloadAction<Partial<ApplicationData>>) {
      state.data = { ...state.data, ...action.payload };
    },
    reset(state) {
      state.data = initialState.data;
      state.status = "idle";
      state.error = null;
      state.submittedResult = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitApplication.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(submitApplication.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.submittedResult = action.payload;
      })
      .addCase(submitApplication.rejected, (state, action) => {
        state.status = "failed";
        // action.payload is typed as string | undefined because of rejectValue
        state.error = action.payload ?? action.error.message ?? "Failed";
      });
  },
});

export const { update, reset } = applicationSlice.actions;
export default applicationSlice.reducer;
