'use client'

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface StyledTabProps {
  label: string;
}

const AntTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    backgroundColor: 'transparent',
  }
});

const AntTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    '&:hover': {
      opacity: 1,
    },
    '&.Mui-selected': {
      backgroundColor: '#fff',
      borderColor: '#fff',
      color: 'black'
    },
    padding: theme.spacing(3)
  }),
);

function AuthTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`auth-tabpanel-${index}`}
      aria-labelledby={`auth-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Login() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth='sm' sx={{ my: 4 }}>
      <Typography variant='h4' sx={{wdith: '100vw', textAlign: 'center', fontWeight: 'bold', my: 6}}>
        TravelWear
      </Typography>
      <Box sx={{ width: '100%', bgcolor: 'white', color: 'black', my: 2 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <AntTabs value={value} onChange={handleChange} aria-label="authentication tabs" centered>
            <AntTab label="Sign in" sx={{ width: '50%', position: 'relative', color:'black', bgcolor: '#eee', fontWeight: 'bold', borderRight: '1px rgba(0,0,0,0.1) solid' }} {...a11yProps(0)} />
            <AntTab label="Create Account" sx={{ width: '50%', position: 'relative', color:'black', bgcolor: '#eee', fontWeight: 'bold', borderLeft: '1px rgba(0,0,0,0.1) solid', ':target': { bgcolor: 'white' } }} {...a11yProps(1)} />
          </AntTabs>
        </Box>
        <AuthTabPanel value={value} index={0}>
          <LoginForm />
        </AuthTabPanel>
        <AuthTabPanel value={value} index={1}>
          <SignUpForm />
        </AuthTabPanel>
      </Box>
      <Link variant='body2' sx={{ display: 'block', width: '100%', textAlign: 'center', textDecoration: 'none', pt: 2 }}>
        Privacy Policy
      </Link>
      <Link variant='body2' sx={{ display: 'block', width: '100%', textAlign: 'center', textDecoration: 'none' }}>
        Terms and Conditions
      </Link>
    </Container>
  );
}