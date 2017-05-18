var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ImgService } from '../../services/img.service';
var HomeComponent = (function () {
    function HomeComponent(imgService) {
        this.imgService = imgService;
        this.img_collection = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imgService
            .getImgList()
            .subscribe(function (res) {
            _this.handleFeaturedImg(res);
            _this.handleImgCollection(res);
        });
    };
    HomeComponent.prototype.handleFeaturedImg = function (res) {
        var randomImg = Math.floor(Math.random() * 1000) + 1;
        this.single_img = res[randomImg];
        this.single_img['loading'] = true;
        this.imgPreload(this.single_img);
    };
    HomeComponent.prototype.imgPreload = function (new_image) {
        var _this = this;
        var c = new Image();
        c.src = new_image['post_url'] + '/download';
        c.onload = function () {
            _this.single_img['loading'] = false;
        };
    };
    HomeComponent.prototype.handleImgCollection = function (res) {
        for (var i = 0; i < 5; i++) {
            var randomImg = Math.floor(Math.random() * 1000) + 1;
            this.img_collection.push(res[randomImg]);
            this.img_collection[i]['loading'] = true;
            this.collectionImgPreload(this.img_collection[i], i);
        }
    };
    HomeComponent.prototype.collectionImgPreload = function (new_image, i) {
        var _this = this;
        var c = new Image();
        c.src = new_image['post_url'] + '/download';
        c['index'] = i;
        c.onload = function (c) {
            var loadedI = c['target']['index'];
            _this.img_collection[loadedI]['loading'] = false;
        };
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css'],
        providers: [ImgService]
    }),
    __metadata("design:paramtypes", [ImgService])
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=C:/Users/Agnes/Documents/tddd27/TDDD272017-aWebb/aWebb/angular-src/src/app/components/home/home.component.js.map