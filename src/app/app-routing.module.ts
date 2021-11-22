import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlog } from './components/Add-Blog/add-blog.component';
import { BlogDetail } from './components/Blog/Blog-Detail/blog-detail.component';
import { BlogList } from './components/Blog/Blog-List/blog-list.component';
import { EditBlog } from './components/Edit-Blog/edit-blog.component';
import { LoginComponent } from './components/login-component/login.component';
import { NewComponent } from './components/NewComponent/new.component';

const routes: Routes = [
  { path: '', redirectTo: '/bloglist', pathMatch: 'full' },

  { path: 'bloglist', component: BlogList, 
    children: [
      { path: 'admin', 
        children: [
          { path: ':name', component: BlogList },
        ]
      },

      { path: 'blogger', 
        children: [
          { path: ':name', component: BlogList },
        ]
      },
  ] },

  { path: 'editblog', component: AddBlog  },

  { path: 'blogdetail', component: NewComponent,
    children: [
      { path: ':id', component: BlogDetail },
      { path: ':id/edit', component: EditBlog }
    ]
  },

  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
