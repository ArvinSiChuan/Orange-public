/*
 *     This project is one of projects of ArvinSiChuan.com.
 *     Copyright (C) 2018, ArvinSiChuan.com <https://arvinsichuan.com>.
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ContentsHelloComponent} from '../contents-hello/contents-hello.component';
import {ContentsDetectionComponent} from '../contents-detection/contents-detection.component';
import {ContentsRegisterComponent} from '../contents-register/contents-register.component';


const contentsRoutes: Routes = [
  {path: '', component: ContentsHelloComponent},
  {path: 'detection', component: ContentsDetectionComponent},
  {path: 'register', component: ContentsRegisterComponent}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(contentsRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class ContentsRouterModule {
}
