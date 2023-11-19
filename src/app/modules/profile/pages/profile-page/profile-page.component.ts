import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '@modules/profile/models';
import { ProfileService } from '@modules/profile/services/profile.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html'
})
export class ProfilePageComponent {
  profiles: Profile[] = [
    {
      id: 1,
      name: 'David',
      imageUrl: '/assets/images/netflix-avatar1.png'
    },
    {
      id: 2,
      name: 'Marcelo',
      imageUrl: '/assets/images/netflix-avatar2.png'
    },
    {
      id: 3,
      name: 'Delfosti',
      imageUrl: '/assets/images/netflix-avatar3.png'
    },
    {
      id: 4,
      name: 'Anonymous',
      imageUrl: '/assets/images/netflix-avatar4.png'
    }
  ];

  constructor(private _profileService: ProfileService) {}

  selectProfile(profile: Profile) {
    this._profileService.setSelectedProfile(profile);
  }
}
