import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters:any;

  constructor(private databaseService: DatabaseService){

  }
  ngOnInit(): void {
    
      this.databaseService.return().subscribe( result => this.characters = result);
  }
}
