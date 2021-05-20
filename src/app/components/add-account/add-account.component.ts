import { Component, OnInit } from '@angular/core';
import Account from 'src/app/models/account.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss']
})
export class AddAccountComponent implements OnInit {

  account: Account = new Account();
  submitted = false;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  saveAccount(): void {
    this.accountService.create(this.account).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newAccount(): void {
    this.submitted = false;
    this.account = new Account();
  }

}
