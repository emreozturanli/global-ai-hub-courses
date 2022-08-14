import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import { IAllCourse } from "../types/allCoursesInterfaces";
import { IAppContext, IMyCourse } from "../types/interfaces";

interface AppContextProps {
    children: ReactNode
}

const myCoursesUrl : string = 'https://40060bec-d8e7-4ad2-96c2-63b9fdb4ef24.mock.pstmn.io/wp-json/ldlms/v2/my_courses'

const allCoursesUrl : string = 'https://40060bec-d8e7-4ad2-96c2-63b9fdb4ef24.mock.pstmn.io/wp-json/ldlms/v2/sfwd-courses'

export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({children}: AppContextProps) => {
    const [myCourses, setMyCourses] = useState<IMyCourse[]>([])
    const [allCourses, setAllCourses] = useState<IAllCourse[]>([])

    const getMyCourses = async () =>{
        try {
            const {data} = await axios.get<IMyCourse[]>(myCoursesUrl)
            setMyCourses(data)
            console.log(data)
        }
        catch(error){
            console.log(error);
        }
    }
    
    const getAllCourses = async () =>{
        try {
            const {data} = await axios.get<IAllCourse[]>(allCoursesUrl)
            setAllCourses(data)
            console.log(data)
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getMyCourses()
        getAllCourses()
    },[])

    return <AppContext.Provider value={{myCourses,allCourses}}>
        {children}
    </AppContext.Provider>
}