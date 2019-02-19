import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {

  }

  posts = [
    {
      title: "Mon premier post", 
      content: "Coopertos multos ubi is exilium eculei non quemquam quorum poenales ubi coopertos quorum ubi nullos.",
      loveIts: 1,
      created_at: 'Wed Feb 12 2019 16:33:22'
    }, 
    {
      title: "Mon deuxième post",
      content: "Coopertos multos ubi is exilium eculei non quemquam quorum poenales ubi coopertos quorum ubi nullos.",
      loveIts: -2,
      created_at: 'Wed Feb 20 2019 16:33:22'
    },
    {
      title: "Encore un post",
      content: "Coopertos multos ubi is exilium eculei non quemquam quorum poenales ubi coopertos quorum ubi nullos.",
      loveIts: 0,
      created_at: 'Wed Feb 17 2019 16:33:22'
    }
  ];

}
