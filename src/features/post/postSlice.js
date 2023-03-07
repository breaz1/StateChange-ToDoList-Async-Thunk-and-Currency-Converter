import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'
// https://jsonplaceholder.typicode.com/posts

const initialState = {
    posts:[],    
}

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (_,{ rejectWithValue, dispatch }) => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            dispatch(setPosts(res.data))
    }
)


export const deletePostById = createAsyncThunk(
    'posts/deletePostById', async(id, {rejectWithValue, dispatch})=>{
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        dispatch(deletePost(id))
    }
)

export const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        setPosts:(state, action) =>{
            state.posts = action.payload
        },
        deletePost:(state,action)=>{
            state.posts = state.posts.filter(post=>post.id !== action.payload)
        }
    },
    extraReducers:{
        [getPosts.fulfilled]:()=> console.log('get:fullfiled'),
        [getPosts.pending]:()=> console.log('get:pending'),
        [getPosts.rejected]:()=> console.log('get:rejected'),
        [deletePostById.fulfilled]:()=> console.log('delete:fullfiled'),
        [deletePostById.pending]:()=> console.log('delete:pending'),
        [deletePostById.rejected]:()=> console.log('delete:rejected'),
    }
})

export const { setPosts, deletePost} =postSlice.actions
export default postSlice.reducer