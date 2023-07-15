import {configureStore} from '@reduxjs/toolkit' 
import userDetail from '../features/UserDetailSlice'

export const store = configureStore({
    reducer:{
        //key name is app 
      app: userDetail
    },
  });
