import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { credentials } from '../../app.service';

@Component({
    selector: 'app-login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) { };

    @ViewChild('inputEmail') inputEmail!: ElementRef;
    @ViewChild('inputPass') inputPass!: ElementRef;

    ngOnInit() { };

    onLogin() {
        // console.log(credentials);
        // console.log(this.inputEmail.nativeElement.value);
        // console.log(this.inputPass.nativeElement.value);
        if(this.inputEmail.nativeElement.value === '')
            alert('email cant be empty');
        else if(this.inputPass.nativeElement.value === '')
            alert('password cant be empty');
        else{
            if(this.inputEmail.nativeElement.value === credentials.admin.email) {
                if(this.inputPass.nativeElement.value === credentials.admin.password){
                    this.router.navigate(['/bloglist/admin', credentials.admin.id]);
                }
                else {
                    alert('enter valid password');
                };
            }
            else {
                if(this.inputEmail.nativeElement.value === credentials.user.email) {
                    if(this.inputPass.nativeElement.value === credentials.user.password){
                        this.router.navigate(['/bloglist/blogger', credentials.user.id]);
                    }
                    else {
                        alert('enter valid password');
                    }; 
                }
                else {
                    alert('enter valid email');
                }
            };
        };   
    };
};