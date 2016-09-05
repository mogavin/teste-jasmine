function menuLateral($menu, $conteudo, $botaoMenu){
	
	//Validação dos parâmetros
	if(arguments.length < 3)
		throw new TypeError("Quantidade de parâmetros inválida.");
	
	//Configuração default (menu expandido) 
	$menu.addClass("col-md-3");
	$conteudo.addClass("col-sm-12 col-md-offset-3 col-md-9");
	
	var $links = $menu.find('a > label');
	var $logo = $menu.find('.logo-menu');		
	//Adiciona handler para eventos de cliques no botão de recolher/expandir o menu
	$botaoMenu.click(function(){
		if($menu.hasClass("col-md-3")){
			$menu.removeClass("col-md-3");
			$conteudo.removeClass("col-md-offset-3 col-md-9").addClass("col-md-offset-1 col-md-11");			
			$links.hide();
			$logo.hide();
		}else{
			$menu.addClass("col-md-3");
			$conteudo.removeClass("col-md-offset-1 col-md-11").addClass("col-md-offset-3 col-md-9");
			$links.show();
			$logo.show();
		}
	});
}