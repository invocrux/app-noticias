import { Component, OnInit } from '@angular/core';
import { GetNewsService } from 'src/app/service/get-news.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  categorias: string[] = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
  ]

  articulosPorCategoria: any[] = []
  categoriaDefault: string = this.categorias[0]
  constructor(private service: GetNewsService) { }


  ngOnInit(): void {
    this.segmentChanged();

  }

  segmentChanged(evento?: any) {
    evento ? this.categoriaDefault = evento.detail.value : this.categorias[0]
    this.service.getTopHeadlinesByCategory(this.categoriaDefault).subscribe(resp => this.articulosPorCategoria = resp);
  }

  loadData() {
    this.service.getTopHeadlinesByCategory(this.categoriaDefault, true).subscribe(resp => this.articulosPorCategoria.push(...resp));
  }
}
