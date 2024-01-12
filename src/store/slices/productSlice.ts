import { URL } from "@/constants/";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface ApiError {
  message: string;
  error: string;
  statusCode: number;
}

interface ProductItem {
  title: string
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  cb: (event: React.MouseEvent<HTMLButtonElement>) => void
}

interface ProductState {
  productsAll: ProductItem[];
  favorites: ProductItem[];
  loading: boolean;
  error: null | ApiError;
}

const initialState: ProductState = {
  productsAll: [],
  favorites: [],
  loading: false,
  error: null,
};

export const getProducts = createAsyncThunk(
  "@@/products",
  async (_, { rejectWithValue }) => {
    const res = await fetch(URL.products);
    const data = await res.json();
    if (!res.ok) {
      return rejectWithValue(data);
    }
    return data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    reset: (state) => {
      state.favorites = [];
    },
    addProduct: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.favorites = state.favorites.filter(
        (product) => product.id !== action.payload
      );
    
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productsAll = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as ApiError;
      });
  },
});


export const {  addProduct, removeProduct, reset } = productsSlice.actions;
export default productsSlice.reducer;
