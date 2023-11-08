import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { TeamComponent } from './pages/admin-dashboard/team/team.component';
import { PlayerComponent } from './pages/admin-dashboard/player/player.component';
import { ContestComponent } from './pages/admin-dashboard/contest/contest.component';
import { MatchFixtureComponent } from './pages/admin-dashboard/match-fixture/match-fixture.component';
import { RulesComponent } from './pages/admin-dashboard/rules/rules.component';
import { MapContestFixtureComponent } from './pages/admin-dashboard/map-contest-fixture/map-contest-fixture.component';
import { CreditsComponent } from './pages/admin-dashboard/credits/credits.component';
import { UserContestComponent } from './pages/user-contest/user-contest.component';
import { UserMatchFixturesComponent } from './pages/user-match-fixtures/user-match-fixtures.component';
import { UserPlayersComponent } from './pages/user-players/user-players.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    UserLoginComponent,
    UserRegisterComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    SidebarComponent,
    TeamComponent,
    PlayerComponent,
    ContestComponent,
    MatchFixtureComponent,
    RulesComponent,
    MapContestFixtureComponent,
    CreditsComponent,
    UserContestComponent,
    UserMatchFixturesComponent,
    UserPlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatListModule,
    MatTabsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
