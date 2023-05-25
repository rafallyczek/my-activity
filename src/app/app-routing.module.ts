import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActivityComponent } from "./activity/activity.component";
import { ActivityAddComponent } from "./activity/activity-add/activity-add.component";

const routes: Routes = [
    { path: "activities", component: ActivityComponent },
    { path: "activities/add", component: ActivityAddComponent },
    { path: "", redirectTo: "activities", pathMatch: "full" },
    { path: "**", redirectTo: "activities" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }