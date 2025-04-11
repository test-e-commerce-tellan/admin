import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "../../../service/api";
import { Coupon } from "../../../types/Coupon";

interface CouponsState {
  coupons: Coupon[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CouponsState = {
  coupons: [],
  status: "idle",
  error: null,
};

export const fetchCoupons = createAsyncThunk<
  Coupon[],
  void,
  { rejectValue: string }
>("marketting/fetchCoupons", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get("/marketing/coupons");
    return response.data as Coupon[];
  } catch (err: any) {
    return rejectWithValue(
      err.response?.data?.message || "Failed to fetch coupons"
    );
  }
});

const couponsSlice = createSlice({
  name: "coupons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoupons.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        fetchCoupons.fulfilled,
        (state, action: PayloadAction<Coupon[]>) => {
          state.status = "succeeded";
          state.coupons = action.payload;
        }
      )
      .addCase(fetchCoupons.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to fetch coupons";
      });
  },
});

export default couponsSlice.reducer;
