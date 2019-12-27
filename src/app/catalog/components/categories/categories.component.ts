import { Component, OnInit } from '@angular/core';
import { ProxyService } from 'src/app/core/services/proxy.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: any;

  constructor(private proxyService: ProxyService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(paramMap => {
      if (paramMap) {
        const parentId = parseInt(paramMap.get('parentId'), 10);
        if (parentId || parentId === 0) {
          this.categories = this.proxyService.getCategories(parentId);
          return;
        }
        this.categories = this.proxyService.getCategories();
      }
      this.categories = this.proxyService.getCategories();
    });
  }

  navigate(categoryId: number) {
    this.proxyService.getCategories(categoryId).subscribe(categories => {
      if (categories.length > 0) {
        this.router.navigateByUrl(`/categories?parentId=${categoryId}`);
      } else {
        this.router.navigateByUrl(`/products?categoryId=${categoryId}`);
      }
    });
  }

}
