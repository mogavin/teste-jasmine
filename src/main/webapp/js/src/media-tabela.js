/**
 * Ativa o cálculo da média de valores das linhas de uma tabela.
 * 
 * Classes de marcação necessárias:
 * calcula-media - marca a tabela-alvo  
 * parcela-media - marca os inputs das colunas que contém os valores da média 
 * resultado-media - marca o input-alvo do resultado
 *  
 */
var MediaTabela = {
		
	keyupHandler : function(){		
		var $parcelaAtual = $(this);
		var $colunaAtual = $parcelaAtual.parent();
		var $alvoMedia = $colunaAtual.parent();		
		var $colunas = $alvoMedia.find(".parcela-media");
		
		var somaParcelas = 0;
		$colunas.each(function(){
			somaParcelas += parseFloat($(this).val());
		});
		
		$alvoMedia.find(".resultado-media").val((somaParcelas/$colunas.length).toFixed(1));
	},
	
	iniciar : function(){		
		$(".calcula-media .parcela-media").bind( "keyup", this.keyupHandler);
	}
};