import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items:Array<any>=[
    {
      img:"https://bosspoint.net/wp-content/uploads/2019/12/youtube-thumbnail.jpg",
      text: "How to youtube thumbnail"
    },
    {
      img: "https://derraleves.com/wp-content/uploads/2020/05/the-best-youtube-thumbnails-that.jpg",
      text: "How to increase views"
    },
    {
      img: "https://i.pinimg.com/originals/53/5a/ad/535aad6ed9e56730f3e1f26fb11d80e1.jpg",
      text: "Make thumbnails on iphone"
    }
  ]
}
