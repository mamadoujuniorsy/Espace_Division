/* eslint-disable no-unused-vars */
const backendDomain = "http://localhost:8080"
const summaryAPI = {
  signUP:{
    url:`${backendDomain}/api/signup`,
    method: "post"
  },
  signIN:{
    url:`${backendDomain}/api/signin`,
    method: "post"
  },
  current_user:{
    url:`${backendDomain}/api/user-details`,
    method: "get"
  },
  logout_user:{
    url:`${backendDomain}/api/userLogout`,
    method: "get"
  },
  get_products:{
    url:`${backendDomain}/api/products`,
    method: "get"
  },
  search_products: {
    url: `${backendDomain}/api/products/search`,
    method: "get",
  },
}

export default summaryAPI