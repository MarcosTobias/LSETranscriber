import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiFetchPrediction from "../../../api/apiFetchPrediction";

export const fetchPrediction = createAsyncThunk("/predict", async(photo) => {
    return await apiFetchPrediction(photo);

});

const initialState = {
    status : "idle",
    error: null,
    prediction: []
}

export const predictionSlice = createSlice({
    name: "predictions",
    initialState,
    reducers: {
        addSpace: (state) => {
            state.prediction = state.prediction.concat(' ');
        }
    },
    extraReducers: {
        [fetchPrediction.pending]: (state) => {
            state.status = "loading";
        },
        [fetchPrediction.fulfilled]: (state, action) => {
            state.status = "succeeded";

            if(action.payload.msg !== "error")
                state.prediction = state.prediction.concat(action.payload.prediction);
        },
        [fetchPrediction.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        }
    }
});

export default predictionSlice.reducer;

export const { addSpace } = predictionSlice.actions;