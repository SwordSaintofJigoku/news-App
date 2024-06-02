import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from '../toastr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  newsList: any[] = [];

  constructor(
    private newsService: NewsService,
    public dialog: MatDialog,
    public _toastrService: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(news => {
      this.newsList = news;
    });
  }

  deletePost(Id: number): void {

    
    this.newsService.deletePost(Id).subscribe(response => {
      this._toastrService.showToast('Deleted Successfully');
      setTimeout(() => {
        this.ngOnInit()
      },
        1000);
    });
  }

}

