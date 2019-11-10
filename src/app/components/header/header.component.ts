import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  //window;onscroll = scrollFunction();

  scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.getElementById("header").style.padding = "30px 10px";
      document.getElementById("logo").style.fontSize = "25px";
    } else {
      document.getElementById("navbar").style.padding = "80px 10px";
      document.getElementById("logo").style.fontSize = "35px";
    }
  }
}
