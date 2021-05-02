

## Vue

``` JS
// JavaScript Vue


/**
 *@event keyup
 *
 *@input @keyup="valuedata($event)"
 *
 *@password_conf: false
 *@password: ""
 *   
 */
ConfirmPassword($event)
{
    const pass_confirm = $event.target.value;

    let senha = [{ passe: this.password }];
    
    var confirm = senha.filter(function (data) {
    
        return data.passe.includes(pass_confirm);
    
    });
    
   der.length == 0 ? this.password_conf = true:this.password_conf = false
}

```
