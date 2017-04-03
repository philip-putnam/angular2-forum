import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { PostService } from '../post.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers: [PostService]
})
export class PostDetailComponent implements OnInit {
  postId: string = null;
  postToDisplay: Post;

  constructor(private route: ActivatedRoute, private location: Location, private postService: PostService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.postId = urlParameters['id'];
    });
    this.postService.getPostById(this.postId).subscribe(dataLastEmittedFromObserver => {
      this.postToDisplay = new Post(dataLastEmittedFromObserver.title,
                                    dataLastEmittedFromObserver.author,
                                    dataLastEmittedFromObserver.content,
                                    dataLastEmittedFromObserver.subjects,
                                    dataLastEmittedFromObserver.image,
                                    dataLastEmittedFromObserver.date)
    })
  }

}
