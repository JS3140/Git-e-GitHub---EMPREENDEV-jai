funçãoConversor( ) 
   
    var valorElemento = document . getElementById ( valor ) ;{
    var valor  =  valorElemento.valor ;
    var valorEmDolarNumerico = parseFloat ( valor )
    
}
    
    var valorEmReal = valorEmDolarNumerico * 5 ;{
      
      console.log("valorEmReal"); 
    
    var elementoValorConvertido = document . getElementById ("valorConvertido") 
    var valorConvertido ="O resultado em real é R$" + valorEmReal
    elementoValorConvertido . innerHTML = valorConvertido
  console.log("valor convertido")
  
    }