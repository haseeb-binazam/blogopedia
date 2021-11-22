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
    constructor() {
        //getting data from api and assigning to local property of class'blogs';

        fetch('https://my-json-server.typicode.com/haseeb-binazam/blogs/posts')
        .then(response => response.json())
        .then(json => {
            // console.log(json);
            this.blogs = json;
            console.log(this.blogs);
        })
    };


    getBlogs(): blog[] {
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
        
        fetch('https://my-json-server.typicode.com/haseeb-binazam/blogs/posts', {
        method: 'POST',
        body: JSON.stringify({
            id: id,
            name: title,
            writtenBy: author,
            writtenDate: date,
            description: desc,
            content: content,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
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

        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
                id: id,
                name: title,
                writtenDate: date,
                description: desc,
                content: content,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    };
};
