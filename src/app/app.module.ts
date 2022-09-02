import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './todoapp/header/header.component';
import { TodoComponent } from './todoapp/todo/todo.component';
import { TopicsComponent } from './topics/topics.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, TodoComponent, TopicsComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
