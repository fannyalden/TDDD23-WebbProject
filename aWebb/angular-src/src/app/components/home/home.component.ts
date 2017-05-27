import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {UploadService} from "../../services/upload.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {ValidateService} from "../../services/validate.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    imageName: String;
    imagePath: String;
    image: File

    constructor(private validateService: ValidateService,
                private flashMessage: FlashMessagesService,
                private authService: AuthService,
                private uploadService: UploadService,
                private router: Router
                ) {
    }

    ngOnInit() {
    }
    onChange(event) {
        this.image = event.srcElement.files[0]
    }

    onUploadSubmit() {
        // Register user
        /*this.uploadService.makeFileRequest('http://localhost:4000/images/upload',[],this.images).subscribe(data=>{
            this.flashMessage.show('swag', {cssClass: 'alert-success', timeout: 5000})
        })*/
        this.uploadService.uploadFile('http://localhost:4000/images/upload', this.image).then(data=>{
            if(data.success){
                this.flashMessage.show('Image uploaded', {cssClass: 'alert-success', timeout: 3000});

            } else {
                this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
            }
        }).catch(err=>{
            // Error trying to communicate to backend
            this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        })

    }
}


