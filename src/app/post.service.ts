import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class PostService {
  posts: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.posts = angularFire.database.list('posts');
  }

  getPosts() {
    return this.posts;
  }
}
