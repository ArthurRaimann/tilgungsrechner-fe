import TextField from '@mui/material/TextField';
import { Button, Slider } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { PaymentPlan } from '../model/paymentPlan.model';

const FormComponent = ({
  setPaymentPlan,
  setInitialFetchDone,
  initialFetchDone,
}: {
  setPaymentPlan: React.Dispatch<React.SetStateAction<PaymentPlan>>;
  setInitialFetchDone: React.Dispatch<React.SetStateAction<boolean>>;
  initialFetchDone: boolean;
}) => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [initialRepayment, setInitialRepayment] = useState(0);
  const [fixedInterestPeriod, setFixedInterestPeriod] = useState(10);
  const [loading, setLoading] = useState(false);

  const API_URL = 'https://tilgungsrechner-api.herokuapp.com/payment-plan';

  useEffect(() => {
    if (initialFetchDone) {
      fetchPaymentPlan();
    }
  }, [
    loanAmount,
    interestRate,
    initialRepayment,
    fixedInterestPeriod,
    initialFetchDone,
  ]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetchPaymentPlan();
    setInitialFetchDone(true);
  };

  const fetchPaymentPlan = async () => {
    if (
      loanAmount < 0 ||
      interestRate < 0 ||
      initialRepayment < 0 ||
      fixedInterestPeriod < 0
    ) {
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          loanAmount,
          interestRate,
          initialRepayment,
          fixedInterestPeriod,
        }),
      });

      setPaymentPlan(await res.json());
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const marks = [
    {
      value: 1,
      label: '1 Jahr',
    },
    {
      value: 10,
      label: '10 Jahre',
    },
    {
      value: 20,
      label: '20 Jahre',
    },
    {
      value: 30,
      label: '30 Jahre',
    },
  ];

  function valuetext(value: number) {
    return `${value}`;
  }

  return (
    <form onSubmit={onSubmit}>
      <Box
        sx={{
          minWidth: 120,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
        marginBottom={'20px'}
      >
        <TextField
          required
          placeholder="250000"
          type="number"
          id="loanAmount"
          label="Darlehensbetrag"
          variant="outlined"
          value={loanAmount ? loanAmount : ''}
          sx={{ marginRight: '10px', marginTop: '15px' }}
          onChange={(e) => {
            setLoanAmount(e.target.value ? parseInt(e.target.value) : 0);
          }}
        />
        <TextField
          required
          placeholder="2"
          type="number"
          id="interestRate"
          label="Sollzinssatz"
          variant="outlined"
          inputProps={{ min: 0.01, step: 0.01 }}
          value={interestRate ? interestRate : ''}
          sx={{ marginRight: '10px', marginTop: '15px' }}
          onChange={(e) => {
            setInterestRate(e.target.value ? parseFloat(e.target.value) : 0);
          }}
        />
        <TextField
          required
          placeholder="3"
          type="number"
          id="initialRepayment"
          label="Tilgungssatz"
          variant="outlined"
          inputProps={{ min: 0.01, step: 0.01 }}
          value={initialRepayment ? initialRepayment : ''}
          sx={{ marginRight: '10px', marginTop: '15px' }}
          onChange={(e) => {
            setInitialRepayment(
              e.target.value ? parseFloat(e.target.value) : 0
            );
          }}
        />
      </Box>
      <Box sx={{ padding: '0 15px 0 10px' }} marginTop={'20px'}>
        <Typography id="input-slider" gutterBottom>
          Zinsbindungsdauer:
        </Typography>
        <Slider
          aria-label="input-slider"
          value={fixedInterestPeriod}
          getAriaValueText={valuetext}
          step={1}
          min={1}
          max={30}
          valueLabelDisplay="auto"
          marks={marks}
          style={{ color: '#E2001A' }}
          onChange={(_e, value) => {
            setFixedInterestPeriod(value as number);
          }}
        />
      </Box>
      <Button
        type="submit"
        variant="contained"
        style={{
          backgroundColor: '#E2001A',
          color: '#ffffff',
          marginTop: '20px',
        }}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Berechnen'}
      </Button>
    </form>
  );
};

export default FormComponent;
