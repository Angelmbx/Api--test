import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
 
  characters: any[] = [];

  fillData(){ 
    this.apiService.getData().subscribe ( data => {
      this.characters = data.results;
    })
  }

  constructor(private apiService: ApiService){  }

  ngOnInit(): void {
    this.fillData();
  }

  

}
