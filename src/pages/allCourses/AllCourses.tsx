import { useContext } from "react"
import AllCourseCard from "../../components/allCourseCard/AllCourseCard"
import { AppContext } from "../../context/appContext"
import allCoursesStyle from './allCourses.module.css'

const AllCourses = () => {
  const {allCourses} = useContext(AppContext)
  return (
    <section className={allCoursesStyle['all-courses']}>
      <div className={allCoursesStyle['courses-grid']}>
        {
          allCourses?.map((e)=> <AllCourseCard key={e.id} course={e}/>)
        }
      </div>
    </section>
  )
}

export default AllCourses