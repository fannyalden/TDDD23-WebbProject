import {Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
    selector: 'app-dashboard',
    templateUrl: './uploadimg.component.html',
    styleUrls: ['./uploadimg.component.css']
})
export class UploadimgComponent implements OnInit {
    imageName: String;
    imagePath: String;
    imageTags: String;

    constructor(
        private router: Router,
        private authService: AuthService,
        private flashMessage: FlashMessagesService
    ) { }

    ngOnInit() {
    }

    onUploadSubmit(){
        const uploaded = {
            imageName: this.imageName,
            imagePath: this.imagePath,
            imageTags: this.imageTags
        };
        console.log(uploaded.imageTags);
        // Upload image
        this.authService.uploadImage(uploaded).subscribe(data => {
            if(data.success){
                this.flashMessage.show('Image uploaded', {cssClass: 'alert-success', timeout: 3000});
                this.router.navigate(['/profile']);
            } else {
                this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
                this.router.navigate(['/uploadimg']);

            }
        });

    }

}
