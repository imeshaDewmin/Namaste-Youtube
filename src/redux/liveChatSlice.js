import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "../utils/constants";

const liveChatSlice = createSlice({
    name: "LiveChat",
    initialState: {
        liveChats: []
    },
    reducers: {
        addChat: (state, action) => {
            state.liveChats.unshift(action.payload);

            if (state.liveChats.length > OFFSET_LIVE_CHAT) {
                state.liveChats.pop();
            }
        }
    }
});

export const { addChat } = liveChatSlice.actions;

export default liveChatSlice.reducer;