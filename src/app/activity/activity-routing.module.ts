import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './activity.component';
import { ActivityAddComponent } from './activity-add/activity-add.component';

const routes: Routes = [
  { path: "activities", component: ActivityComponent, children: [
    { path: "add", component: ActivityAddComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityRoutingModule { }
