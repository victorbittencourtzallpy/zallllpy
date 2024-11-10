import { CandidateAbility } from './Ability';

export interface IMinimalOpening {
  id: string | number;
  title: string;
  open_date: string; // ISO format 'YYYY-MM-DD'
  number_of_applicants: number | string;
  status: 'open' | 'closed' | 'in_progress';
}

export interface IOpening extends IMinimalOpening {
  description: string;
  responsibilities: string[];
  requirements: {
    mandatory: {
      expanded: string[];
      contracted: string[];
    };
    desirable: {
      expanded: string[];
      contracted: string[];
    };
  };
  location: string;
  contract_type: string;
  benefits: string[];
  close_date: string; // ISO format 'YYYY-MM-DD'
}
