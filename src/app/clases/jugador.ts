export class Jugador {
	nombre: string;
	email: string;
	clave: string;

	agilidad: number;
	ppt: number;
	adivina: number;
	anagrama: number;
	tateti: number;
	ahorcado: number; 

	constructor(name, email, clave)
	{

		if(name==null && email!=null)
		{
			var sp = email.split('@');
			name=sp[0];
		}
		if(email==null && name !=null)
		{
			email =name;
		}
		this.nombre= name;
		this.email=email;
		this.clave=clave;

	}

}
