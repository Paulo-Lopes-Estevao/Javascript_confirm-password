/**
 *@event keyup
 *
 * pass 
 */
ConfirmPassword(e)
{
    const confirm = $event.target.value;

    let passe = [{ pass: this.password }];
    
    var der = passe.filter(function (data) {
    
        return data.pass.includes(confirm);
    
    });
    
    console.log(der.length);
}