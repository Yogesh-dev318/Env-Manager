"use client"
import { useEffect, useState } from "react"
import {getprojects} from "../action/addproject"
export const useproject = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [project,setprojects]=useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
          
            setIsLoading(true)
            const response = await getprojects()
            console.log(response)
           
            setIsLoading(false)
          }
    
        fetchProjects()
      }, [])

    return {
        isLoading,project
    }
}