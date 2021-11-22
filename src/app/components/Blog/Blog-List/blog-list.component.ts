import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { blog, BlogService } from '../blog.service';

@Component({
    selector: 'app-blog-list',
    templateUrl: './blog-list.component.html',
    styleUrls: ['./blog-list.component.css']
})

export class BlogList implements OnInit {

    blogs!: blog[];

    constructor(
        private blogService: BlogService,
        private router: Router
    ) { };

    ngOnInit() { 
        this.blogs = this.blogService.getBlogs();
        // console.log(this.blogs);
    };

    onReadmore(id: number) {
        this.router.navigate(['blogdetail', id],)
    }

}