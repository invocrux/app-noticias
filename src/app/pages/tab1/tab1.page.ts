import { Component, OnInit } from '@angular/core';
import { DataArticulos } from 'src/app/interface/ResponseNews';
import { GetNewsService } from 'src/app/service/get-news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  articulos: DataArticulos[] = []
  constructor(private service: GetNewsService) { }

  ngOnInit(): void {
    this.getDataNews()
  }

  getDataNews() {
    this.service.getnNews().subscribe(resp => {
      this.articulos = resp
    })
  }
}
