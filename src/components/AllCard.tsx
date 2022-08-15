import axios from "axios"
import { useEffect, useState } from "react"
import { IAllCourse } from "../types/allCoursesInterfaces"
import { IExtraInfo } from "../types/extraInfoInterfaces"


interface IAllCardProps {
    course: IAllCourse
}

const AllCard = (props: IAllCardProps) => {
    const [modal, setModal] = useState<boolean>(false)
    const [extraInfo,setExtraInfo] = useState<IExtraInfo>()
    const { course } = props

    const getExtraInfo = async () =>{
        try {
            const {data} = await axios.get<IExtraInfo>(course._links["wp:featuredmedia"][0].href)
            setExtraInfo(data)
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getExtraInfo()
    },[])

  return (
    <>
    <div className="card" onClick={() => setModal(true)}>
        <img src={extraInfo?.guid.rendered} alt={course.title.rendered} />
        <h2 dangerouslySetInnerHTML={{__html:course.title.rendered}}/>
    </div>
    <div className={modal ? "modal open" : "modal"}>
        <div className="modal-content" dangerouslySetInnerHTML={{__html:course?.content.rendered}}/>
        <button
            className="close"
            onClick={() => setModal(false)}
        >&#10006;
        </button>
    </div>
</>
  )
}

export default AllCard