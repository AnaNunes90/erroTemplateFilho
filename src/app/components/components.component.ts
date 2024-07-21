import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  @Input() usuarioRecebe!: {nomeRecebe: string, idadeRecebe: string};


constructor(){}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
}
