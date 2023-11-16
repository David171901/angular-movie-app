import { Component, HostListener, OnInit } from '@angular/core';
import { Profile } from 'src/app/modules/profile/models';
import { ProfileService } from 'src/app/modules/profile/services/profile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showMobileMenu = false;
  profile!: Profile;
  toggleNavbar(){
    this.showMobileMenu = !this.showMobileMenu;
  }

  constructor(private _profileService: ProfileService) {}

  ngOnInit(): void {
    this.profile = this._profileService.getSelectedProfile();
  }
}
