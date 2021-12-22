import { configureStore } from "@reduxjs/toolkit";
import predictionSlice from "./slices/predictionSlice/predictionSlice";

export default configureStore({
    reducer: {
        predictions: predictionSlice
    }
});