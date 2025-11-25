// src/store/passportSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type PassportData = {
  fullName: string;
  passportNumber: string;
  nationality: string;
  expiryDate: string; // ISO date string, e.g. "2026-08-01"
  purpose: string;
  photo: File | null;
  document: File | null;
};

export type SubmitResult = {
  message: string;
  data: PassportData;
};

type PassportState = {
  data: PassportData;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  submittedResult?: SubmitResult | null;
};

const initialState: PassportState = {
  data: {
    fullName: "",
    passportNumber: "",
    nationality: "",
    expiryDate: "",
    purpose: "",
    photo: null,
    document: null,
  },
  status: "idle",
  error: null,
  submittedResult: null,
};

/**
 * submitPassport thunk
 * - returns SubmitResult on success
 * - rejects with a string message on failure
 */
export const submitPassport = createAsyncThunk<
  SubmitResult, // return type of the fulfilled action
  PassportData, // type of the first thunk argument (payload)
  { rejectValue: string } // thunkAPI.rejectWithValue type
>("passport/submit", async (payload: PassportData, { rejectWithValue }) => {
  try {
    await new Promise((r) => setTimeout(r, 700)); // simulate latency
    // TODO: replace with real fetch/axios with FormData
    return { message: "Passport submitted successfully", data: payload };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return rejectWithValue(msg || "Submit failed");
  }
});

const passportSlice = createSlice({
  name: "passport",
  initialState,
  reducers: {
    update(state, action: PayloadAction<Partial<PassportData>>) {
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
      .addCase(submitPassport.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(submitPassport.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.submittedResult = action.payload;
      })
      .addCase(submitPassport.rejected, (state, action) => {
        state.status = "failed";
        // action.payload is typed as string | undefined because of rejectValue
        state.error = action.payload ?? action.error.message ?? "Failed";
      });
  },
});

export const { update, reset } = passportSlice.actions;
export default passportSlice.reducer;
