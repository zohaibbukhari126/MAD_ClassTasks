import axios from "axios";

//API may be expired so please use your own api key Respected Sir
export default axios.create({
    baseURL:"https://api.yelp.com/v3/businesses",
    headers:{
        Authorization:"Bearer 9hnFiT4Ka0UCX_Qy8kNIkHAlL0lkzELgHC7za0GLiGxnx00F3dLjRkImqMIzPDkQpbn6MBAviTExa_t9yG9n8hchv0sXzqXzdvLcYFSJkjZ48JboFVQIDp-TEg8VZ3Yx",
        //API may be expired so please use your own api key Respected Sir
    }
});

