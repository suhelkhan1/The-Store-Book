import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/services/api/api.service';
import { environment } from 'src/environments/environment';
import { IExpense, IDistributor } from 'src/app/models';

@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.page.html',
  styleUrls: ['./add-sale.page.scss'],
})
export class AddSalePage implements OnInit {

  saleForm: FormGroup;
  amount: FormControl;
  expense: FormControl;
  credits: FormControl;
  cutomerBorrows: FormControl;

  expenses: IExpense[] = [];
  distributors: IDistributor[] = [];
  customers: IDistributor[] = [];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getAllExpenses();
    this.getAllDistributor();
    this.getAllCustomers();
  }

  formInit() {
    this.saleForm = new FormGroup({
      amount: this.amount = new FormControl('', [Validators.required]),
      expense: this.expense = new FormControl('', [Validators.required]),
    });
  }

  getAllExpenses() {
    this.apiService.getAll(environment.APP.API_URLS.EXPENSES).subscribe((res: any) => {
      this.expenses = res.data;
    });
  }
  getAllDistributor() {
    this.apiService.getAll(environment.APP.API_URLS.DISTRIBUTOR).subscribe((res: any) => {
      this.distributors = res.data;
    });
  }
  getAllCustomers() {
    this.apiService.getAll(environment.APP.API_URLS.CUSTOMER).subscribe((res: any) => {
      this.customers = res.data;
    });
  }
}
