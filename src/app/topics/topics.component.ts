import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css'],
  providers: [PostService]
})
export class TopicsComponent implements OnInit {
  posts: FirebaseListObservable<any[]>;
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

  goToDetailPage(clickedPost) {
    this.router.navigate(['posts', clickedPost.$key]);
  }

  beginDeletingPost(post) {
    if (confirm('Are you sure you want to delete this post?')) {
      this.postService.deletePost(post);
    }
  }


}
