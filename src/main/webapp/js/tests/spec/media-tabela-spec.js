describe("MediaTabela", function() {

  beforeEach(function() {
	  setFixtures('<table id="faz-media-ex-1" class="calcula-media">' +
						'<tr class="alvo-media">' +
	    					'<td><input class="parcela-media" value="6.0"/></td>' +
							'<td><input class="parcela-media" value="2.0"/></td>' +
							'<td><input class="resultado-media" value=""/></td>' +
						'</tr>' +
					'</table>' +
					'<table id="nao-faz-media">' +
						'<tr>' +
							'<td><input value="5.0"/></td>' +
							'<td><input class="parcela-media" value="10.0"/></td>' +
							'<td><input value=""/></td>' +
						'</tr>' +
					'</table>' +
					'<table id="faz-media-ex-2" class="calcula-media">' +
						'<tr class="alvo-media">' +
							'<td><input class="parcela-media" value="7.0"/></td>' +
							'<td><input class="parcela-media" value="13.0"/></td>' +
							'<td><input class="parcela-media" value="10.0"/></td>' +
							'<td><input class="resultado-media" value=""/></td>' +
						'</tr>' +
					'</table>'
	  );
	  
	  spyOn(MediaTabela, 'keyupHandler').and.callThrough();
	  MediaTabela.iniciar(); 
  });
  
  
  it("deve ignorar eventos disparados por tabelas sem classe 'calcula-media'", function() {
	  $("#nao-faz-media .parcela-media").keyup();		 
	  expect(MediaTabela.keyupHandler).not.toHaveBeenCalled();
  });

  it("não deve fazer nada se não houver evento keyup disparado por colunas com classe 'parcela-media'", function() {
	  expect(MediaTabela.keyupHandler).not.toHaveBeenCalled();
  });
  
  it("deve executar handler se evento keyup for disparado por colunas 'parcela-media' pertencentes à tabelas 'calcula-media'", function() {
	  $("#faz-media-ex-1 .parcela-media").keyup();		 
	  expect(MediaTabela.keyupHandler).toHaveBeenCalled();
  });
  
  
  describe("cujo handler de cálculo média", function() {
	  
	  it("deve alterar o valor da coluna 'resultado-media' com a média da linha'", function() {
		  var $colunaTabela_1 = $("#faz-media-ex-1 .parcela-media");		 
		  MediaTabela.keyupHandler.call($colunaTabela_1);		  
		  
		  var $colunaTabela_2 = $("#faz-media-ex-2 .parcela-media");		 
		  MediaTabela.keyupHandler.call($colunaTabela_2);
		  		  
		  expect($("#faz-media-ex-1 .resultado-media")).toHaveValue('4.0');
		  expect($("#faz-media-ex-2 .resultado-media")).toHaveValue('10.0');
	  });
	  
  });  
});