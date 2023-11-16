import { Injectable } from '@angular/core';
import { Profile } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private selectedProfileKey = 'profile';

  constructor() {}

  setSelectedProfile(profile: Profile) {
    localStorage.setItem(this.selectedProfileKey, JSON.stringify(profile));
  }

  getSelectedProfile(): Profile {
    const selectedProfile = localStorage.getItem(this.selectedProfileKey);
    return selectedProfile ? JSON.parse(selectedProfile) : null;
  }
}
