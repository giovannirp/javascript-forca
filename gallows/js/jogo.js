var criaJogo = function(sprite){

	var setPalavrasSecreta = '';
	var lacunas = [];
	var etapa = 1;

	var ganhou = function(){

		return lacunas.length
			? !lacunas.some(function(lacuna){
			return lacuna == '';
		})
		: false;
	};

	var perdeu = function(){

		return sprite.isFinished();
	};

	var ganhouOuPerdeu = function(){

		return ganhou() || perdeu();
	};

	var renicia = function(){

		etapa = 1;
		lacunas = [];
		palavraSecreta = '';
		sprite.reset();

	};

	var processaChute = function(chute){

		if(!chute.trim()) throw Error('Chute invalida');

		var exp = new RegExp(chute, 'gi'),
		resultado,
		acertou = false;

		while(resultado = exp.exec(setPalavrasSecreta)){

			acertou = lacunas[resultado.index] = chute;
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

	var setPalavrasSecreta = function(palavra){

		if(!palavra.trim()) throw Error('Palavra secreta invalida');

		setPalavrasSecreta = palavra;
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
		processaChute: processaChute,
		ganhou: ganhou,
		perdeu: perdeu,
		ganhouOuPerdeu: ganhouOuPerdeu,
		renicia: renicia
	};
};

//var jogo = criJogo(createSprite(".sprite"));