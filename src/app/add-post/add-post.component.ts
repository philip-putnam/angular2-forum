import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  @Output() clickSender = new EventEmitter();

  addFormShown: boolean = false;

  showAddForm() {
    this.addFormShown = true;
  }

  addButtonClicked(title: string, author: string, content: string, subjects: string, image: string, date: string) {
    var newPost: Post = new Post(title, author, content, subjects, image, date);
    this.clickSender.emit(newPost);
    this.addFormShown = false;
  }

  cancelPostAdd() {
    this.addFormShown = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
