import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-component-um',
  templateUrl: './teste-component-um.component.html',
  styleUrls: ['./teste-component-um.component.scss']
})
export class TesteComponentUmComponent implements OnInit {

  @Input() nome: string = '';
  @Input()idade = '';
  @Input()cidade: string = '';
  @Input()km: string = '';

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
}
