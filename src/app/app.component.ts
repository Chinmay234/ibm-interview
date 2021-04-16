import { Component, OnInit } from "@angular/core";
import { TestService } from "./test.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private testService: TestService) {}
  title = "CodeSandbox";
  data = [];

  name = "";

  ngOnInit() {
    this.testService.getData().subscribe((data) => {
      console.log(data);
      this.data = data;
    });
  }
}
