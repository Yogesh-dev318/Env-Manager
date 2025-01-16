"use server"
import {prisma} from "../../lib/prisma";
export const deleteproject=async(projectId:string)=>{
    try{
        const del=await prisma.project.delete({
            where: {
                id: projectId
            }
        })
        console.log(del)
    }
    catch(error){
        console.error('Failed to delete Project:', error)
        return {
        success: false,
        error: 'Failed to delete Project. Please try again.'
    }
}
}