import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'search',
    initialState:{cachedSearch:{}, searchResult:[]},
    reducers:{
       cacheResults(state, action){
        state.cachedSearch = {...state.cachedSearch, ...action.payload}
       },
       updateSearchResult(state, action){
        state.searchResult = action.payload
       } 
    }
})

export const {cacheResults, updateSearchResult} = searchSlice.actions
export default searchSlice.reducer