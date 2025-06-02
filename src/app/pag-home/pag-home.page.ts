import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pag-home',
  templateUrl: './pag-home.page.html',
  styleUrls: ['./pag-home.page.scss'],
  standalone: false,
})
export class PagHomePage {
  usuario: string = '';

  constructor(private route: ActivatedRoute) {
	this.route.queryParams.subscribe(params => {
      this.usuario = params['user'] || 'usuario';
    });
  
  }  

}
