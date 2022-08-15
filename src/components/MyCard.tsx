import { IMyCourse } from "../types/interfaces"

interface IMyCardProps {
    course: IMyCourse
}

const MyCard = (props:IMyCardProps) => {
    const {course} = props
  return (
    <div className="card">
        <img src={course.card_image} alt={course.title} />
        <h2>{course.title}</h2>
    </div>
  )
}

export default MyCard