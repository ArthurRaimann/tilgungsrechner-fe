import { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { PaymentPlan } from '../model/paymentPlan.model';
import FormComponent from '../components/form.component';
import TableComponent from '../components/table.component';

export default function Home() {
  const [paymentPlan, setPaymentPlan] = useState<PaymentPlan>({
    monthlyPaymentAmount: '',
    restTotalAmount: '',
    yearlyPaymentPlans: [],
  });
  const [initialFetchDone, setInitialFetchDone] = useState(false);

  return (
    <Container>
      <Box
        sx={{
          my: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" marginBottom={'50px'}>
          Tilgungsplan
        </Typography>

        <FormComponent
          setPaymentPlan={setPaymentPlan}
          setInitialFetchDone={setInitialFetchDone}
          initialFetchDone={initialFetchDone}
        />

        {initialFetchDone && (
          <Box marginTop={'50px'}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid #E2001A',
                borderRadius: '5px',
                padding: '10px',
              }}
              marginBottom={'50px'}
            >
              <Typography variant="h6" component="h6">
                {`Monatliche Rate: ${paymentPlan.monthlyPaymentAmount} €`}
              </Typography>
              <Typography variant="h6" component="h6">
                {`Restschuld am Ende der Zinsbindung: ${paymentPlan.restTotalAmount} €`}
              </Typography>
            </Box>
            <TableComponent paymentPlan={paymentPlan} />
          </Box>
        )}
      </Box>
    </Container>
  );
}
