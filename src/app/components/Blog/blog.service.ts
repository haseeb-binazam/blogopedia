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
    private blogs: blog[] = [
        {
            id: 1,
            name: 'My First blog',
            writtenBy: 'haseeb',
            writtenDate: '2021/2/12',
            description: 'a blog about blog',
            content: 'Lorem ipsum dolor Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur necessitatibus voluptatum enim sint error tenetur. Sit, eaque. Enim corrupti vero magni non necessitatibus odit voluptas voluptates consectetur voluptate illo, obcaecati inventore magnam rerum nostrum explicabo optio. Non numquam, unde animi nulla nemo saepe! Accusantium magnam vitae, saepe minima necessitatibus nostrum nam nesciunt reiciendis eos harum rerum repellendus deserunt a ducimus eligendi. Consectetur suscipit optio modi veniam, quibusdam quod a corrupti in nesciunt esse consequuntur ullam culpa, nulla praesentium reiciendis nostrum impedit fugiat? Obcaecati at odio animi quas commodi reprehenderit, nisi atque quis quod laborum? Dicta quam nostrum modi voluptates error!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur necessitatibus voluptatum enim sint error tenetur. Sit, eaque. Enim corrupti vero magni non necessitatibus odit voluptas voluptates consectetur voluptate illo, obcaecati inventore magnam rerum nostrum explicabo optio. Non numquam, unde animi nulla nemo saepe! Accusantium magnam vitae, saepe minima necessitatibus nostrum nam nesciunt reiciendis eos harum rerum repellendus deserunt a ducimus eligendi. Consectetur suscipit optio modi veniam, quibusdam quod a corrupti in nesciunt esse consequuntur ullam culpa, nulla praesentium reiciendis nostrum impedit fugiat? Obcaecati at odio animi quas commodi reprehenderit, nisi atque quis quod laborum? Dicta quam nostrum modi voluptates error! sit amet consectetur, adipisicing elit. Amet quia recusandae, officiis earum ab minus eum fugit suscipit ea atque.',
        },
        {
            id: 2,
            name: 'my second blog',
            writtenBy: 'ahsan',
            writtenDate: '2021/2/13',
            description: 'a blog about dont know anything',
            content: 'Lorem ipsum dolor sitLorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur necessitatibus voluptatum enim sint error tenetur. Sit, eaque. Enim corrupti vero magni non necessitatibus odit voluptas voluptates consectetur voluptate illo, obcaecati inventore magnam rerum nostrum explicabo optio. Non numquam, unde animi nulla nemo saepe! Accusantium magnam vitae, saepe minima necessitatibus nostrum nam nesciunt reiciendis eos harum rerum repellendus deserunt a ducimus eligendi. Consectetur suscipit optio modi veniam, quibusdam quod a corrupti in nesciunt esse consequuntur ullam culpa, nulla praesentium reiciendis nostrum impedit fugiat? Obcaecati at odio animi quas commodi reprehenderit, nisi atque quis quod laborum? Dicta quam nostrum modi voluptates error! amet consectetur, adipisicing elit. Amet quia recusandae, officiis earum ab minus eum fugit suscipit ea atque.',
        },
        {
            id: 3,
            name: 'my third blog',
            writtenBy: 'hanif',
            writtenDate: '2021/2/11',
            description: 'a blog about assigment',
            content: 'Lorem ipsum dolor Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur necessitatibus voluptatum enim sint error tenetur. Sit, eaque. Enim corrupti vero magni non necessitatibus odit voluptas voluptates consectetur voluptate illo, obcaecati inventore magnam rerum nostrum explicabo optio. Non numquam, unde animi nulla nemo saepe! Accusantium magnam vitae, saepe minima necessitatibus nostrum nam nesciunt reiciendis eos harum rerum repellendus deserunt a ducimus eligendi. Consectetur suscipit optio modi veniam, quibusdam quod a corrupti in nesciunt esse consequuntur ullam culpa, nulla praesentium reiciendis nostrum impedit fugiat? Obcaecati at odio animi quas commodi reprehenderit, nisi atque quis quod laborum? Dicta quam nostrum modi voluptates error!sit amet Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur necessitatibus voluptatum enim sint error tenetur. Sit, eaque. Enim corrupti vero magni non necessitatibus odit voluptas voluptates consectetur voluptate illo, obcaecati inventore magnam rerum nostrum explicabo optio. Non numquam, unde animi nulla nemo saepe! Accusantium magnam vitae, saepe minima necessitatibus nostrum nam nesciunt reiciendis eos harum rerum repellendus deserunt a ducimus eligendi. Consectetur suscipit optio modi veniam, quibusdam quod a corrupti in nesciunt esse consequuntur ullam culpa, nulla praesentium reiciendis nostrum impedit fugiat? Obcaecati at odio animi quas commodi reprehenderit, nisi atque quis quod laborum? Dicta Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur necessitatibus voluptatum enim sint error tenetur. Sit, eaque. Enim corrupti vero magni non necessitatibus odit voluptas voluptates consectetur voluptate illo, obcaecati inventore magnam rerum nostrum explicabo optio. Non numquam, unde animi nulla nemo saepe! Accusantium magnam vitae, saepe minima necessitatibus nostrum nam nesciunt reiciendis eos harum rerum repellendus deserunt a ducimus eligendi. Consectetur suscipit optio modi veniam, quibusdam quod a corrupti in nesciunt esse consequuntur ullam culpa, nulla praesentium reiciendis nostrum impedit fugiat? Obcaecati at odio animi quas commodi reprehenderit, nisi atque quis quod laborum? Dicta quam nostrum modi voluptates error!quam nostrum modi voluptates error!consectetur, adipisicing elit. Amet quia recusandae, officiis earum ab minus eum fugit suscipit ea atque.',
        },
    ];

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
        this.blogs.push(
            {
                id: id,
                name: title,
                writtenBy: author,
                writtenDate: date,
                description: desc,
                content: content,
            }
        )
    };    

    updateBlog(
        id: number,
        title: string,
        desc: string,
        content: string,
        date: string | null
    ) {
        this.blogs[id-1].name = title;
        this.blogs[id-1].description = desc;
        this.blogs[id-1].content = content;
        this.blogs[id-1].writtenDate = date;
        // console.log(title);
        // console.log(desc);
        // console.log(content);
        // console.log(date);
    };
};
