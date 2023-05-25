export interface MonthlyPaymentPlan {
  year: number;
  yearlyRate: string;
  interestPortion: string;
  repaymentPortion: string;
  remainingDebt: string;
}

export interface PaymentPlan {
  monthlyPaymentAmount: string;
  restTotalAmount: string;
  yearlyPaymentPlans: MonthlyPaymentPlan[];
}
