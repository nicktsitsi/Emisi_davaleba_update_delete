import { Component } from "@angular/core";

@Component({
  selector: "app-students-page",
  template: `
    <h2>
      Students
      <a routerLink="/create">
        Create!
      </a>
    </h2>
    <app-students-filter/>
    <app-students-list/>
  `,
  styles: [`

  
  h2 {
  
  color: #333;
}

a {
  color: #3498db;
  text-decoration: none;
  margin-left: 10px;
}

a:hover {
  text-decoration: underline;
}

`],
})
export class StudentsPageComponent {
}
