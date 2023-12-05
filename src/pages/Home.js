import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { dataPerfis } from "../common/data";
import { Modal, Button } from "react-bootstrap";
const perfis = dataPerfis;

const Perfil = ({ nome, profissao, foto, showResume }) => (
   <div className="perfil-container col-md-2 mb-4 mt-3 mx-2">
      <img src={foto} alt={`Foto do Perfil ${nome}`} className="foto"/>
      <div className="info">
         <h4 onClick={() => showResume(nome)} style={{cursor:"pointer"}}>{nome}</h4>
         <h5>{profissao}</h5>
      </div>
   </div>
);



function Home() {

   const [showModal, setShowModal] = useState(false)
   const [selectedProfile, setSelectedProfile] = useState(null)

   const handleClose = () => {
      setShowModal(false)
      setSelectedProfile(null)
   }

   const showResume = (nome) => {
      const profile = perfis.find((perfil) => perfil.nome === nome);
      setSelectedProfile(profile)
      setShowModal(true)
   }
   

   return (
      <div className="container mt-5">
         <h1 className="text-center mb-4"></h1>

         <div className="row">
            {perfis.map((perfil, index) => (
               <Perfil key={index} {...perfil} showResume={showResume}/>
            ))}
            <Modal show={showModal} onHide={handleClose}>
               {console.log('chegou ate aqui')}
               <Modal.Header closeButton>
                  <Modal.Title>{selectedProfile?.nome}</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  <h4>{selectedProfile?.profissao}</h4>
                  <h5>Formação</h5>
                  <p>PUC Minas, conclusão em Janeiro de 2022</p>
                  <h5>Ocupação Atual</h5>
                  <p>Colabroador na Empresa Exp</p>
                  <h5>Descrição das atividades</h5>
                  <p>
                  Atualmente, estou imersa em uma rotina profissional que envolve uma série de responsabilidades e tarefas. Meu a dia consiste em gerenciar projetos, colaborar com colegas de equipe, analisar dados e tomar decisões estratégicas para alcançar metas estabelecidas. Além disso, me dedica a desenvolver habilidades, acompanhar tendências do mercado e buscar soluções inovadoras para os desafios enfrentados no ambiente de trabalho.
                  </p>
               </Modal.Body>
               <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                     Fechar
                  </Button>
               </Modal.Footer>
            </Modal>
         </div>
      </div>
   );
}

export default Home;
