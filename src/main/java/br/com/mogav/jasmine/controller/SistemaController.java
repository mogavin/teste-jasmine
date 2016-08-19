package br.com.mogav.jasmine.controller;

import javax.inject.Inject;

import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Result;

@Controller
@Path("")
public class SistemaController {

	private final Result result;
	
	 /**
	 * @deprecated CDI eyes only
	 */
	SistemaController(){
		this(null);
	}
	
	@Inject
	public SistemaController(Result result) {
		this.result = result;
	}
	
	@Path({"", "/"})
	public void index(){}
}