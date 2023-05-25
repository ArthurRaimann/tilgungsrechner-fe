import { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { PaymentPlan } from '../src/model/paymentPlan.model';
import FormComponent from '../src/components/form.component';
import TableComponent from '../src/components/table.component';
import ToolTipComponent from '../src/components/tooltip.component';

export default function Home() {
  const [paymentPlan, setPaymentPlan] = useState<PaymentPlan>({
    monthlyPaymentAmount: '',
    restTotalAmount: '',
    yearlyPaymentPlans: [],
  });
  const [initialFetchDone, setInitialFetchDone] = useState(false);

  return (
    <Container sx={{ marginBottom: '50px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          marginBottom={'50px'}
          sx={{
            backgroundColor: '#E2001A',
            color: '#ffffff',
            padding: '10px',
            borderRadius: '5px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          Tilgungsplan Rechner
        </Typography>
        <Typography variant="h6" component="h6">
          Bedienungshinweis
          <ToolTipComponent />
        </Typography>

        <FormComponent
          setPaymentPlan={setPaymentPlan}
          setInitialFetchDone={setInitialFetchDone}
          initialFetchDone={initialFetchDone}
        />

        {initialFetchDone && (
          <Box sx={{ marginTop: '50px', width: '100%' }}>
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
