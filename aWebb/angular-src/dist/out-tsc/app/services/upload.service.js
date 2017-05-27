var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Agnes on 2017-05-27.
 */
import { Injectable } from '@angular/core';
var UploadService = (function () {
    function UploadService() {
    }
    UploadService.prototype.uploadFile = function (url, file) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            // Open POST request to backend
            xhr.open('POST', url, true);
            // Set headers
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            // Create body data
            var formData = new FormData();
            /*
             HOW TO SEND MORE DATA TO BACKEND:
             formData.append("imagename", "Sven Eriksson");
            */
            formData.append("image", file, file.name);
            // Send body data
            xhr.send(formData);
        });
    };
    return UploadService;
}());
UploadService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], UploadService);
export { UploadService };
//# sourceMappingURL=C:/Users/Agnes/Documents/tddd27/TDDD272017-aWebb/aWebb/angular-src/src/app/services/upload.service.js.map