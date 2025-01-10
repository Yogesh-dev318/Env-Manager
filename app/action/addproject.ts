"use server"
import {prisma} from "../../lib/prisma";
import { currentUser } from '@clerk/nextjs/server';

const addproject=async (projectname:string)=>{
    try{
        const user=await currentUser()
        console.log(user)
    if(user){
        const project=await prisma.project.create({
            data:{
                name:projectname,
                userId:user.id
            }
        })
        console.log(project)
        console.log("added project")
    }
    
    }catch(error){
        console.error('Failed to create project:', error)
        return {
        success: false,
        error: 'Failed to create project. Please try again.'
        }
    }
}
export async function getprojects(){
    try{
        const user=await currentUser();
        if(user){
            const projects=await prisma.project.findMany({
                where:{
                    userId:user?.id
                },select:{
                    id:true,
                    name:true
                }
            })
            if (Array.isArray(projects)) {
                console.log(projects)
            console.log("dssd")
              }
            
            return projects
        }
        else{
            return "Loggin First"
        }
        
    }
    catch(error){
        console.error('Failed to fetch projects:', error)
        return {
        success: false,
        error: 'Failed to fetch projects. Please try again.'
        }
    }
}
export default addproject;