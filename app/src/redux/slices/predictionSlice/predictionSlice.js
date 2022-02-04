import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiFetchPrediction from "../../../api/apiFetchPrediction";

export const fetchPrediction = createAsyncThunk("/predict", async (photo, { getState }) => {
    return await apiFetchPrediction(photo, getState().predictions.index);

});

const initialState = {
    status: "idle",
    error: null,
    prediction: ['H', 'o', 'l', 'a', ' ', 'b', 'u', 'e', 'n', 'a', 's'],
    //prediction: [],
    noHandCounter: 0,
    isRecording: false,
    index: 0
}

export const predictionSlice = createSlice({
    name: "predictions",
    initialState,
    reducers: {
        addSpace: (state) => {
            state.prediction = state.prediction.concat(' ');
            state.index = state.index + 1;
        },
        removeLetter: (state, action) => {
            state.prediction.splice(action.payload, 1);
            state.index = state.index - 1;
        },
        removePrediction: (state) => {
            state.prediction = [];
            state.index = 0;
        },
        switchRecording: (state) => {
            state.isRecording = !state.isRecording;
            state.noHandCounter = 0;
        }
    },
    extraReducers: {
        [fetchPrediction.pending]: (state) => {
            state.status = "loading";
        },
        [fetchPrediction.fulfilled]: (state, action) => {
            state.status = "succeeded";

            //If there is not a hand, we have to check if it is the first time
            if (action.payload.prediction === "No hand detected") {
                state.noHandCounter = state.noHandCounter + 1;
                //If if had happened twice, we stop recording signs
                if (state.noHandCounter === 2) {
                    state.isRecording = false;
                    state.noHandCounter = 0;
                    
                    state.prediction.splice(-1, 1);
                    state.index = state.index - 1;


                //If not, we increment the counter and consider it a blank
                } else {
                    state.noHandCounter = 1;
                    state.prediction = state.prediction.concat(' ');
                    state.index = state.index + 1;
                }

            //If detected a sign we add it to the prediction
            } else {
                let index = parseInt(action.payload.index);

                state.prediction.splice(index, 0, action.payload.prediction);

                //state.prediction = state.prediction.concat(action.payload.prediction);
                state.index = state.index + 1;
                state.noHandCounter = 0;
            }
        },
        [fetchPrediction.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        }
    }
});

export default predictionSlice.reducer;

export const { addSpace, removeLetter, removePrediction, switchRecording } = predictionSlice.actions;