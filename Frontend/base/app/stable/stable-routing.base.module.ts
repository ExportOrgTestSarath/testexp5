import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateGuard } from '@baseapp/auth.can-deactivate-guard.service';

import { StableDetailComponent } from '@app/stable/stable/stable-detail/stable-detail.component';
import { StableListComponent } from '@app/stable/stable/stable-list/stable-list.component';

export const routes: Routes = [

{
     path: 'stabledetail',
     component: StableDetailComponent,
     canDeactivate: [ CanDeactivateGuard ],
     data: {
     	label: "STABLE_DETAIL",
        breadcrumb: "STABLE_DETAIL",
        roles : [					"all"
				]
     }
},
{
     path: 'stablelist',
     component: StableListComponent,
     canDeactivate: [ CanDeactivateGuard ],
     data: {
     	label: "STABLE_LIST",
        breadcrumb: "STABLE_LIST",
        roles : [					"all"
				]
     }
}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class StableBaseRoutingModule
{
}
