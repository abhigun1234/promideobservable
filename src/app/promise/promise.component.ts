import { Component, OnInit } from '@angular/core';
import {SearchService} from '..//search.service' 
@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  constructor(public service :SearchService) { }

  ngOnInit() {
  }
  search(term:any)
  { this.service.search(term)
   
  }
}
