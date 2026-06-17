import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "SearchSuggestions",
    initialState: {
        suggestions: null
    },
    reducers: {
        showSuggestions: (state, action) => {
            state.suggestions = action.payload;
        }
    }
})

export const { showSuggestions } = searchSlice.actions;

export default searchSlice.reducer;