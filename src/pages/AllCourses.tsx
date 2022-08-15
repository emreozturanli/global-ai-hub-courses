import { useContext } from 'react'
import AllCard from '../components/AllCard'
import { AppContext } from '../context/appContext'

const AllCourses = () => {
  const { allCourses } = useContext(AppContext)
    return (
        <main>
            <div className="grid">
                {
                    allCourses?.map((course)=> <AllCard key={course.id} course={course}/>)
                }
            </div>
        </main>
    )
}

export default AllCourses