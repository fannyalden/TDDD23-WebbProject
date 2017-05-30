/**
 * Created by Agnes on 2017-05-27.
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class UploadService {
    constructor () {

    }
    uploadFile(url: string, file:File):Promise<any> {
        return new Promise((resolve, reject) => {

            //xhr is used to fetch from outside the pages origin, in this case the images
            let xhr:XMLHttpRequest = new XMLHttpRequest();
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(<any>JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            };

            // Open POST request to backend
            xhr.open('POST', url, true);

            // Set headers
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

            // Create body data
            let formData = new FormData();

            /*
             HOW TO SEND MORE DATA TO BACKEND:
             formData.append("imagename", "Sven Eriksson");
            */

            formData.append("image", file, file.name);

            // Send body data
            xhr.send(formData);
        });
    }
}