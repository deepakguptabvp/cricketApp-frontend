import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { ContestComponent } from './pages/admin-dashboard/contest/contest.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { PlayerComponent } from './pages/admin-dashboard/player/player.component';
import { TeamComponent } from './pages/admin-dashboard/team/team.component';
import { MatchFixtureComponent } from './pages/admin-dashboard/match-fixture/match-fixture.component';
import { MapContestFixtureComponent } from './pages/admin-dashboard/map-contest-fixture/map-contest-fixture.component';
import { RulesComponent } from './pages/admin-dashboard/rules/rules.component';
import { CreditsComponent } from './pages/admin-dashboard/credits/credits.component';
import { UserContestComponent } from './pages/user-contest/user-contest.component';
import { UserMatchFixturesComponent } from './pages/user-match-fixtures/user-match-fixtures.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin-login',
    component: AdminLoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'user-register',
    component: UserRegisterComponent,
    pathMatch: 'full'
  },
  {
    path: 'user-login',
    component: UserLoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    pathMatch: 'full',
  },
  {
    path:'admin-dashboard/contest',
    component: ContestComponent,
    pathMatch: 'full'
  },
  {
    path:'admin-dashboard/player',
    component: PlayerComponent,
    pathMatch: 'full'
  },
  {
    path:'admin-dashboard/team',
    component: TeamComponent,
    pathMatch: 'full'
  },
  {
    path:'admin-dashboard/matchFixtures',
    component: MatchFixtureComponent,
    pathMatch: 'full'
  },
  {
    path:'admin-dashboard/map-contest-fixture',
    component: MapContestFixtureComponent,
    pathMatch: 'full'
  },
  {
    path:'admin-dashboard/rules',
    component: RulesComponent,
    pathMatch: 'full'
  },
  {
    path:'admin-dashboard/credits',
    component: CreditsComponent,
    pathMatch: 'full'
  },
  {
    path:'user-contest',
    component: UserContestComponent,
    pathMatch: 'full'
  },
  {
    path:'user-match-fixtures',
    component: UserMatchFixturesComponent,
    pathMatch: 'full'
  },
];   

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
