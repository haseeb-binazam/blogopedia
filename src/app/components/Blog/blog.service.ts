import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface blog {
    id: number,
    name: string,
    writtenBy: string,
    writtenDate: any,
    description: string,
    content: string
}

@Injectable()
export class BlogService {
    private blogs!: blog[];
    errorMessage: any;

    constructor(
        private http: HttpClient
    ) {};

    getBlogs(): blog[] {

        this.http.get<blog[]>('https://my-json-server.typicode.com/haseeb-binazam/blogs/posts')
        .subscribe({
            next: (data) => {
                this.blogs = data;
                console.log(this.blogs);
            },

            error: error => {
                this.errorMessage = error.message;
                console.error('There was an error!', this.errorMessage);
            }
        });
        console.log(this.blogs);    
        return this.blogs;
    };

    getBlogOnID(id: number) {
        let index = id - 1;
        return this.blogs[index];
    };

    getLength(): number {
        return this.blogs.length;
    };

    addBlog(
        id: number,
        title: string,
        author: string,
        desc: string,
        content: string,
        date: string | null
    ) {
        //pushing new entry to local array
        this.blogs.push(
            {
                id: id,
                name: title,
                writtenBy: author,
                writtenDate: date,
                description: desc,
                content: content,
            }
        );

        //posting new entry to api
        const body = {
            id: id,
            name: title,
            writtenBy: author,
            writtenDate: date,
            description: desc,
            content: content,
        }

        this.http.post<any>('https://my-json-server.typicode.com/haseeb-binazam/blogs/posts', body) 
            .subscribe({
                next: data => {
                    console.log(`data added with id : ${data.id}`);
                },

                error: error => {
                    this.errorMessage = error.message;
                    console.error('There was an error!', this.errorMessage);
                }
            })
        
    };    

    updateBlog(
        id: number,
        title: string,
        desc: string,
        content: string,
        date: string | null
    ) {
        //pushing updated entry to local array
        // console.log(id);
        this.blogs[id-1].name = title;
        this.blogs[id-1].description = desc;
        this.blogs[id-1].content = content;
        this.blogs[id-1].writtenDate = date;
        // console.log(title);
        // console.log(desc);
        // console.log(content);
        // console.log(date);

        //posting updated entry to api

        const body = {
            id: id,
            name: title,
            writtenDate: date,
            description: desc,
            content: content,
        }


        this.http.put<any>(`https://my-json-server.typicode.com/haseeb-binazam/blogs/posts/${id}`, body) 
            .subscribe({
                next: data => {
                    console.log(`data updated with id : ${data.id}`);
                },

                error: error => {
                    this.errorMessage = error.message;
                    console.error('There was an error!', this.errorMessage);
                }
            })
        
    };
};
