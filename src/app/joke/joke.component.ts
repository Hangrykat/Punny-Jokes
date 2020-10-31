import { Component, EventEmitter, OnInit } from '@angular/core';
import { Input } from '@angular/core'
import { Output } from '@angular/core'

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() joke;
  @Input() isLoading;
  @Output() onNext = new EventEmitter();

  next() {
    this.onNext.emit();
  }
}
