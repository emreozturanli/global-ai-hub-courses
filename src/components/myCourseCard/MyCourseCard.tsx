import { IMyCourse } from "../../types/interfaces"
import myCourseStyle from './myCourseCard.module.css'

interface ICourseCardProps {
  course: IMyCourse
}

const CourseCard = (props:ICourseCardProps) => {
  const {course} = props

  return (
    <div className={myCourseStyle['card']}>
      <img className={myCourseStyle['image']} src={course.card_image}  referrerPolicy="no-referrer" alt={course.title}  />
      <h3 className={myCourseStyle['title']}>{course.title}</h3>
      <p  className={myCourseStyle['desc']} dangerouslySetInnerHTML={{__html:course.description}}/>
    </div>
  )
}

export default CourseCard