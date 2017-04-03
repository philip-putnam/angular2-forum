import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Post } from './post.model';

@Injectable()
export class PostService {
  posts: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.posts = angularFire.database.list('posts');
  }

  getPosts() {
    return this.posts;
  }

  getPostById(postId: string) {
    return this.angularFire.database.object('/posts/' + postId);
  }

  deletePost(post) {
    this.getPostById(post.$key).remove();
  }

  addPost(post: Post) {
    this.posts.push(post);
  }
}
