import axios from "axios";

export default axios.create({
    baseURL:"https://api.yelp.com/v3/businesses",
    headers:{
        Authorization:"Bearer hxy3ywzwDwdoR9oSpVkIkpZ2IknzOOY1LnVSZw2RuH9Mdk6qsjydDbn6YZLGvEAGPHLwVza3pqPrF9juyjspbd4AaM1dWvpAqwLuZZPKEjR70dsXi-fC86cZ9KsPZ3Yx",

    }
});

