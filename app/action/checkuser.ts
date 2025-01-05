"use server"
import {prisma} from "../../lib/prisma";
import { currentUser } from '@clerk/nextjs/server';

const checkUser=async()=>{
    const user = await currentUser();
    console.log(user)
    if(!user){
        return null;
    }
    try{
        const loggedInuser=await prisma.user.findUnique({
            where:{
                id:user.id,
            }
        });
        if(loggedInuser){
            return loggedInuser;
        }
        const newUser = await prisma.user.create({
            data: {
              id: user.id,
              email: user.emailAddresses[0].emailAddress,
            },
          });
          return newUser;
    }
    catch(error){
        return { message: 'Database Error: Failed to register user in checkuser' };
    }
    
}
export default checkUser;