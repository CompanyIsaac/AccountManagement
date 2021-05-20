import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { map } from 'rxjs/operators';
import Account from 'src/app/models/account.model';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss']
})
export class AccountsListComponent implements OnInit {

  accounts?: Account[];
  currentAccount?: Account;
  currentIndex = -1;
  title = '';

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.retrieveAccounts();
  }

  refreshList(): void {
    this.currentAccount = undefined;
    this.currentIndex = -1;
    this.retrieveAccounts();
  }

  retrieveAccounts(): void {
    this.accountService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.accounts = data;
    });
  }

  setActiveAccount(account: Account, index: number): void {
    this.currentAccount = account;
    this.currentIndex = index;
  }

}
