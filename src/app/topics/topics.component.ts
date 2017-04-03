import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css'],
  providers: [PostService]
})
export class TopicsComponent implements OnInit {
  posts: FirebaseListObservable<any[]>;
  constructor(private postService: PostService, private router: Router, private authService: AuthService) { }

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

  submitPost(newPost) {
    this.postService.addPost(newPost);
  }

  logout() {
    this.authService.logout();
    console.log(this);
    this.router.navigate(['login']);
  }

}
