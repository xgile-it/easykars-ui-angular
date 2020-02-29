import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Addcar } from "src/app/models/addcar";

@Component({
  selector: "app-addcar",
  templateUrl: "./addcar.component.html",
  styleUrls: ["./addcar.component.scss"]
})
export class AddcarComponent implements OnInit {
  constructor(private toastr: ToastrService) {}

  dynamicArray: Array<Addcar> = [];
  newDynamic: any = {};
  ngOnInit(): void {
    // tslint:disable-next-line:max-line-length
    this.newDynamic = {
      make: "Kia",
      modal: "Picanto",
      year: "2012",
      transmission: "Automatic",
      bodyType: "",
      fuelType: "",
      color: "",
      kilometers: "",
      price: "",
      perchesDate: "",
      vinNumber: "",
      registrationNumber: "",
      licenceNumber: ""
    };
    this.dynamicArray.push(this.newDynamic);
  }
  addRow(index) {
    // tslint:disable-next-line:max-line-length
    this.newDynamic = {
      make: "",
      modal: "",
      year: "",
      transmission: "",
      bodyType: "",
      fuelType: "",
      color: "",
      kilometers: "",
      price: "",
      perchesDate: "",
      vinNumber: "",
      registrationNumber: "",
      licenceNumber: ""
    };
    this.dynamicArray.push(this.newDynamic);
    this.toastr.success("New row added successfully", "New Row");
    console.log(this.dynamicArray);
    return true;
  }

  deleteRow(index) {
    if (this.dynamicArray.length == 1) {
      this.toastr.error(
        "Can't delete the row when there is only one row",
        "Warning"
      );
      return false;
    } else {
      this.dynamicArray.splice(index, 1);
      this.toastr.warning("Row deleted successfully", "Delete row");
      return true;
    }
  }
}
