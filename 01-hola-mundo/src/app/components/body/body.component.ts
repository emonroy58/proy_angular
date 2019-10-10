import { Component } from '@angular/core';


@Component({
    selector : 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {
    mostrar = true;

    frase: any = {
        mensaje: 'Quienes leen viven mas de una vida',
        autor: 'Alfred Q.'
    };

    personajes: string[] = ['Must', 'Owe', 'Duty'];
}