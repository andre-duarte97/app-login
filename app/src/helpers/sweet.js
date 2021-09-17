import swal from 'sweetalert'

export const sweet = (type, message, title) => {
    swal({
        title: title,
        text: message,
        icon: type,
        buttons: false,
        timer: 1600
    })
}