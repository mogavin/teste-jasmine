describe("MenuLateral", function() {	
	var $menu;
	var $links;
	var $logo;
	var $conteudo;
	var $botaoMenu;
	
	beforeEach(function() {
		setFixtures(
			'<div class="menu">' +
				'<div class="logo-menu"></div>' +
				'<a href="#"><label>Link</label></a>' +
			'</div>'
		);
		$menu = $(".menu");
		$links = $menu.find('a > label');
		$logo = $menu.find('.logo-menu');
		$conteudo = $('<div class="conteudo"></div>');
		$botaoMenu = $('<button class="btn-menu"></button>');	
	});
	
	it("deve lançar exceção se executado com menos de 3 parâmetros", function() {		
		expect(
			function(){menuLateral($menu);}
		).toThrow();
		
		expect(
			function(){menuLateral($menu, $conteudo);}
		).toThrow();
	});
	
	it("deve estar expandido por default", function() {
		menuLateral($menu, $conteudo, $botaoMenu);
		
		expect($menu).toHaveClass("col-md-3");
		expect($conteudo).toHaveClass("col-md-offset-3");
		expect($conteudo).toHaveClass("col-md-9");
		expect($conteudo).toHaveClass("col-sm-12");
		
		expect($links).not.toBeHidden();
		expect($logo).not.toBeHidden();
	});
	
	it("deve ser recolhido ao clicar no botão, caso esteja expandido", function() {			
		
		menuLateral($menu, $conteudo, $botaoMenu);
		
		$botaoMenu.click();//Recolhe o menu
		
		expect($menu).not.toHaveClass("col-md-3");
		expect($conteudo).not.toHaveClass("col-md-offset-3");
		expect($conteudo).not.toHaveClass("col-md-9");
		
		expect($conteudo).toHaveClass("col-sm-12");
		expect($conteudo).toHaveClass("col-md-offset-1");
		expect($conteudo).toHaveClass("col-md-11");

		expect($links).toBeHidden();
		expect($logo).toBeHidden();		
	});
	
	it("deve ser expandido ao clicar no botão, caso esteja recolhido", function() {	
		
		menuLateral($menu, $conteudo, $botaoMenu);
		
		$botaoMenu.click();//Recolhe o menu
		$botaoMenu.click();//Expande o menu
		
		expect($conteudo).not.toHaveClass("col-md-offset-1");
		expect($conteudo).not.toHaveClass("col-md-11");
		
		expect($menu).toHaveClass("col-md-3");
		expect($conteudo).toHaveClass("col-md-offset-3");
		expect($conteudo).toHaveClass("col-md-9");
		expect($conteudo).toHaveClass("col-sm-12");
		
		expect($links).not.toBeHidden();
		expect($logo).not.toBeHidden();
	});
});