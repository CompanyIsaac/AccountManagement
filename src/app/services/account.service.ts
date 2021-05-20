import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import Account from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private dbPath = '/accounts';

  accountsRef: AngularFirestoreCollection<Account>;

  constructor(private db: AngularFirestore) {
    this.accountsRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Account> {
    return this.accountsRef;
  }

  create(account: Account): any {
    console.log(account)
    return this.accountsRef.add({ ...account });
  }

  update(id: string, data: any): Promise<void> {
    return this.accountsRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.accountsRef.doc(id).delete();
  }
}
