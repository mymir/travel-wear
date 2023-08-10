import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

interface FilterItem {
    id: number;
    label: string;
    items: string[];
}

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    borderBlock: `1px solid ${theme.palette.divider}`,
    borderBottom: 0,
    '&:before': {
      display: 'none',
    },
  }));

  const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    flexDirection: 'row-reverse',
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
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

  export default function SidebarAccordian({filterItems}: {filterItems: FilterItem[]}) {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');
  
    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
      };
  
    return (
      <div>
        {filterItems.map((item) => (
            <Accordion key={item.id} expanded={expanded === item.label} onChange={handleChange(item.label)} sx={{ mr:5 }}>
              <AccordionSummary aria-controls={item.label} id={item.label}>
                  <Typography variant='body1' sx={{ textDecoration: 'none', color: 'text.primary', ':hover': { color: 'primary.main' } }}>
                      {item.label}
                  </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ alignItems: 'left' }}>
                  {item.items.map((filter, index) => (
                      <Typography variant='body2' key={index} sx={{ width: '100%', height: '100%', justifyContent: 'left', color: 'text.primary', ':hover': { color: 'primary.main', bgcolor: 'transparent' } }}>
                          {filter}
                      </Typography>
                  ))}
              </AccordionDetails>
            </Accordion>
        ))}
      </div>
    );
  }