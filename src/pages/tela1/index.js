import React, {useState, useEffect} from 'react';
import Edit from '../../assets/edit.png';
import HomeImg1 from '../../assets/home-img1.png';
import HomeImg2 from '../../assets/img2.png';
import { useNavigate } from 'react-router-dom';
import { FiLogOut, FiUser } from "react-icons/fi";
import ModalMentorInformacoes from '../../components/ModalMentorInformacoes';
import ModalMentorado from '../../components/ModalMentorado';
import ModalMentor from '../../components/ModalMentor';
import './principal.css';


function  Principal (){
  const navigate = useNavigate();
  // abrir modal de mentor selecionado
  const [modal, setModal] = useState(false);  
  const [infor, setInfo] = useState('')
  function selecionarMentor(id){
    setInfo(id)
    setModal(true)
  }
  // pegar oque esta salva na localStorage
  const name = localStorage.getItem('user-info')
  let nomeCompleto = JSON.parse(name)

  // buscar todos mentores cadastrados
  const [mentores, setMentores] = useState([]);
  useEffect(()=> {
     fetch("https://backend-technicalshare.herokuapp.com/users/mentores")
    .then(res => res.json())
    .then(
      (result) => {
        if(result.length){
          setMentores(result)
          abrirModal()

        }
        
      },
    )
  }, [])
  // buscar mentores por habilidades
  const [mentoresHabilidades, setMentoresHabilidades] = useState([]);
    function habilidades(val){
     let habilidade = val.target.value
  fetch(`https://backend-technicalshare.herokuapp.com/users/buscar/${habilidade}`)
  .then(res => res.json())
  .then(
    (result) => {
      // tracar para ocutar img e mostrar lista de mentores
      if(result.length){
        var img = document.getElementsByClassName('image-principal')[0]
        img.style.display = 'none'
        var card = document.getElementsByClassName('card-habilidade')[0]
        card.style.display = 'block'
        setMentoresHabilidades(result)
      } else{
        var img2 = document.getElementsByClassName('image-principal')[0]
        img2.style.display = 'block'
        var card2 = document.getElementsByClassName('card-habilidade')[0]
        card2.style.display = 'none'
      }
      
    },
  )
}
// sair no login
function sair(){
  navigate('/login');
  localStorage.removeItem('user-info')
}

// abrir modal de mentor e mentorados
const [modalMentorado, setModalMentorado] = useState(false);
const [modalMentor, setModalMentor] = useState(false);
function abrirModal(){
  if(nomeCompleto.usuario.mentor){
    setModalMentor(true)
    var parteMentor = document.getElementsByClassName('parte-mentor')[0]
    parteMentor.style.display='block'
  } else{
    setModalMentorado(true)
    var parteMentorado = document.getElementsByClassName('parte-mentorado')[0]
    parteMentorado.style.display='block'
  }
}
return(
  <>
  
    <div className="container">
      <header className="centralizar__principal">
        <section>
          <div className="topo__cabecalho">
            <h1>Share<br/><strong>Orange+</strong></h1>
            <FiLogOut className="logout" onClick={sair}/>       
          </div>
          <div className="fundo__cabecalho">
            <div className="img-perfil">
              <FiUser  className="foto-perfil-principal"/>
            </div>
            <img className="edit" src={Edit} alt="imagem1" />
            
            <h2>Olá {nomeCompleto.usuario.nome}, bem vindo!</h2>
          </div>
        </section>
      </header>

      <main className="centralizar__conteudo">  
        <section className="principal">
          <div className="parte-mentorado">
          <div className="apresentacao__perfil">
            <h2>Encontre seu próximo mentor</h2>
            <p>Hoje é um dia perfeito para o seu crescimento profissional</p>
          </div>
          <div className="buscar">
            <input type="text" placeholder="Qual experiência você quer ter hoje?" onChange={habilidades}  />
            <div className="image-principal">
            <img  className="home__img1" src={HomeImg1} alt="imagem1" />
            </div>
            <div className="card-habilidade" > 
            <ul className="container-card">
           {mentoresHabilidades.map(mentorHabilidade => ( 
             <li className="carreiras__imgs" key={mentorHabilidade._id} onClick={() => selecionarMentor(mentorHabilidade)} >
                <FiUser  className="foto-perfil"/>
               {mentorHabilidade.nome}
             </li>
         ))}
        </ul>
        </div>
        </div>
          </div>
          <div className="parte-mentor">
          <div className="apresentacao__perfil">
            <h2>Compartilhe seu conhecimento</h2>
            <p>Ajude outros profissionais a crescerem em suas carreiras</p>
          </div>
          <div className="buscar">
            <div className="image-principal">
            <img  className="home__img1" src={HomeImg2} alt="imagem1" />
            </div>
        </div>
          </div>
          <div className="principal__fundo">
            <h3>Veja quem visualizou seu perfil</h3>
            <div className="carreiras">
              <p>Front-end</p>
              <div className="container-card" >
              <ul className="container-card" >
              {mentores.map(produto => ( 
             <li className="carreiras__imgs" key={produto._id} onClick={() => selecionarMentor(produto)} >
               <FiUser  className="foto-perfil"/>
               {produto.nome}
             </li>
         ))}
        </ul>
        </div>
              <p>Carreira</p>
              <div className="container-card" >
              <ul className="container-card">
              {mentores.map(produto => ( 
             <li className="carreiras__imgs" key={produto._id} onClick={() => selecionarMentor(produto)} >
               <FiUser  className="foto-perfil"/>
               {produto.nome}
             </li>
         ))}
        </ul>
              </div>
            </div>
          </div>
        </section>
        <div className="clear"></div>
      </main> 
      <div className="centralizar-footer">  
        <footer></footer>
      </div>  
    </div>  
    <ModalMentorInformacoes modal={modal} infor={infor} setModal={setModal} />
    <ModalMentorado
          modalMentorado={modalMentorado}
          setModalMentorado={setModalMentorado}
        />
        <ModalMentor
          modalMentor={modalMentor}
          setModalMentor={setModalMentor}
        />
    
  </>
)
}
export default Principal;
