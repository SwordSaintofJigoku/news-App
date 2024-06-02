import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NewsService } from '../news.service';
import { ToastrService } from '../toastr.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})

export class AddNewsComponent {
  @ViewChild('titleInput') titleInput!: ElementRef;
  @ViewChild('bodyInput') bodyInput!: ElementRef;


  constructor(
    private router: Router,
    private newsService: NewsService,
    private _toastrService: ToastrService
  ) {}

  onSubmit() {
    const titleValue = this.titleInput.nativeElement.value;
    const bodyValue = this.bodyInput.nativeElement.value;
    const randomNumber = Math.floor(Math.random() * 1000);
    const postData = {
      title: titleValue,
      body: bodyValue,
      postId: randomNumber,
    };

    this.newsService.createPost(postData).subscribe(response => {
      this._toastrService.showToast('Added Successfully');
      setTimeout(() => {
        this.router.navigate(['/']);
      },
        2000);
      
    });
    
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}
