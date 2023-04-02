import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'search',
    initialState:{cachedSearch:{}},
    reducers:{
       cacheResults(state, action){
        state.cachedSearch = {...state.cachedSearch, ...action.payload}
       } 
    }
})

export const {cacheResults} = searchSlice.actions
export default searchSlice.reducer