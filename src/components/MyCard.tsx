import { useState } from "react"
import { IMyCourse } from "../types/interfaces"

interface IMyCardProps {
    course: IMyCourse
}

const MyCard = (props: IMyCardProps) => {
    const [modal, setModal] = useState<boolean>(false)
    const { course } = props
    console.log(modal)
    return (
        <>
            <div className="card" onClick={() => setModal(true)}>
                <img src={course.card_image} alt={course.title} />
                <h2>{course.title}</h2>
            </div>
            <div className={modal ? "modal open" : "modal"}>
                <div className="modal-content">
                    <img src={course.card_image} alt={course.title} />
                    <h2>{course.title}</h2>
                    <p dangerouslySetInnerHTML={{ __html: course.description }} />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatem atque dolor minus nam, ipsa necessitatibus odio a perferendis beatae quas excepturi minima ducimus quaerat, aut veniam quod tempora. Repellendus cupiditate perspiciatis adipisci delectus reiciendis quae voluptatem facere, eveniet corporis, vero dolorum ad saepe animi atque cumque recusandae exercitationem nemo.</p>
                </div>
                <button
                    className="close"
                    onClick={() => setModal(false)}
                >&#10006;
                </button>
            </div>
        </>
    )
}

export default MyCard