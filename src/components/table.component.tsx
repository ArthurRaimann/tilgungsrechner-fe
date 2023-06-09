import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { MonthlyPaymentPlan, PaymentPlan } from '../model/paymentPlan.model';

const TableComponent = ({ paymentPlan }: { paymentPlan: PaymentPlan }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Jahr</TableCell>
            <TableCell>Rate in €</TableCell>
            <TableCell>Zinssatz in €</TableCell>
            <TableCell>Tilgunssatz in €</TableCell>
            <TableCell>Restschuld in €</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paymentPlan?.yearlyPaymentPlans.map((row: MonthlyPaymentPlan) => (
            <TableRow
              key={row.year}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
              }}
            >
              <TableCell>{row.year}</TableCell>
              <TableCell>{row.yearlyRate}</TableCell>
              <TableCell>{row.interestPortion}</TableCell>
              <TableCell>{row.repaymentPortion}</TableCell>
              <TableCell>{row.remainingDebt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
