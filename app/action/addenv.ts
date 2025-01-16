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
export const getenv=async(projid:string)=>{
    try{
        console.log("getenvs")
        const env=await prisma.env.findMany({
            where:{
                projectId:projid
            },select:{
                id:true,
                variiable:true,
                projectId:true
            }
        })
        console.log(env)
        return env;
    }
    catch(error){
        console.error('Failed to get ENVS:', error)
        return {
        success: false,
        error: 'Failed to get ENVS. Please try again.'
    }
}
}
export const delenv=async(envid:string)=>{
    try{
        const del=await prisma.env.delete({
            where:{
                id:envid
            }
        })
        console.log(del);
        
    }
    catch(error){
        console.error('Failed to delete ENV:', error)
        return {
        success: false,
        error: 'Failed to delete ENV. Please try again.'
    }
}}