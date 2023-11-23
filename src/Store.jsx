import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './SliceReducer'

const store=configureStore({
    reducer:{
cart:cartSlice
    }
});
export default store;