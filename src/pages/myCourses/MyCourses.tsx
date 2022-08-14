import { useContext } from 'react'
import MyCourseCard from '../../components/myCourseCard/MyCourseCard'
import { AppContext } from '../../context/appContext'
import myCoursesStyle from './myCourses.module.css'

const MyCourses = () => {
  const {myCourses} = useContext(AppContext)

  return (
    <section className={myCoursesStyle['my-courses']}>
      <div className={myCoursesStyle['courses-grid']}>
        {
          myCourses?.map((e)=> e.id !== 112568 && <MyCourseCard key={e.id} course={e}/>)
        }
      </div>
    </section>
  )
}

export default MyCourses