const { createSlice } = require("@reduxjs/toolkit");

const searchSlice = createSlice({
    name: "Search",
    initialState: {
        searchResults: [],
        cache: {}
    },
    reducers: {
        cacheResults: (state, action) => {
            state.cache = {
                ...state.cache,
                ...action.payload
            };
        },
        setSearchResults: (state, action) => {
            state.searchResults = action.payload;
        }
    }
})

export const { cacheResults, setSearchResults } = searchSlice.actions;

export default searchSlice.reducer;