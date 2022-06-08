import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import { DetailsComponent } from "./details/details.component";
import { InsertComponent } from "./insert/insert.component";
import { ListComponent } from "./list/list.component";
import { UpdateComponent } from "./update/update.component";
const routes: Routes =[
    {path: 'pizza', component: ListComponent},
    {path: 'add', component:InsertComponent},
    {path : 'update/:id' , component: UpdateComponent},
    {path: 'details/:id' , component:DetailsComponent},
    {path: '', redirectTo: 'pizza', pathMatch: 'full'}
  
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}