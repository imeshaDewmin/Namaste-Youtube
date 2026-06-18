import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import videoReducer from "./videoSlice";
import searchReducer from "./searchSlice";

const appStore = configureStore({
    reducer: {
        app: appReducer,
        videos: videoReducer,
        search: searchReducer
    }
})

export default appStore;