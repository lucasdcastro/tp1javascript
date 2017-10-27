var forca = function(){
    var erros = '';
    var acertos = '';
    var palavras = ['mochila', 'bananada', 'papibaquigrafo'];
    var inicia = function(){
        //Como colocar conteudo em um html de id
        window.document.getElementById('acertos').innerHTML = acertos.length;
        window.document.getElementById('erros').innerHTML = erros;
        var palavraSorteada = palavras[0];
        var lacunas = '';
        for(var i=0; i< palavraSorteada.length; i++){
            lacunas += ' _ ';
        }
        window.document.getElementById('palavra').innerHTML = lacunas;
    };
    var verificaLetra = function(){
    };
    return{
        erros : erros,
        acertos: acertos,
        inicia: inicia,
        verificaLetra: verificaLetra
    };
}
var partida = new forca();
partida.inicia();