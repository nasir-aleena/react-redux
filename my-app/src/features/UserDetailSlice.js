import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

//add user action
export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {

    const response = await fetch("http://localhost:8080/api/post", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data)
    })

    try {
        const result = await response.json();
        return result;

    } catch (error) {
        return rejectWithValue(error);
    }
});

//get list of all user action
export const showUser = createAsyncThunk("showUser", async () => {

    const response = await fetch("http://localhost:8080/api/getAll");

    // try{
    const result = await response.json();
    return result;

    // }catch(error){
    //     return rejectWithValue(error);
    // }
});

//delete action
export const deleteUser = createAsyncThunk("deleteUser", async (id, { rejectWithValue }) => {

    const response = await fetch(`http://localhost:8080/api/deleteById/${id}`, {
        method: "DELETE"
    });

    try {
        const result = await response.json();
        console.log("Updated user response:", result); 
        return { id, result };
        // return result;

    } catch (error) {
        return rejectWithValue(error);
    }
});

//update action
export const updateUser = createAsyncThunk("updateUser", async (data, { rejectWithValue }) => {

    const response = await fetch(`http://localhost:8080/api/update/${data.id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data)
    })

    try {
        const result = await response.json();
        return result;

    } catch (error) {
        return rejectWithValue(error);
    }
});



export const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: false,
    },
    reducers: {},
    extraReducers: {
        [createUser.pending]: (state) => {
            state.loading = true;
        },
        [createUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users.push(action.payload);
        },
        [createUser.rejected]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [showUser.pending]: (state) => {
            state.loading = true;
        },
        [showUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [showUser.rejected]: (state, action) => {
            console.log("error", action.payload)
            state.error = true
        },
        [deleteUser.pending]: (state) => {
            state.loading = true;
        },
        [deleteUser.fulfilled]: (state, action) => {
            state.loading = false;

            const { id } = action.payload;
            if (id) {
                state.users = state.users.filter((ele) => ele.id !== id)

            }
            console.log("delete-action", action.payload)

        },
        [deleteUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [updateUser.pending]: (state) => {
            state.loading = true;
        },
        [updateUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = state.users.map((ele) =>
                ele.id === action.payload.id ? action.payload : ele
            )
        },
        [updateUser.rejected]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
    },

});


export default userDetail.reducer;