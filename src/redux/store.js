import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";

// Register the created reducer by giving it a name
export default configureStore({
    reducer: {
        counter: counterReducer
    }
});