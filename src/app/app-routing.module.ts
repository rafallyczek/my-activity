import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StatisticsComponent } from "./statistics/statistics.component";

const routes: Routes = [
    { path: "statistics", component: StatisticsComponent },
    { path: "", redirectTo: "activities", pathMatch: "full" },
    { path: "**", redirectTo: "activities" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }