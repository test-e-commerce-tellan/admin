import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../service/api";
import { Store } from "./storeTypes";

export const fetchStores = createAsyncThunk<
  Store[],
  void,
  { rejectValue: string }
>("stores/fetchStores", async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get<Store[]>("/stores");
    return res.data;
  } catch (err: any) {
    return rejectWithValue(
      err.response?.data?.message || "Failed to fetch stores"
    );
  }
});
