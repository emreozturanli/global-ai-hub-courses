import { useContext } from "react"
import MyCard from "../components/MyCard"
import { AppContext } from "../context/appContext"


const MyCourses = () => {
    const { myCourses } = useContext(AppContext)
    return (
        <main>
            <div className="grid">
                {
                    myCourses?.map((course)=> course.id !==112568 && <MyCard key={course.id} course={course}/>)
                }
            </div>
        </main>
    )
}

export default MyCourses