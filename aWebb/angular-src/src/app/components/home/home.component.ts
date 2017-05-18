import { Component, OnInit } from '@angular/core';
import { ImgService } from '../../services/img.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ ImgService ]
})
export class HomeComponent implements OnInit {
  single_img: Object;
  img_collection: Object[] = [];
  constructor(private imgService: ImgService) {}

  ngOnInit() {
    this.imgService
      .getImgList()
      .subscribe( (res: Object[]) => {
        this.handleFeaturedImg(res);
        this.handleImgCollection(res);
      });
  }
  handleFeaturedImg(res) {
      let randomImg = Math.floor(Math.random() * 1000) + 1;
      this.single_img = res[randomImg];
      this.single_img['loading'] = true;
      this.imgPreload(this.single_img);
    }

  imgPreload(new_image) {
      let c = new Image();
      c.src = new_image['post_url'] + '/download';
      c.onload = () => {
          this.single_img['loading'] = false;
      };
  }
  handleImgCollection(res) {
    for ( let i = 0; i < 5; i++ ) {
      const randomImg = Math.floor(Math.random() * 1000) + 1;

      this.img_collection.push(res[randomImg]);
      this.img_collection[i]['loading'] = true;

      this.collectionImgPreload( this.img_collection[i], i );
    }
  }
  collectionImgPreload(new_image, i) {
    let c = new Image();
    c.src = new_image['post_url'] + '/download';
    c['index'] = i;
    c.onload = (c) => {
      const loadedI = c['target']['index'];
      this.img_collection[loadedI]['loading'] = false;
    };
  }
}
