import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoryId: 0,
    pagination: 1,
    sort: {
        name: 'популярности',
        sortProperty: 'rating'
    }
};  

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload;
        },
        setSort(state, action) {
            state.sort = action.payload
        },
        setPaginationPage(state, action) {
            state.pagination = action.payload;
        },
        setFilters(state, action) {
            state.sort = action.payload.sort;
            state.categoryId = Number(action.payload.categoryId);
            state.pagination = Number(action.payload.pagination);
        }   
    }

});

export const { setCategoryId, setSort,setFilters, setPaginationPage } = filterSlice.actions;
export default filterSlice.reducer;

