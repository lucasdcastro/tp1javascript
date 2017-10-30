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
        
        //window.document.getElementById('palavra').innerHTML = lacunas;
    };
    var exibeHTML = function(a,b){
        document.getElementById(a).innerHTML = b;
    }
    var verificaLetra = function(){
        
    };
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
