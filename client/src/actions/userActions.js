import axios from 'axios';
export const registerUser = (user)=> async dispatch=>{
    dispatch({type: 'USER_REGISTER_REQUEST'})

    try {
       const response = await axios.post('/api/users/register' , user)
       console.log(response);
       dispatch({type:'USER_REGISTER_SUCCESS'})
    } catch (error) {
        dispatch({type:'USER_REGISTER_FAILED', payload: error})
    }
}

export const loginUser=(user)=> async dispatch=>{


    dispatch({type:'USER_LOGIN_REQUEST'})
    try {
        const response = await axios.post('/api/users/login', user)
        console.log(response);
        dispatch({type:'USER_LOGIN_SUCCESS', payload: response.data})
        localStorage.setItem('currentUser' , JSON.stringify(response.data))
        window.location.href='/'
    } catch (error) {
            dispatch({type:'USER_LOGIN_FAILED',payload:error})       
    }
  
}
 
 
 export const logoutUser = ()=>dispatch=>{
 
    
        localStorage.removeItem('currentUser')
        localStorage.removeItem('cartItems')
 
        dispatch({type : 'USER_LOGOUT'})
 
        window.location.href='/login'
 
 
 }
 
 export const getAllUsers =()=> async dispatch=>{

    dispatch({ type: 'GET_USERS_REQUEST'})

    try {
        const response = await axios.get('/api/users/getallusers')
        console.log(response);
        dispatch({ type:'GET_USERS_SUCCESS', payload: response.data})
   
    } catch (error) {
        dispatch({type:'GET_USERS_FAILED' , payload: error})
    }
}

export const deleteUser = (userid)=> async dispatch =>{
    try {
        await axios.post('/api/users/deleteuser',{userid})
        alert('User deleted successfully')
        window.location.reload()
    } catch (error) {
        alert('Something went wrong')
        console.log(error);
    }
}
 
//  export const updateUser=(userid , updateduser)=>dispatch=>{
 
 
//     dispatch({type:'USER_UPDATE_REQUEST'})
 
//    axios
//      .post("/api/users/update" , {userid : userid , updateduser : updateduser})
//      .then(res => {
//         dispatch({type:'USER_UPDATE_SUCCESS'})
 
//         console.log(res);
//         window.location.reload();
 
//      })
//      .catch(err => {
//         dispatch({type:'USER_UPDATE_FAILED' , payload : err})
//         console.log(err);
 
//      });
 
//  }
 
 
 
//  export const getAllUsers=()=>dispatch=>{
 
 
//      dispatch({type:'GET_ALLUSERS_REQUEST'})
 
//      axios.get('/api/users/getallusers').then(res=>{
 
//        dispatch({type:'GET_ALLUSERS_SUCCESS' , payload : res.data})
 
 
//      }).catch(err=>{
//        dispatch({type:'GET_ALLUSERS_FAILED' , payload : err})
 
//      })
  
 
//  }
 
//  export const deleteUser=(userid)=>dispatch=>{
 
 
//     dispatch({type:'DELETE_USER_REQUEST'})
 
//     axios.post('/api/users/deleteuser' , {userid}).then(res=>{
 
//       dispatch({type:'DELETE_USER_SUCCESS' , payload : res.data})
//       alert('User deleted successfully')
//       window.location.reload()
 
 
//     }).catch(err=>{
//       dispatch({type:'DELETE_USER_FAILED' , payload : err})
 
//     })
 
 
//  }
 
 
