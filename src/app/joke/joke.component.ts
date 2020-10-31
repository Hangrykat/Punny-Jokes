import { Component, EventEmitter, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  @Input() joke;
  @Input() isLoading;
  @Output() Next = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  next(): void {
    this.Next.emit();
  }
}
