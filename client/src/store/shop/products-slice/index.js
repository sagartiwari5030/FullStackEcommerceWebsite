// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   isLoading: false,
//   productList: [],
//   productDetails: null,
// };

// export const fetchAllFilteredProducts = createAsyncThunk(
//   "/products/fetchAllProducts",
//   async ({ filterParams, sortParams }) => {
//     console.log(fetchAllFilteredProducts, "fetchAllFilteredProducts");

//     const query = new URLSearchParams({
//       ...filterParams,
//       sortBy: sortParams,
//     });

//     const result = await axios.get(
//       `https://fullstackecommercerameshwer.onrender.com/api/shop/products/get?${query}`
//     );

//     console.log(result);

//     return result?.data;
//   }
// );

// export const fetchProductDetails = createAsyncThunk(
//   "/products/fetchProductDetails",
//   async (id) => {
//     const result = await axios.get(
//       `https://fullstackecommercerameshwer.onrender.com/api/shop/products/get/${id}`
//     );

//     return result?.data;
//   }
// );

// const shoppingProductSlice = createSlice({
//   name: "shoppingProducts",
//   initialState,
//   reducers: {
//     setProductDetails: (state) => {
//       state.productDetails = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchAllFilteredProducts.pending, (state, action) => {
//         state.isLoading = true;
//       })
//       .addCase(fetchAllFilteredProducts.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.productList = action.payload.data;
//       })
//       .addCase(fetchAllFilteredProducts.rejected, (state, action) => {
//         state.isLoading = false;
//         state.productList = [];
//       })
//       .addCase(fetchProductDetails.pending, (state, action) => {
//         state.isLoading = true;
//       })
//       .addCase(fetchProductDetails.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.productDetails = action.payload.data;
//       })
//       .addCase(fetchProductDetails.rejected, (state, action) => {
//         state.isLoading = false;
//         state.productDetails = null;
//       });
//   },
// });

// export const { setProductDetails } = shoppingProductSlice.actions;

// export default shoppingProductSlice.reducer;


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  productList: [],
  productDetails: null,
};

// ✅ Fetch All Products
export const fetchAllFilteredProducts = createAsyncThunk(
  "/products/fetchAllProducts",
  async ({ filterParams = {}, sortParams = "price-lowtohigh" }) => {
    console.log("fetchAllFilteredProducts Triggered");

    const query = new URLSearchParams({
      ...filterParams,
      sortBy: sortParams,
    });

    const result = await axios.get(
      `https://fullstackecommercerameshwer.onrender.com/api/shop/products/get?${query}`
    );

    console.log("API Response:", result?.data);
    return result?.data;
  }
);

// ✅ Fetch Single Product Details
export const fetchProductDetails = createAsyncThunk(
  "/products/fetchProductDetails",
  async (id) => {
    const result = await axios.get(
      `https://fullstackecommercerameshwer.onrender.com/api/shop/products/get/${id}`
    );

    return result?.data;
  }
);

const shoppingProductSlice = createSlice({
  name: "shoppingProducts",
  initialState,
  reducers: {
    setProductDetails: (state) => {
      state.productDetails = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllFilteredProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllFilteredProducts.fulfilled, (state, action) => {
        console.log("🔍 API Response Data:", action.payload?.data); // ✅ Debugging
        state.isLoading = false;
        state.productList = action.payload?.data || []; // ✅ Fix Data Assignment
      })
      .addCase(fetchAllFilteredProducts.rejected, (state) => {
        state.isLoading = false;
        state.productList = [];
      })
      .addCase(fetchProductDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productDetails = action.payload?.data || null;
      })
      .addCase(fetchProductDetails.rejected, (state) => {
        state.isLoading = false;
        state.productDetails = null;
      });
  },
});

export const { setProductDetails } = shoppingProductSlice.actions;
export default shoppingProductSlice.reducer;
