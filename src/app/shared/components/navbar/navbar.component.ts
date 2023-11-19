import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Profile } from 'src/app/modules/profile/models';
import { ProfileService } from 'src/app/modules/profile/services/profile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  showMobileMenu = false;
  profile!: Profile;
  toggleNavbar(){
    this.showMobileMenu = !this.showMobileMenu;
  }

  constructor(private _profileService: ProfileService, private _authService: AuthService) {}

  ngOnInit(): void {
    this.profile = this._profileService.getSelectedProfile();
  }

  logout () {
    this._authService.logout();
  }
}
