import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActivitiesComponent } from "./activities/activities.component";

const routes: Routes = [
    { path: "activities", component: ActivitiesComponent },
    { path: "", redirectTo: "activities", pathMatch: "full" },
    { path: "**", redirectTo: "activities" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }