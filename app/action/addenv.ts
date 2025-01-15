"use server"
import {prisma} from "../../lib/prisma";
export const addenv=async(projectid:string,env:string)=>{
    try{
        const variable=await prisma.env.create({
            data:{
                variiable:env,
                projectId:projectid
            }
        })
        console.log(variable);
    }
    catch(error){
        console.error('Failed to add ENV:', error)
        return {
        success: false,
        error: 'Failed to add ENV. Please try again.'
    }
}}
export const noofenv=async(projectid:string)=>{
    try{
        console.log("sfgdfv")
        const variable = await prisma.project.findFirst({
            where: {
                id: projectid
            },
            select: {
                _count: {
                    select: {
                        envs: true
                    }
                }
            }
        });
        console.log(variable?._count.envs ?? 0)
        return variable?._count.envs ?? 0;
    }
    catch(error){
        console.error('Failed to add ENV:', error)
        return {
        success: false,
        error: 'Failed to add ENV. Please try again.'
    }
}
}