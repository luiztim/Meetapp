import { showMessage } from 'react-native-flash-message';

export const errorMessage = function ErrorMessage(e) {
  const error = e.response;
  showMessage({
    type: 'danger',
    message:
      !!error && error.data.error
        ? `Ops! ${error.data.error}`
        : 'Ocorreu um erro. Verifique sua conexão com a internet e tente novamente',
  });
};

export const successMessage = function ErrorMessage(msg) {
  showMessage({
    type: 'success',
    message: msg,
  });
};
