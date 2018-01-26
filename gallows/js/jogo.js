var criaJogo = function(sprite){

	var setPalavrasSecreta = '';
	var lacunas = [];
	var etapa = 1;

	var processaChute = function(chute){

		var exp = new RegExp(chute, 'gi'),
		resultado,
		acertou = false;

		while(resultado = exp.exec(setPalavrasSecreta)){

			acretou = lacunas[resultado.index] = chute;
			//acertou = true;
		}

		if(!acertou){
			sprite.nextFrame();
		}

	};

	var criaLacunas = function(){
		for(var i = 0; i < setPalavrasSecreta.length; i++){
			lacunas.push('');
		}
	};

	var setPalavrasSecreta = function(palavras){

		setPalavrasSecreta = palavras;
		criaLacunas();
		proximaEtapa();
	};

	var proximaEtapa = function(){

		etapa = 2;
	};	

	var getLacunas = function(){
		return lacunas;
	};

	var getEtapa = function(){

		return etapa;
	};

	return {
		setPalavrasSecreta: setPalavrasSecreta,
		getLacunas: getLacunas,
		getEtapa: getEtapa,
		processaChute: processaChute
	};
};

//var jogo = criJogo(createSprite(".sprite"));