import user from "../models/user.js";



export function createUser(req,res){
    const user = new user(req.body)

}