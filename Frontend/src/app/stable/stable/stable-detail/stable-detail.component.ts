import { Component, OnInit,inject } from '@angular/core';
import { StableDetailBaseComponent } from '@baseapp/stable/stable/stable-detail/stable-detail.base.component';
import { StableService } from '@baseapp/stable/stable/stable.service';


@Component({
  selector: 'app-stable-detail',
  templateUrl: '../../../../../base/app/stable/stable/stable-detail/stable-detail.component.html',
  styleUrls: ['./stable-detail.scss']
})
export class StableDetailComponent extends StableDetailBaseComponent implements OnInit {
 
	
  ngAfterViewInit(): void {
    this.onAfterViewInit()
  }

  ngOnInit(): void {
    super.onInit();
  }
 
}