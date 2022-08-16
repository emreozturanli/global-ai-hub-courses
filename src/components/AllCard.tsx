import axios from "axios"
import { useEffect, useState } from "react"
import { IAllCourse } from "../types/allCoursesInterfaces"
import { IExtraInfo } from "../types/extraInfoInterfaces"
import spinner from "../assets/spinner.gif"

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
        <img className={extraInfo?.guid.rendered === undefined ? 'gif': ''}
        src={ extraInfo?.guid.rendered !== undefined ? extraInfo?.guid.rendered : spinner} 
        alt={course.title.rendered} 
        />
        <h2 dangerouslySetInnerHTML={{__html:course.title.rendered}}/>
    </div>
    <div className={modal ? "modal open" : "modal"}>
        <div className="modal-content" >
        <img src={ extraInfo?.guid.rendered} alt={course.title.rendered} />
        <h2 dangerouslySetInnerHTML={{__html:course.title.rendered}}/>
        <p>Her pazarlama faaliyetinin gerçek bir tüketici içgörüsüne dayandırma gerekliliği, pazarlama ve iletişim dünyasının son 220 yıldır üzerinde en çok durduğu konulardan biri.  Bu “insan gerçeği” asla sadece rakamsal bilgi ve bulgular biçiminde olmamalıdır.Bilgi ve bulgular önemlidir ancak çoğunlukla kategorinin tüm markalarının elinde aynı bilgiler mevcuttur ve haliyle buradan yola çıkarak farklılaşma alanı bulmak zordur.  “İnsan gerçeğine” ulaşmak, tüketmeye sevk eden ancak tamamıyla keşfedilmemiş derin etkenlerin keşfi ile başlar.Akan Abdula “Büyük Veriden İçgörü Bulma” başlıklı sunumuyla büyük veri dünyasından başlayarak, içgörü bulmanın inceliklerini anlatacak.</p>
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

export default AllCard