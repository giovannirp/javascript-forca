var criaController = function(jogo) {

	var $entrada = $(".entrada");
	var $lacunas = $(".lacunas");


    var exibeLacunas = function () {
    	$lacunas.empty();
        jogo.getLacunas().forEach(function(lacuna) {
        	$('<li>')
        		.addClass("lacuna")
        		.text(lacuna)
        		.appendTo($lacunas);
        });
    };

    // muda o texto do placeHolder do campo de entrada    
    var mudaPlaceHolder = function (texto) {

    	$entrada.attr('placeHolder', texto);
    };

    // passa para jogo.setPalavraSecreta() o valor digitado pelo jogador e chama o a função `exibeLacunas()` e `mudaPlaceHolder()` definidas no controller. 

    var guardaPalavraSecreta = function () {
    	try{
    		jogo.setPalavrasSecreta($entrada.val().trim());
	        $entrada.val('');
	        exibeLacunas();
	        mudaPlaceHolder('chute');
    	} catch(err){
    		alert(err.message);
    	}


    };

    var renicia = function(){
		jogo.renicia();
		$lacunas.empty();
		mudaPlaceHolder('palavra secreta');
    }; 

    var leChute = function(){
    	try {
	    	jogo.processaChute($entrada.val().trim().substr(0, 1));
	    	$entrada.val('');
	    	exibeLacunas();

	    	if(jogo.ganhouOuPerdeu()){
				
				setTimeout(function(){
					if(jogo.ganhou()){
						alert("parabens, você ganhou");
					} else if (jogo.perdeu()) {
						alert("que pena tente novamente");
					}
					renicia();
				}, 200);
			}
    	} catch(err){
    		alert(err.message);
    	}

    };

    // faz a associação do evento keypress para capturar a entrada do usuário toda vez que ele teclar ENTER
    var inicia = function () {

        console.log('falta implementar');
    };

    var inicia = function(){

    	$entrada.keypress(function (event) {
    		if(event.which == 13) {
    			switch (jogo.getEtapa()) {
    				case 1:
    					guardaPalavraSecreta();
    					break;
    				case 2:
    					leChute();
    					break;
    			}
    		}
    	});
    };


    // retorna um objeto com a propriedade inicia, que deve ser chamada assim que o controller for criado. 
    return { inicia: inicia };

};