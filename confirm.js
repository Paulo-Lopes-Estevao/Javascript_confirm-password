function ConfirmPassword() {

    id_confirm = document.getElementById("confirm").value
    
    id_senha = document.getElementById("senha").value

    cl_error = document.querySelectorAll("span")[3]

    let senha = [{ passe: id_senha }]

    var confirm = senha.filter(function(value){

        return value.passe.includes(id_confirm)
    
    })
    
    confirm.length == 0 ? cl_error.style.display="block" : cl_error.style.display="none"

}