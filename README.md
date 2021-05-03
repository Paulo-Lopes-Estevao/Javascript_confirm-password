# JavaScript

Fazer confirmação de password

# Faça o teste aqui
[Clica aqui](https://paulo-lopes-estevao.github.io/Javascript_confirm-password/)

#### Trago um *script* que faz de forma rápida essa confirmação

``` JS
// JavaScript

function ConfirmPassword() {

    id_confirm = document.getElementById("confirm").value
    id_senha = document.getElementById("senha").value

    let senha = [{ passe: id_senha }]

    var confirm = senha.filter(function(value){

        return value.passe.includes(id_confirm)
    
    })
    
    confirm.length == 0 ? console.log("False") : console.log("True")

}

```
