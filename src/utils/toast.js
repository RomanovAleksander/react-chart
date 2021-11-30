import { toast } from 'react-toastify';

export const showToast = (message, type) => {
  toast[`${type}`](message, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
