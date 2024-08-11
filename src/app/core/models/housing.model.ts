export interface Housing {
  tenantName: string;
  images: string[];
  address: string;
  type: string;
  monthlyFee: number;
  insurance: InsuranceInfo[];
  deposit: DepositInfo[];
  documents: DocumentInfo[];
  notice: NoticeInfo;
  [key: string]: any;
}
interface InsuranceInfo {
  date: Date;
  duration: string;
  amount: number;
  status: string;
}

interface DepositInfo {
  date: Date;
  duration: string;
  amount: number;
  status: string;
}

interface DocumentInfo {
  date: Date;
  duration: string;
  type: string;
}

interface NoticeInfo {
  date: Date;
  delay: string;
}
