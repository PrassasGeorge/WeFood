import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contactUs(){
    alert('Λάβαμε τα σχόλιά σου.. θα επικοινωνήσουμε μαζί σου σύντομα!')
  }

}
