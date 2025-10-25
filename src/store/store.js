import {configureStore} from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit'


export  const Fetching = createAsyncThunk(
    'recipe/fetching',
    async(UserInp)=>{
        console.log(UserInp);
        const ApiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${UserInp}`
        let response =  await fetch(ApiUrl);
        let data  = await response.json();
        console.log(data);
        return data.meals;
    }
)

const recipeSlice =  createSlice({
    name: 'recipe',
    initialState: {
        recipeApi: null,
        loading: false,
        error: null,
        hasSearched: false,
        searchTerm: ' ',
    },
    reducers: {},

    extraReducers: (builder)=>{
        builder
        .addCase(Fetching.pending, (state)=>{
            state.loading =  true;
            state.error  = null;
        })
        .addCase(Fetching.fulfilled, (state, action)=>{
            state.loading = false;
            state.recipeApi =  action.payload;
            state.hasSearched = true;
            state.searchTerm  = action.meta.arg;
        })
        .addCase(Fetching.rejected, (state)=>{
            state.loading =  false;
            state.error = 'Something went wrong';
            state.hasSearched = true;
        })
    }
})



const Store = configureStore({
    reducer: {
        recipe : recipeSlice.reducer
    }
})

export default Store;
export const recipeAction = recipeSlice.actions;
// export {Fetching};