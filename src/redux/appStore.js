import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import videoReducer from "./videoSlice";

const appStore = configureStore({
    reducer: {
        app: appReducer,
        videos: videoReducer,
    }
})

export default appStore;