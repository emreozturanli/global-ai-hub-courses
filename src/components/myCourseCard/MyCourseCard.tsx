import { IMyCourse } from "../../types/interfaces"
import myCourseStyle from './myCourseCard.module.css'
import image from '../../assets/def-img.png'
interface ICourseCardProps {
  course: IMyCourse
}

const CourseCard = (props:ICourseCardProps) => {
  const {course} = props

  return (
    <div className={myCourseStyle['card']}>
      <img className={myCourseStyle['image']} src={image} alt={course.title}  />
      <h3 className={myCourseStyle['title']}>{course.title}</h3>
      <p  className={myCourseStyle['desc']} dangerouslySetInnerHTML={{__html:course.description}}/>
    </div>
  )
}

export default CourseCard