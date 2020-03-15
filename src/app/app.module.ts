import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { ScoreComponent } from './score/score.component';
import { GooglemapComponent } from './googlemap/googlemap.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    ScoreComponent,
    GooglemapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
