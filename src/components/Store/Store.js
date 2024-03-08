import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";

// Configure Redux store with userReducer as the root reducer
export const store = configureStore ({
    reducer: {
        user: userReducer
    }
});