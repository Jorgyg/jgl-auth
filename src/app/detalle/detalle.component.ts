import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  index: number = 0;
  character: any; // Reemplaza "any" con el tipo de objeto para tus personajes
  details:any = {};
  constructor(private databaseService: DatabaseService, private route: ActivatedRoute){
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.index = params['index'];
      this.databaseService.return().subscribe(result => {
        this.character = result;
        this.details = this.character.results[this.index];
      });
    });
  }
}