import React ,{useEffect,useReducer}from 'react';
import axios from 'axios';

const initialState={
    loading : true,
    error :  '',
    post : {}
}
const reducer =(state ,action)=>{
    switch (action.type) {
        case 'FETCH_SUCESS':
            return {
                loading: false,
                error : '',
                post : action.payload,
                
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                error : 'Something Went Wrong',
                post : {},
            }

            
        default:
            return state
    }

}

function FetchingDataWithReducer() {
    const [state, dispatch] = useReducer(reducer ,initialState)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
          .then((response)=>{
            dispatch({type:'FETCH_SUCESS', payload :response.data})
            
          })  
          .catch((error)=>{
            dispatch({type:'FETCH_ERROR'})
    
          })
    
      },[])
    
    
  return (
    <div>
        {
        state.loading ? "loading" : state.post.title
      }
      {
        state.error ? state.error: null
      }
    </div>
  )
}

export default FetchingDataWithReducer