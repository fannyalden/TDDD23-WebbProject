import {Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {ProfileComponent } from '../profile.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './uploadimg.component.html',
    styleUrls: ['./uploadimg.component.css']
})
export class UploadimgComponent implements OnInit {

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    ngOnInit() {
    }
}
