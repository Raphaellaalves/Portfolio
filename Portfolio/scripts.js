document.getElementById("formulario").addEventListener("submit", function(e) {

  e.preventDefault();

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let mensagem = document.getElementById("mensagem").value;

  if(nome === "" || email === "" || mensagem === ""){
    document.getElementById("msg").innerText = "Preencha todos os campos!";
    return;
  }

  document.getElementById("msg").innerText = "Mensagem enviada com sucesso!";
});