/**
 *  Confirmar a exclusao de um contato
 * @author Alana Daniele
 * @param id
 */

function confirmar(id){
	let resposta = confirm("Confirma a exclusão deste contato?")
	if (resposta === true){
	//	alert(id)
		window.location.href = "delete?id=" + id
	}
}