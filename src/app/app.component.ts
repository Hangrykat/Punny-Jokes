import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) { }
  title = 'Pun-ny Jokes';

  jokeAPI = {setup: ' ', punchline: ''};
  isLoading = false;
  extractionFlag = false;
  selectedType = 'all';
  apiEndPoint = 'https://official-joke-api.appspot.com/jokes';

  ngOnInit(): void {
    this.getJoke();
  }

  getJoke(): void
  {
    let apiSuffix: any;

    switch (this.selectedType){
      case 'all':
      {
        apiSuffix = '/random';
        this.extractionFlag = false;
        break;
      }
      case 'general':
      {
        apiSuffix = '/general/random';
        this.extractionFlag = true;
        break;
      }
      case 'programming':
      {
        apiSuffix = '/programming/random';
        this.extractionFlag = true;
        break;
      }
      default:
      {
        apiSuffix = '/random';
      }
    }
    this.isLoading = true;
    this.http.get(this.apiEndPoint + apiSuffix).subscribe((data: Config) => {
      this.extractionFlag ? this.jokeAPI = { ...data[0] } : this.jokeAPI = { ...data }; this.isLoading = false; });

  }
}

interface Config {
    id: number;
    type: string;
    setup: string;
    punchline: string;
}
