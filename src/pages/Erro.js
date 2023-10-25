import React, { useCallback } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { MdDisabledByDefault } from "react-icons/md";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Erro = () => {

	const navigate = useNavigate()

	const goHome = useCallback (() => {
		navigate('/')
	},[navigate])

	return(
		
		<div className="pt-5 d-flex justify-content-center d-flex align-items-center">
			<div className=" mt-5 text-center w-50">
				<MdDisabledByDefault size={20}/>
				<h1>Página não encontrada</h1>
				<h3>Erro 404</h3>
				<p>Pedimos desculpas pelo transtorn, no momento não podemos acessar a pagina solicitada. Retorne mais tarde.</p>
				<Button className="btn btn-secondary" onClick={goHome}>Voltar a página inicial</Button>
			</div>
		</div>
		
	)
}
export default Erro