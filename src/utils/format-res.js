
// export function internalServerErrror(err){
//   if(err.response && err.response.data && err.response.data.errorMessage ){
//     return{
//       status: false,
//       errorMessage: err.response.data.errorMessage
//     }
//   }

//   return {
//     status:false,
//     errorMessage:"Internal server error. Please check server"
//   }
// }

// export function succesStatus(res) {
//   return {
//     status:true,
//     data:res.data
//   }
// }