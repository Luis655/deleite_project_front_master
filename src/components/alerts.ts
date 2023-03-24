import Swal from 'sweetalert2';

export function swalAlert(type: string, text: string) {
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
        default:
            break;
    }
}