import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "../../../service/api";
import { Order, OrderFilters } from "./orderTypes";
import { LoadingState, LoadingStatus } from "../../../types/LoadingStatus";

interface OrderState {
  orders: Order[];
  status: LoadingStatus;
  error: string | null;
}

const initialState: OrderState = {
  orders: [],
  status: LoadingState.Idle,
  error: null,
};

export const fetchOrders = createAsyncThunk<
  Order[],
  OrderFilters,
  { rejectValue: string }
>("orders/fetchOrders", async (filters, { rejectWithValue }) => {
  try {
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined) {
        params.append(key, value);
      }
    });

    const response = await axios.get(`/admin/orders?${params.toString()}`);
    return response.data;
  } catch (err: any) {
    return rejectWithValue(
      err.response?.data?.message || "Failed to fetch orders"
    );
  }
});

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        fetchOrders.fulfilled,
        (state, action: PayloadAction<Order[]>) => {
          state.status = "succeeded";
          state.orders = action.payload;
        }
      )
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = LoadingState.Loading;
        state.error = action.payload || "Failed to fetch orders";
      });
  },
});

export default orderSlice.reducer;
