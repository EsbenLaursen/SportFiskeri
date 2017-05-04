import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import {FishService} from './Services/fish.service';
import { ToptoolbarComponent } from './toptoolbar/toptoolbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdToolbarModule} from '@angular/material';
import 'hammerjs';
import { HomeComponent } from './home/home.component';
import { ForumIndexComponent } from './Forum/forum-index/forum-index.component';
import { TopiclistComponent } from './Forum/topiclist/topiclist.component';
import { TopicComponent } from './Forum/topic/topic.component';
import { RouterModule, Routes } from '@angular/router';
import {TopicService} from './Services/topic.service';
import { TopicdetailComponent } from './Forum/topicdetail/topicdetail.component';
import {MyDataService} from './Services/my-data.service';
import { ListComponent } from './list/list.component';
import {CommentService} from './Services/comment.service';
import {UserService} from './Services/user.service';
import { CreatetopicComponent } from './Forum/createtopic/createtopic.component';
import { FishComponent } from './Fish/fish/fish.component';
import { RegisterComponent } from './Fish/register/register.component';
import { FishlistComponent } from './Fish/fishlist/fishlist.component';

const routerConfig: Routes = [{
  path: '', component: HomeComponent},
  {path: 'forum', component: ForumIndexComponent},
  {path: 'register', component: RegisterComponent},
  {    path: 'detail/:id',
    component: TopicdetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ToptoolbarComponent,
    HomeComponent,
    ForumIndexComponent,
    TopiclistComponent,
    TopicComponent,
    TopicdetailComponent,
    ListComponent,
    CreatetopicComponent,
    FishComponent,
    RegisterComponent,
    FishlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule, MdButtonModule,
    RouterModule.forRoot(routerConfig)

  ],
  providers: [FishService, TopicService, MyDataService, CommentService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
