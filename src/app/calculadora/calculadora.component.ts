import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "calcx",
    templateUrl: './calculadora.component.html',
    styleUrls: ['./calculadora.component.css']
})


export class CalculadoraComponent{
   
    @Output()
    click = new EventEmitter()
   
    botaoNumero(): void{
        console.log("uisgfdiusg")
        this.click.emit();
    }
}
