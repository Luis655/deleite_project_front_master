import Swal from 'sweetalert2';

export function swalAlert(type: string, text: string, confirmFunction?: Function) {
    switch (type) {
        case "Exito":
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Exito',
                text: text,
                showConfirmButton: false,
                timer: 1500
            })
            break;
        case "Error":
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Error',
                text: text,
                showConfirmButton: false,
                timer: 1500
            })
            break;
            case "Confirmacion":
            Swal.fire({
                title: 'Confirmar',
                text: text,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si',
                cancelButtonText: 'No', 
                timer: 6000
            }).then((result) => {
                if (result.isConfirmed && confirmFunction) {
                confirmFunction();
                }
            });
            break;
        default:
            break;
    }
}