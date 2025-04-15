import { createSlice } from "@reduxjs/toolkit";
import { fetchStores } from "./storeThunks";
import { LoadingStatus } from "../../../types/LoadingStatus";
import { Store } from "./storeTypes";

interface StoresState {
  stores: Store[];
  status: LoadingStatus;
  error: string | null;
}

const initialState: StoresState = {
  stores: [],
  status: "idle",
  error: null,
};

const storeSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStores.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchStores.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.stores = action.payload;
      })
      .addCase(fetchStores.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Unknown error";
      });
  },
});

export default storeSlice.reducer;
