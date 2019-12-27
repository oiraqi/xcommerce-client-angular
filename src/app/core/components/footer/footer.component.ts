import { Component, OnInit } from '@angular/core';
import { ProxyService } from '../../services/proxy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(path: string) {
    this.router.navigateByUrl(path);
  }

}
