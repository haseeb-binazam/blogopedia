import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { blog, BlogService } from '../blog.service';

@Component({
    selector: 'app-blog-detail',
    templateUrl: './blog-detail.component.html',
    styleUrls: ['./blog-detail.component.css']
})

export class BlogDetail implements OnInit {

    blogDetail!: blog;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private blogService: BlogService
    ) { };

    ngOnInit() { 
        this.route.paramMap.subscribe(
            (val: ParamMap) => {
                let id = parseInt(val.get('id') || '');
                // console.log(id);
                this.blogDetail = this.blogService.getBlogOnID(id)
                // console.log(this.blogDetail);
            }
        );

        
    };

    onEdit() {
        this.router.navigate(['edit'], {relativeTo: this.route});
    };
};