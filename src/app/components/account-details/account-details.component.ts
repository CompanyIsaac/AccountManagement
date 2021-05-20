import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import Account from 'src/app/models/account.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit, OnChanges {

  @Input() account?: Account;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentAccount: Account = {
    name: '',
    state: '',
    accountType: '',
  };
  message = '';

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentAccount = { ...this.account };
  }


  updateAccount(): void {
    const data = {
      name: this.currentAccount.name,
      state: this.currentAccount.state,
      accountType: this.currentAccount.accountType
    };

    if (this.currentAccount.id) {
      this.accountService.update(this.currentAccount.id, data)
        .then(() => this.message = 'The account was updated successfully!')
        .catch(err => console.log(err));
    }
  }

  deleteAccount(): void {
    if (this.currentAccount.id) {
      this.accountService.delete(this.currentAccount.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The account was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }

}
