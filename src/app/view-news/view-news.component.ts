import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../news.service';
import { ToastrService } from '../toastr.service';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.css']
})
export class ViewNewsComponent implements OnInit {
  @ViewChild('titleInput') titleInput!: ElementRef;
  @ViewChild('bodyInput') bodyInput!: ElementRef;

  toBeEditedTitle: string = ""
  toBeEditedBody: string = ""
  id: any;


  constructor(
    private router: Router,
    private newsService: NewsService,
    private _toastrService: ToastrService,
    private _route: ActivatedRoute,
  ) { }


  ngOnInit(): void {
    this._route.queryParams.subscribe((params) => {
      this.toBeEditedTitle = params['title']
      this.toBeEditedBody = params['body']
      this.id = params['id']
    })
  }


  onSubmit() {
    const Id = this.id;
    const titleValue = this.titleInput.nativeElement.value;
    const bodyValue = this.bodyInput.nativeElement.value;
    const newData = {
      title: titleValue,
      body: bodyValue
    };

    this.newsService.updatePost(Id, newData).subscribe(response => {
      this._toastrService.showToast('Edited Successfully');
      setTimeout(() => {
        this.router.navigate(['/']);
      },
        2000);
    }
    );
  }


  onCancel() {
    this.router.navigate(['/']);
  }
}
