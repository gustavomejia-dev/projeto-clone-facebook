import zed from './Resources/zed.jpg'

export default function FeedPost(props){

    return (
        <div className='feedPosts'>
                <div className='feedPostSingle'>
                <div className='feedPost__profile'>
                    <img src={zed}></img>
                    <h3>{props.nome}<br/>
                    <span>{props.horario}</span></h3>
                </div>

                <div className='feedPost__content'>
                    <p>{props.conteudo}</p>
                    <img src={props.img}></img>
                </div>

                
                </div>

            </div>

    )

}       
     