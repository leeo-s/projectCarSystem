import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  title = "Sistema de Cadastro de Veículos 1.0";
  constructor() { }
  ngOnInit(): void {
    
  }
}
