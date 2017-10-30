//inicio 
var forca = function(){
    var erros = '';
    var acertos = '';
    var lacunas='';
    var palavraSorteada='';
    var palavras = ['mochila', 'bananada', 'papibaquigrafo'];
    //inicia o jogo
    var inicia = function(){
        //Como colocar conteudo em um html de id
        
        exibeHTML('acertos', this.acertos.length);
        exibeHTML('erros', this.erros.length);
      
        //sorteando palavras aleatorias do array palavras[]
        palavraSorteada = this.palavras[Math.floor((Math.random() * palavras.length))];
        this.lacunas = '';
        for(var i=0; i< palavraSorteada.length; i++){
            this.lacunas += '_ ';
        }
        exibeHTML('palavra',this.lacunas);
          document.onkeypress = (evt) => {
             evt = evt || window.event;
             var charCode = evt.keyCode || evt.which;
             var charStr = String.fromCharCode(charCode);
             this.verificaLetra(charStr);
        };
        //window.document.getElementById('palavra').innerHTML = lacunas;
    };
    var verificaLetra = function(c){
        //variavel com o valor da palavra sorteada
        var valor = palavraSorteada.indexOf(c);
        
        if(valor == -1){
            adicionaErro(c);
        }
        else{
            adicionaAcerto(c);
        }
        
        atualizaLacuna(c);
        
        //se a letra na palavra sorteada
        //adicionaacerto
        //senao
        //adicionaerro
        console.log(c);
    };
    var adicionaAcerto = function(c){
        var valor = acertos.indexOf(c);
        if (valor == -1) {
             adicionaNovoAcerto(c);
        }
      
        
        //se letra ja esta em acerto
        //nao faz nada
        //senao
        //adicionaNovoAcerto
    };
    var adicionaErro = function(c){
        var valor = erros.indexOf(c);
        if(valor == -1){
            adicionaNovoErro(c);
        }
        //adiciona letra ao atributo acertos
    };
    var adicionaNovoAcerto = function(c){
        var acertos = acertos + c;  
    };
    var adicionaNovoErro = function(c){
        var erros = erros + c;
    };
    var atualizaLacuna = function(){};
    var exibeHTML = function(a,b){
        document.getElementById(a).innerHTML = b;
    }
    
    return{
        lacunas : lacunas,
        erros : erros,
        acertos: acertos,
        palavras : palavras,
        inicia: inicia,
        verificaLetra: verificaLetra
    };
}
window.onload = function(){
    var partida = new forca();
    //document.getElementById('novoJogo').addEventListener("click", inicia);
    partida.inicia();

}
