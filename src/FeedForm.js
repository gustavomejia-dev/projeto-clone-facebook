import zed from './Resources/zed.jpg'

import { AiFillVideoCamera, AiOutlineFileImage, AiFillMeh } from "react-icons/ai"
import { MdInsertEmoticon } from 'react-icons/md'

export default function FeedForm() {
    return(
    <div className='feed'>
            <div className='feedForm' >
            <img src={zed} ></img>
            <input type='text'placeholder='No que você está pensando?'></input>
            </div>
            <div className='feedForm'>
            <div className='iconSingle'>
                <AiFillVideoCamera></AiFillVideoCamera>
                <span>Video ao Vivo</span>
            </div>
            <div className='iconSingle img'>
                <AiOutlineFileImage></AiOutlineFileImage>
                <span>Foto/video</span>
            </div>
            <div className='iconSingle emoji'>
                <MdInsertEmoticon></MdInsertEmoticon>
                <span>Sentimento/atividade</span>
            </div>   
        </div>
        </div>
        
)}