import Swal from 'sweetalert2';

export function successAlert(title: string, text: string) {
  Swal.fire({
    icon: 'success',
    title,
    text,
  });
}

export function errorAlert(title: string, text: string) {
  Swal.fire({
    icon: 'error',
    title,
    text,
  });
}
