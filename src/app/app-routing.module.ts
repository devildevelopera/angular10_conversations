import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QueueComponent } from './components/queue/queue.component';
import { HistoryComponent } from './components/history/history.component';
import { HistoryDetailComponent } from './components/history-detail/history-detail.component';
import { HelpComponent } from './components/help/help.component';
import { ArDetailContentComponent } from './components/ar-detail-content/ar-detail-content.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { OpenChatboxComponent } from './open-chatbox/open-chatbox.component';
import { TeamStatusComponent } from './components/team-status/team-status.component';
import { MyStatusComponent } from './components/my-status/my-status.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: OpenChatboxComponent,
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'search', component: SearchResultComponent },
      { path: 'ardetailcontent', component: ArDetailContentComponent },
      { path: 'queue', component: QueueComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'analytics-mystatus', component: MyStatusComponent },
      { path: 'analytics-teamstatus', component: TeamStatusComponent },
      { path: 'history-detail/:id', component: HistoryDetailComponent },
      { path: 'help', component: HelpComponent },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
