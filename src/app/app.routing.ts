import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TopicsComponent } from './topics/topics.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: TopicsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent
  }];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
