import './App.css'
import  Header  from './Header'
import  Stories  from './Stories'
import  FeedForm  from './FeedForm'
import  FeedPost  from './FeedPost'



import { db } from './firebase'
import { useEffect, useState } from 'react'



function App() {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
      
      db.collection('posts').onSnapshot(snapshot=>{// atualiza os dados em tempo real sempre que houver uma mudança
        setPosts(snapshot.docs.map(function(doc){//pega as informações do banco de dados e percorre(looping) por elas
          
          return{info:doc.data()}
        }));
      });
      


    },[])
  return (
    <div className="App">
      <Header/>
      <Stories/>
      <FeedForm/>
      {
        posts.map(function(val){
          console.log(val)
          return (
              <FeedPost nome={val.info.nome} conteudo={val.info.conteudo} img={val.info.img} horario ='2h'></FeedPost>
                )
        })
    }
      
    </div>
  
  );
}

export default App;
