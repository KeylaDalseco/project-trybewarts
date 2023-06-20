// Requisito 3 - criando alert.
const validateForm = () => {
  const inputData = document.querySelector('.trybewarts-login');

  inputData.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    if (email === 'tryber@teste.com' && senha === '123456') {
      console.log(alert('Olá, Tryber!'));
    } else {
      console.log(alert('Email ou senha inválidos.'));
    }
  });
};
validateForm();

// Requisito 18 - Habilitando o botão "Enviar" após a validação do checkbox.
// Finalizado o projeto.
const desabilitarBotao = document.getElementById('submit-btn');
desabilitarBotao.disabled = true;

document.getElementById('agreement').addEventListener('click', () => {
  const checkbox = document.getElementById('agreement').value;
  if (!checkbox) {
    desabilitarBotao.disabled = true;
  } else {
    desabilitarBotao.disabled = false;
  }
});
