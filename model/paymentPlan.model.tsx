export interface MonthlyPaymentPlan {
  year: number;
  interestPortion: string;
  repaymentPortion: string;
  remainingDebt: string;
}

export interface PaymentPlan {
  monthlyPaymentAmount: string;
  restTotalAmount: string;
  yearlyPaymentPlans: MonthlyPaymentPlan[];
}
