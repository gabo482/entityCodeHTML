const url = "json/productDetail.json";
var inputElement;
var inputConvertToUnicode;
var material ='';
//myInputConvertToUnicode

    fetch(url).then((response) => response.json()).then((json) => {
        console.log(json); 
        console.log(json.data[0].vMaterialName); 
        material=json.data[0].vMaterialName;                      
     });



  function setInputValue() {
    
    inputConvertToUnicode= document.getElementById("convert");
    inputElement = document.getElementById("myInput");
    inputElement.value = material;
    const tempElement = document.createElement('div');
    tempElement.innerHTML = material;
    textoComEntitiesConvertidas = tempElement.innerText || '';
    //inputConvertToUnicode.value = convertEntitiesToUnicode("&aacute;");
    //inputConvertToUnicode.value = convertEntitiesToUnicode("&#38;");
    inputConvertToUnicode.value = textoComEntitiesConvertidas;
    console.log(material);  
  }

  function clearInputValue() {
    inputElement.value = '';
    inputConvertToUnicode.value = '';
  }
/*
  function converterEntidades() {
        // Obtém o texto inserido pelo usuário
        const texto = document.getElementById('texto').value;
        
        // Cria um elemento HTML temporário para converter as entidades
        const tempElement = document.createElement('div');
        tempElement.innerHTML = texto;
        
        // Obtém o texto com as entidades convertidas em seus caracteres equivalentes
        const textoComEntitiesConvertidas = tempElement.innerText || '';
        
        // Exibe o resultado na div abaixo da caixa de texto
        document.getElementById('resultado').innerHTML = textoComEntitiesConvertidas;
 }
*/