import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {UploadService} from "../../services/upload.service";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    imageName: String;
    imagePath: String;
    img: File;
    images: Object;
    user: Object;

    constructor(private flashMessage: FlashMessagesService,
                private authService: AuthService,
                private uploadService: UploadService
                ) {}

    ngOnInit() {
        this.authService.getImage().subscribe(data => {
                for(let i = 0; i < data.length; i++)
                  //  console.log(data[i].imageName); //undefined, imageName doesnt exist in database
                    this.images = data;
            },
            err => {
                console.log(err);
                return false;
            });


    }
    onChange(event) {
        this.img = event.srcElement.files[0];
    }

    onUploadSubmit() {
        // Upload image
        this.uploadService.uploadFile('http://localhost:4000/images/upload', this.img).then(data => {
            if (data.success) {
                this.flashMessage.show('Image uploaded', {cssClass: 'alert-success', timeout: 3000});

            } else {
                this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
            }
        }).catch(err => {
            // Error trying to communicate to backend
            this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        });
    }
}


