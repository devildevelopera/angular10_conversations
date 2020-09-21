import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenChatboxComponent } from './open-chatbox/open-chatbox.component';
import { MiniChatboxComponent } from './mini-chatbox/mini-chatbox.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { FrameBarComponent } from './layout/frame-bar/frame-bar.component';
import { CallTabComponent } from './layout/call-tab/call-tab.component';
import { ActionsTabComponent } from './layout/actions-tab/actions-tab.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MutiLevelDropdownComponent,FormatTimePipe } from './components/muti-level-dropdown/muti-level-dropdown.component';
import { MoreDropdownComponent } from './components/more-dropdown/more-dropdown.component';
import { ChatTabsComponent } from './chat/chat-tabs/chat-tabs.component';
import { IncomingChatComponent } from './chat/incoming-chat/incoming-chat.component';
import { TranscriptComponent } from './chat/transcript/transcript.component';
import { EmailTabsComponent } from './email/email-tabs/email-tabs.component';
import { MoreTabsComponent } from './more/more-tabs/more-tabs.component';
import { EmailContentComponent } from './email/email-content/email-content.component';
import { VoiceTabsComponent } from './voice/voice-tabs/voice-tabs.component';
import { NotesComponent } from './common/notes/notes.component';
import { InfoComponent } from './common/info/info.component';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

//for ngrx
import { StoreModule } from '@ngrx/store';
import { reducers } from './ngrx/reducers/index.reducer'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ArDetailComponent } from './components/ar-detail/ar-detail.component';
import { ArActionsComponent } from './components/ar-actions/ar-actions.component';
import { TitleCaseWordPipe } from './pipe/title-case-word.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { MultiLevelDropdownBigComponent } from './components/multi-level-dropdown-big/multi-level-dropdown-big.component';
import { QueueComponent } from './components/queue/queue.component';
import { HistoryComponent } from './components/history/history.component';
import { HelpComponent } from './components/help/help.component';
import { HistoryDetailComponent } from './components/history-detail/history-detail.component';
import { CardQueueComponent } from './components/queue/card-queue/card-queue.component';
import { ArDetailContentComponent } from './components/ar-detail-content/ar-detail-content.component';
import { MyStatusComponent } from './components/my-status/my-status.component';
import { TeamStatusComponent } from './components/team-status/team-status.component';

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    OpenChatboxComponent,
    MiniChatboxComponent,
    FrameBarComponent,
    CallTabComponent,
    ActionsTabComponent,
    SearchBarComponent,
    MutiLevelDropdownComponent,
    MoreDropdownComponent,
    FormatTimePipe,
    ChatTabsComponent,
    IncomingChatComponent,
    TranscriptComponent,
    EmailTabsComponent,
    MoreTabsComponent,
    EmailContentComponent,
    VoiceTabsComponent,
    NotesComponent,
    InfoComponent,
    ArDetailComponent,
    ArActionsComponent,
    TitleCaseWordPipe,
    DashboardComponent,
    LoginComponent,
    SearchResultComponent,
    MultiLevelDropdownBigComponent,
    QueueComponent,
    HistoryComponent,
    HelpComponent,
    HistoryDetailComponent,
    CardQueueComponent,
    ArDetailContentComponent,
    MyStatusComponent,
    TeamStatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ChartsModule,
    // ngx-translate and the loader module
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  providers: [FormatTimePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
