import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

interface Detail {
    id: number;
    label: string;
    text: string[];
}

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    borderBlock: `1px solid ${theme.palette.divider}`,
    width: '100%',
    height: '100%',
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '& .MuiButtonBase-root': {
        margin: theme.spacing(0),
        padding: theme.spacing(0),
        fontWeight: 'bold'
    },
  }));

  const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
      expandIcon={<AddRoundedIcon sx={{ fontSize: '1.5rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiAccordionSummary-expandIconWrapper': {
        margin: theme.spacing(0),
        padding: theme.spacing(0),
    },
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      width: '100%',
      height: '100%',
      padding: theme.spacing(0),
      margin: theme.spacing(0),
      marginLeft: theme.spacing(1),
    },
    '& .MuiAccordionSummary-content, p': {
      fontWeight: 'bold'    
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(1),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

  export default function DetailAccordian({itemDetails}: {itemDetails: Detail[]}) {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');
  
    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
      };
  
    return (
      <div>
        {itemDetails.map((item) => (
            <Accordion key={item.id} expanded={expanded === item.label} onChange={handleChange(item.label)} sx={{ mr:5 }}>
              <AccordionSummary aria-controls={item.label} id={item.label}>
                  <Typography variant='body1' sx={{ textDecoration: 'none', color: 'text.primary', ':hover': { color: 'primary.main' } }}>
                      {item.label}
                  </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ alignItems: 'left' }}>
                {/* <ul> */}
                  {item.text.map((detail, index) => (
                      <Typography variant='body2' component='li' sx={{ py: 0.5 }}>
                          {detail}
                      </Typography>
                  ))}
                  {/* </ul> */}
              </AccordionDetails>
            </Accordion>
        ))}
      </div>
    );
  }