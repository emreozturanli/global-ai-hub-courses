import axios from 'axios'
import { useEffect, useState } from 'react'
import { IAllCourse } from '../../types/allCoursesInterfaces'
import { IExtraInfo } from '../../types/extraInfoInterfaces'
import allCourseStyle from './allCourseCard.module.css'

interface ICourseCardProps {
    course: IAllCourse
  }

const AllCourseCard = (props:ICourseCardProps) => {
    const [extraInfo,setExtraInfo] = useState<IExtraInfo>()
    const {course} = props

    const getExtraInfo = async () => {
      try {
        const {data} = await axios.get<IExtraInfo>(course._links['wp:featuredmedia'][0].href)
        setExtraInfo(data)
        console.log(data)
    }
    catch(error){
        console.log(error);
    }
    }

    useEffect(()=>{
      getExtraInfo()
    },[])
    
  return (
    <div className={allCourseStyle['card']}>
      <img className={allCourseStyle['image']} src={extraInfo?.guid.rendered}  referrerPolicy="no-referrer" alt={course.slug}  />
      <h3 className={allCourseStyle['title']} dangerouslySetInnerHTML={{__html: course.title.rendered}}/>
    </div>
  )
}

export default AllCourseCard