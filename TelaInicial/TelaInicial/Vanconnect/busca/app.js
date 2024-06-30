

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

    else{
      fetch('https://my-json-server.typicode.com/brunacpereira/van-connect/consulta')
          .then(response => response.json())
          .then(data => {


            })
          .catch(error => console.error('Erro:', error)); 
    }
}


function validaAcesso(){
    
    var email = document.getElementById("campoEmail").value;
    var senha = document.getElementById("campoSenha").value;
  
    const options = {
        method: 'GET',
        cache: "default"
      }

    if(email.value =="")
      alert("E-mail não informado");
  
    if(senha.value =="")
        alert("Senha não informada");
   
    else{
    
      var valida = false;

          fetch('https://my-json-server.typicode.com/brunacpereira/van-connect/autenticacao')
          .then(response => response.json())
          .then(data => {

              for (var j = 0; j < data.length; j++) {
       
                if(data[j].email == email){
             
                  if(data[j].senha == senha){
                    valida = true;
                    window.location.href = "https://www.google.com"; // COLOCAR O LINK PARA A PÁGINA INICIAL
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


   

    