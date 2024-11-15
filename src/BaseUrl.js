// export const baseurl="https://dilannazartsbackendtest-production-8988.up.railway.app"


export const baseurl = "https://honesthome-backend-6d8f37871a1b.herokuapp.com";


// export const baseurl="http://localhost:5000"

import axios from "axios";

// export const baseurl="https://boatrentalbackendgit-production.up.railway.app/api"


export const apiHandle = axios.create({
    baseURL: `${baseurl}`,
  });