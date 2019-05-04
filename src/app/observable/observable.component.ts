import { Component, OnInit } from '@angular/core';
import{FormControl} from '@angular/forms'
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
private term =new FormControl()
  constructor() { }

  ngOnInit() {
    this.term.valueChanges.pipe(debounceTime(400)).subscribe(res=>res)
  }

}
