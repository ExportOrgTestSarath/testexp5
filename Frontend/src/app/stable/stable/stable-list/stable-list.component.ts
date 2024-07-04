import { Component, OnInit,inject } from '@angular/core';
import { StableListBaseComponent } from '@baseapp/stable/stable/stable-list/stable-list.base.component';
import { StableService } from '@baseapp/stable/stable/stable.service';


@Component({
  selector: 'app-stable-list',
  templateUrl: '../../../../../base/app/stable/stable/stable-list/stable-list.component.html',
  styleUrls: ['./stable-list.scss']
})
export class StableListComponent extends StableListBaseComponent implements OnInit {
 
	
  ngAfterViewInit(): void {
    this.onAfterViewInit()
  }

  ngOnInit(): void {
    super.onInit();
  }
 
}