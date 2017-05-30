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
import { AuthService } from "../../services/auth.service";
import { UploadService } from "../../services/upload.service";
import { FlashMessagesService } from "angular2-flash-messages";
var HomeComponent = (function () {
    function HomeComponent(flashMessage, authService, uploadService) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.uploadService = uploadService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.authService.getImage().subscribe(function (profile) {
            console.log('test');
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    HomeComponent.prototype.onChange = function (event) {
        this.img = event.srcElement.files[0];
    };
    HomeComponent.prototype.onUploadSubmit = function () {
        var _this = this;
        // Upload image
        this.uploadService.uploadFile('http://localhost:4000/images/upload', this.img).then(function (data) {
            if (data.success) {
                _this.flashMessage.show('Image uploaded', { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
            }
        }).catch(function (err) {
            // Error trying to communicate to backend
            _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css'],
    }),
    __metadata("design:paramtypes", [FlashMessagesService,
        AuthService,
        UploadService])
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=C:/Users/Agnes/Documents/tddd27/TDDD272017-aWebb/aWebb/angular-src/src/app/components/home/home.component.js.map