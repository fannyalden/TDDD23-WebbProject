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
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { UploadService } from "../../services/upload.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { ValidateService } from "../../services/validate.service";
var HomeComponent = (function () {
    function HomeComponent(validateService, flashMessage, authService, uploadService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.uploadService = uploadService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onChange = function (event) {
        this.image = event.srcElement.files[0];
    };
    HomeComponent.prototype.onUploadSubmit = function () {
        var _this = this;
        // Register user
        /*this.uploadService.makeFileRequest('http://localhost:4000/images/upload',[],this.images).subscribe(data=>{
            this.flashMessage.show('swag', {cssClass: 'alert-success', timeout: 5000})
        })*/
        this.uploadService.uploadFile('http://localhost:4000/images/upload', this.image).then(function (data) {
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
    __metadata("design:paramtypes", [ValidateService,
        FlashMessagesService,
        AuthService,
        UploadService,
        Router])
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=C:/Users/Agnes/Documents/tddd27/TDDD272017-aWebb/aWebb/angular-src/src/app/components/home/home.component.js.map