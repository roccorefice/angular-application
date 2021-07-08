import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
	//Queste variabili possono essere utilizzate solo nel contesto di questa classe
	today!: Date; //dichiaro una variabile today di tipo Date
	money!: number; //dichiaro una variabile money di tipo number
	lista: string[] = ['test1', 'test2', 'test3', 'test4', 'test5']; //variabile array per sperimentare utilizzo ngFor
	show: boolean = false; //variabile booleana che viene utilizzata nell' ngIf per mostrare o nascondere un item
	color: string = 'black';
	size: string = 'none';

	@Input() user: string = ''; //attributi della classe

	form : FormGroup //form group

	// constructor viene chiamato ogni qualvolta il componente viene generato
	// all'interno di un metodo (constructor()) è possibile utilizzare la sintassi di JavaScript
	// con fb instanziamo in maniera automatica un attributo che richiama il Service FormBuilder
	constructor( public fb: FormBuilder ) {
		//Instanzio le variabili precedentemente dichiarate, si fa con l'utilizzo del this
		this.today = new Date();

		let money1 = 10;
		let money2 = 20;
		this.money = this.sum(money1, money2);
		this.form = fb.group({
			'username' : ['', Validators.required],
			'email' : ['', Validators.required],
			'date' : [''],

		});
	}

	//In questo contesto le funzioni hanno effetto solo per le classi, una funzione creata qui ha effetto solo nella relativa classe
	//ngOnInit viene chiamato ogni qualvolta il componente viene "aperto"
	ngOnInit(): void {}
	sum(n1: number, n2: number): number {
		return n1 + n2;
	}

	//questo metodo viene avviato dopo l'OnInit, dopo il costruttore ma soprattutto dopo che il template html venga caricato
	//se fosse stato messo nel costruttore o nel OnInit ci sarebbe stato errore perchè non essendosi ancora caricato tutto il template html non sarebbe esistito nessun button con id=button
	//   ngAfterViewInit(): void {
	// 	  document.getElementById("button").style.backgroundColor = 'red';
	//   }

	//funxione che viene invocata al click per mostrare o nascondere un pezzo di codice a seconda della variabile show
	showhidden(): void {
		this.show = !this.show;
	}

	hello(field: HTMLSelectElement) {
		if (field.value == "1") {
			alert("hello")
		} else {
			console.log("hello");
		}
	}

	changeColor(field: HTMLSelectElement) {
		if (field.value == "1") {
			this.color = "green";
		} else if (field.value == "2"){
			this.color = "yellow";
		} else {
			this.color = "red";
		}
	}

	changeSize(field: HTMLSelectElement) {
		if (field.value == "1") {
			this.size = "big";
		} else if (field.value == "2"){
			this.size = "small";
		} else{
			this.size = "none";
		}
	}

	send(): void{
		// validazione form
		if(!this.form.valid){
			alert('compilare tutti i campi obbligaotri');
			return;
		}
		console.log(
			this.form.controls['username'].value, //questa sintassi per andarmi a prendere il singolo valore dell'input (user)
			this.form.controls['email'].value,
			this.form.controls['date'].value,
		);
		
	}
	
	checkUser() { 
		let user = this.form.controls['username'].value;
		if (!(user.length >= 8)) {
			this.form.controls['username'].setErrors({incorect: true}); //manualmente imposto il campo in errore se < 8 caratteri
		} else {
			this.form.controls['username'].setErrors(null); 
		}
	}
	// ->risultato: il form risulterà non valido anche se il campo user sarà compilato ma con meno di 8 caratteri
}
