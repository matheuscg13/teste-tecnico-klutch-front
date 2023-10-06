import { ReactNode, Dispatch, SetStateAction } from "react";

export interface iContextProps {
  children: ReactNode;
}

export interface iMainContext {
  teste: string;
  user: iUser | any;
  setUser: Dispatch<SetStateAction<{}>>;
  installments: iInstallmentsData | any;
  setInstallments: Dispatch<SetStateAction<never[]>>;
  bodyRequest: iBodyRequest | any;
  setBodyRequest: Dispatch<SetStateAction<{}>>;
  partnerInstallments: iInstallmentsData | any;
  setPartnerInstallments: Dispatch<SetStateAction<never[]>>;
  footerData: iFooterData | any;
  setFooterData: Dispatch<SetStateAction<never[]>>;
}

export interface iBodyRequest {
  client: number;
  number_of_installments: number;
  desired_value: number;
  card_number: string;
  card_validity: string;
  card_cvc: string;
}

export interface iInstallment {
  interest: number;
  comission: number;
  total_value: number;
  installment_value: number;
  number_of_installments: number;
  table: string;
}

export interface iLineTable {
  installmentData: iInstallment;
}

interface iInstallmentsData {
  installments_default_table: iInstallment[];
  installments_partner_table: iInstallment[];
}

interface iUser {
  id: number;
  password: string;
  last_login: null | string;
  is_superuser: boolean;
  username: string;
  email: string;
  is_staff: boolean;
  is_active: boolean;
  date_joined: string;
  first_name: string;
  last_name: string;
  cpf: string;
  bank_label: string;
  account_type_label: string;
  account_number: string;
  groups: any[];
  user_permissions: any[];
}

export interface iDesiredValue {
  desired_value: number;
}

export interface iNumberOfInstallments {
  number_of_installments: string | number;
}

export interface iFooterData {
  number_of_installments: number;
  table: string;
  installment_value: number;
}
