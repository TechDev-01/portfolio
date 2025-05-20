import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
<<<<<<< HEAD
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, ContactComponent],
=======
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ProjectsComponent } from "./components/projects/projects.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, NavbarComponent, ProjectsComponent],
>>>>>>> b413a6ef4153fd96b6079533c47d69eed00c42c2
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
