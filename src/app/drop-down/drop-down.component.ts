import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DropDownService } from '../drop-down.service';
@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css'],
})
export class DropDownComponent implements OnInit {
  locationData = new FormGroup({
    location: new FormControl(''),
    territory: new FormControl(''),
    campus: new FormControl(''),
  });
  allData: any;
  locationIdData: any;
  campusdata: any;
  LocationId: any;

  constructor(private dropDownService: DropDownService) {}

  ngOnInit(): void {
    this.dropDownService.getAll().subscribe((res) => {
      this.allData = res.locations;
    });
  }

/**get LocationId */
  getLocationId(event: any) {
    this.LocationId = event.value;
    this.dropDownService.getLocationId(event.value).subscribe((res) => {
      this.locationIdData = res.zones;
    });
  }

  /**get campusId */
  getCampus(event: any) {
    this.dropDownService.getCampus(event.value).subscribe((res) => {
      this.campusdata = res.result;
    });
  }
}
