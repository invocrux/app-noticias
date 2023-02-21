import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ResponseNews } from '../interface/ResponseNews';

@Injectable({
  providedIn: 'root'
})
export class GetNewsService {
  contador: number = 1;
  constructor(private http: HttpClient) { }

  getnNews() {
    return this.http.get<ResponseNews>('https://newsapi.org/v2/top-headlines?country=co&category=business&apiKey=1fcf8a578f8043bcb2c39aa0bc8a4df7').pipe(map(resp => resp.articles))
  }

  getTopHeadlinesByCategory(categoria: string, loadMore: boolean = false) {
    if (loadMore) {
      this.contador++;
    }
    return this.http.get<ResponseNews>(`https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=1fcf8a578f8043bcb2c39aa0bc8a4df7&page=${this.contador}`).pipe(map(resp => resp.articles))
  }
}
