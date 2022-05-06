programa {
	funcao inicio() {
		inteiro idade, qtAnos, qtMeses, qtDias, sobra
		
		escreva("Digite a idade em dias ")
		leia(idade)
		
		qtAnos = idade / 365
		
		sobra = idade % 365
		
		qtMeses = sobra / 30
		
		qtDias = sobra % 30
		
		escreva(qtAnos + " anos\n")
		escreva(qtMeses + " mes(es)\n")
		escreva(qtMeses + " dias(s))\n")
	}
}
