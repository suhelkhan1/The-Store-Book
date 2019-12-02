import { IAmount } from './amount.model';
import { IDistributor } from './distributor.model';

export interface ICredit {
  amount: IAmount;
  descrption: string;
  distributor: IDistributor;
  payment_status: boolean;
  _id: string;
}

export interface ICreditObject {
  data: ICredit[];
}

