function buscar(){
    var logradouro = document.getElementById("campoLogradouro");
    var bairro = document.getElementById("campoBairro");
    var cidade = document.getElementById("campoCidade");
    var estado = document.getElementById("inlineFormSelectStat");
    var destino = document.getElementById("inlineFormSelectDest");
    var turno = document.getElementById("inlineFormSelectPref");

    if(logradouro.value =="")
        alert("Logradouro não informado");
    
    if(bairro.value =="")
        alert("bairro não informado");
    
    if(cidade.value =="")
        alert("Cidade não informado");

    if(estado.value =="")
        alert("Estado não informado");
    
    if(destino.value =="Selecione...")
        alert("Destino não informado");
    
    if(turno.value =="Selecione...")
        alert("Turno não informado");
}


function validaAcesso(){
    
    var email = document.getElementById("campoEmail").value;
    var password = document.getElementById("campoSenha").value;
  
    const options = {
        method: 'GET',
        cache: "default"
      }

    if(email.value =="")
      alert("E-mail não informado");
  
    if(password.value =="")
        alert("Senha não informada");
   
    else{
    
      var valida = false;

          fetch('https://567e7c88-b106-4865-ab9e-5057b7b5480b-00-dm76cyfs1da4.riker.replit.dev/autenticacao')
          .then(response => response.json())
          .then(data => {

              for (var j = 0; j < data.length; j++) {
       
                if(data[j].email == email){
             
                  if(data[j].password == password){
                    valida = true;
                    window.location.href = "/TelaInicial/Vanconnect/inicial/paginainicial.html"; // COLOCAR O LINK PARA A PÁGINA INICIAL
                  }
                }
              }
    
              if(valida == false){
                alert("Dados inválidos");
              }

            })
          .catch(error => console.error('Erro:', error)); 

          

          
          
    }

    
  
    
}


   

    