import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../service/api";
import { ImageUploadResponse } from "../../../types/ImageUploadResponse";

interface UploadState {
  images: string[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: UploadState = {
  images: [],
  status: "idle",
  error: null,
};

export const uploadImages = createAsyncThunk<
  string[],
  File[],
  { rejectValue: string }
>("upload/uploadImages", async (files, thunkAPI) => {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append("files", file);
  });

  try {
    const res = await axios.post<ImageUploadResponse>(
      "/storage/upload",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    return res.data.images;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(
      err?.response?.data?.message || "Upload failed"
    );
  }
});

const uploadSlice = createSlice({
  name: "upload",
  initialState,
  reducers: {
    resetUploadState: (state) => {
      state.images = [];
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadImages.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(uploadImages.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.images = action.payload;
      })
      .addCase(uploadImages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Upload failed";
      });
  },
});

export const { resetUploadState } = uploadSlice.actions;
export default uploadSlice.reducer;
