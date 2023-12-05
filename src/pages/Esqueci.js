import React, { useState } from "react"
import "bootstrap/dist/js/bootstrap.bundle.min"
import { useNavigate } from "react-router-dom"

function Esqueci(props) {
   const [email, setEmail] = useState("");
   const [showAlert, setShowAlert] = useState(false);
   const [showModal, setShowModal] = useState(false);

   const navigate  = useNavigate()

   const handleSubmit = (event) => {
      event.preventDefault();
      if (email === "") {
         setShowAlert(true);
         setTimeout(() => {
            setShowAlert(false);
         }, 3000);
      } else {
         setShowAlert(false);
         setShowModal(true);
      }
   };

   return (
      <div class="container-fluid mt-5 d-flex justify-content-center">
         <div class="row w-50">
            <h1 class="text-center mt-5">Redefinir senha</h1>
            <p class="text-justify text-center mt-5">
               Preencha os campos apresentados abixo para podermos das inicios a
               processo de recuperaçõao de senha.
            </p>

            {showAlert && (
               <div className="alert alert-danger mt-3" role="alert">
                  <p className="text-center text-justify">Preencha o campo de e-mail</p>
               </div>
            )}

            {showModal && (
               <div
					className="modal" tabIndex="1" role="dialog" style={{ display: "block" }}
               >
                  <div className="modal-dialog modal-dialog-centered" role="document">
                     <div className="modal-content">
                        <div className="modal-header">
                           <h5 className="modal-title" id="staticBackdropLabel">Redefinir senha</h5>
                           <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                              onClick={() => setShowModal(false)}
                           >
                              <span aria-hidden="true">&times;</span>
                           </button>
                        </div>
                        <div className="modal-body">
                           <form>
                              <div class="form-group">
                                 <label for="codigo">Codigo</label>
                                 <input
                                    type="text"
                                    class="form-control"
                                    id="codigo"
                                    placeholder="!@#$%&?"
                                 />
                              </div>
                              <div class="form-group">
                                 <label for="password">Nova senha</label>
                                 <input
                                    type="password"
                                    class="form-control"
                                    id="password"
                                 />
                              </div>
                              <div class="form-group">
                                 <label for="newPassword">
                                    Confirme a senha
                                 </label>
                                 <input
                                    type="password"
                                    class="form-control"
                                    id="newPassword"
                                 />
                              </div>
                           </form>
                        </div>
                        <div className="modal-footer">
                           <button
                              type="button"
                              className="btn btn-primary"
                              data-dismiss="modal"
                              onClick={() => navigate(-1)}
                           >
                              Finalizar
                           </button>
									<button type="button" 
										className="btn btn-secondary" 
										data-dismiss="modal"
										onClick={() => setShowModal(false)}	
									>
										Cancelar
									</button>
                        </div>
                     </div>
                  </div>
               </div>
            )}

            <form onSubmit={handleSubmit}>
               <div class="form-group d-flex justify-content-center align-items-center flex-column">
                  <label for="emailText">E-mail</label>
                  <input
                     type="email"
                     class="form-control"
                     placeholder="exemplo@email.com"
                     id="emailText"
                     onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit" class="btn btn-primary mt-2">
                     Enviar
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
}

export default Esqueci;
