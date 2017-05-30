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
    img: File
    image: Object
    user: Object

    constructor(private flashMessage: FlashMessagesService,
                private authService: AuthService,
                private uploadService: UploadService
                ) {}

    ngOnInit() {


        this.authService.getImage().subscribe(profile => {
               console.log('test')
            },
            err => {
                console.log(err);
                return false;
            });


    }
    onChange(event) {
        this.img = event.srcElement.files[0]
    }

    onUploadSubmit() {
        // Upload image
        this.uploadService.uploadFile('http://localhost:4000/images/upload', this.img).then(data=>{
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


