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
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
var UploadimgComponent = (function () {
    function UploadimgComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    UploadimgComponent.prototype.ngOnInit = function () {
    };
    return UploadimgComponent;
}());
UploadimgComponent = __decorate([
    Component({
        selector: 'app-dashboard',
        templateUrl: './uploadimg.component.html',
        styleUrls: ['./uploadimg.component.css']
    }),
    __metadata("design:paramtypes", [Router,
        AuthService])
], UploadimgComponent);
export { UploadimgComponent };
//# sourceMappingURL=C:/Users/Agnes/Documents/tddd27/TDDD272017-aWebb/aWebb/angular-src/src/angular-src/src/app/components/profile/uploadimg/uploadimg.component.js.map