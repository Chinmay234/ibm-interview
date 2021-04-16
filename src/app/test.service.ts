import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: "root" })
export class TestService {
  constructor() {}

  data = [
    {
      StudentName: "Raj",
      StudentID: "STU_001",
      DeptID: "Computer Science"
    },
    {
      StudentName: "Sathvik",
      StudentID: "STU_002",
      DeptID: "Mechanical"
    },
    {
      StudentName: "Kavitha",
      StudentID: "STU_003",
      DeptID: "Information Technology"
    },
    {
      StudentName: "Ramya",
      StudentID: "STU_004",
      DeptID: "Electical and Electronics"
    }
  ];

  private d = new BehaviorSubject<any>(this.data);
  public dataSub = this.d.asObservable();

  getData() {
    return this.dataSub;
  }
}
