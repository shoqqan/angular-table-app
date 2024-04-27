import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {TableComponent} from "./components/table/table.component";
import {TableHeaderDirective} from "./directives/table-header/table-header.directive";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TableComponent, TableHeaderDirective, MatFormField, MatInput],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
