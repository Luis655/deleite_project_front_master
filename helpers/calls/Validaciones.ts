export class validaciones {
    constructor() { }

      FormValidate(type: string, input: string, error: string){
        const nombreP = document.getElementById(input) as HTMLInputElement;
        const nombrePmessage = document.getElementById(error) as HTMLDivElement;
        const labeMessage = document.createElement('label');
        labeMessage.id ="label" + input;
        const namediv = document.getElementById("label" + input)
        nombreP.className = 'form-control is-valid';

        namediv?.remove();
        switch (type) {
            case 'email':
                const emailRegex = /^\S+@\S+\.\S+$/;
                const email = nombreP.value.trim();
                if(!emailRegex.test(email)){
                    nombreP.className = 'form-control is-invalid';
                    labeMessage.textContent ='Agrega un email valido';
                    nombrePmessage?.appendChild(labeMessage);
                    nombreP.focus();
                    return false;
                }
                return true;
                break;
                case 'input':
                    if (nombreP.value == '') {
                        nombreP.className = 'form-control is-invalid';
                        labeMessage.textContent ='el valor no puede estar vacio';
                        nombrePmessage?.appendChild(labeMessage);
                        return false;
                    }else if(nombreP.value.length < 5){
                        nombreP.className = 'form-control is-invalid';
                        labeMessage.textContent ='el valor tiene que contener mas de 5 letras';
                        nombrePmessage?.appendChild(labeMessage);
                        return false;
                    }else if(nombreP.value=='N/A'){
                        nombreP.className = 'form-control is-invalid';
                        labeMessage.textContent ='no puedes asignar valores vacios';
                        nombrePmessage?.appendChild(labeMessage);
                        return false;
                    }
                    return true;
                break;
                case 'file':
                const image = document.querySelector("#"+input) as HTMLInputElement;
                if (image.files?.length === 0){
                    nombreP.className = 'form-control is-invalid';
                    labeMessage.textContent ='el valor no puede ser null';
                    nombrePmessage?.appendChild(labeMessage);
                    return false;
                }
                return true;
                
                break;
                case 'select':
                    if (nombreP.value == 'N/A') {
                        nombreP.className = 'form-control is-invalid';
                        labeMessage.textContent ='No puedes seleccionar ese valor';
                        nombrePmessage?.appendChild(labeMessage);
                    return false;
                    }
                    return true;
                break;
                case 'inputNumber':
                    const valor = nombreP.value;

                    // Verificamos si el valor solo contiene números
                    //nombreP.addEventListener('change', (event)=>{

                    if (!valor.match(/^[0-9]+$/)) {

                      nombreP.className = 'form-control is-invalid';
                      labeMessage.textContent ='solo se aceptan numeros';
                      nombrePmessage?.appendChild(labeMessage);
                      return false;
                    }else if(valor == ''){

                        nombreP.className = 'form-control is-invalid';
                        labeMessage.textContent ='asigna un valor numerico valido';
                        nombrePmessage?.appendChild(labeMessage);
                        return false;
                    }
                //})

                     return true;
                break;
            default:
                return false;
                break;
        }
    }
}