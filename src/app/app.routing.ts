import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TopicsComponent } from './topics/topics.component';

const appRoutes: Routes = [
  {
    path: '',
    component: TopicsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
