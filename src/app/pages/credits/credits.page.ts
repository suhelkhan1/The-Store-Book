import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api/api.service';
import { environment } from '../../../environments/environment';
import { ICreditObject } from '../../models/credit.model';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.page.html',
  styleUrls: ['./credits.page.scss'],
})
export class CreditsPage implements OnInit {

  credits = {} as ICreditObject;
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getAllCredits();
  }

  getAllCredits() {
    const url = `${environment.APP.API_URLS.CREDITS}/5de2415352ef0615bde4286a`;
    this.apiService.get(url).subscribe((res: any) => {
      this.credits = res.data;
    });
  }

}
