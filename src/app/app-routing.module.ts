import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActivityComponent } from "./activity/activity.component";

const routes: Routes = [
    { path: "activities", component: ActivityComponent },
    { path: "", redirectTo: "activities", pathMatch: "full" },
    { path: "**", redirectTo: "activities" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }