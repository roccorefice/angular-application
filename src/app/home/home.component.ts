import { Component, OnInit, Input } from '@angular/core';

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
	@Input() user: string = ''; //attributi della classe

	//constructor viene chiamato ogni qualvolta il componente viene generato
	//all'interno di un metodo (constructor()) è possibile utilizzare la sintassi di JavaScript
	constructor() {
		//Instanzio le variabili precedentemente dichiarate, si fa con l'utilizzo del this
		this.today = new Date();

		let money1 = 10;
		let money2 = 20;
		this.money = this.sum(money1, money2);
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
}
