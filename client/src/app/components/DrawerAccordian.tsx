import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

interface LinkItem {
    id: number;
    label: string;
    route: string;
    links: LinkItem[];
}

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
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

  export default function DrawerAccordion({linkItems}: {linkItems: LinkItem[]}) {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');
  
    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
      };
  
    return (
      <div>
        {linkItems.map((item) => (
            <Accordion key={item.id} expanded={expanded === item.label} onChange={handleChange(item.label)}>
            <AccordionSummary aria-controls={item.label} id={item.label}>
                <Link component='a' sx={{ textDecoration: 'none', color: 'text.primary', ':hover': { color: 'primary.main' } }}>
                    {item.label}
                </Link>
            </AccordionSummary>
            <AccordionDetails sx={{ alignItems: 'left' }}>
                {item.links.map((link) => (
                    <Button key={link.id} component='a' href={item.route + link.route} sx={{ width: '100%', height: '100%', justifyContent: 'left', color: 'text.primary', ':hover': { color: 'primary.main', bgcolor: 'transparent' } }}>
                        {link.label}
                    </Button>
                ))}
            </AccordionDetails>
            </Accordion>
        ))}
      </div>
    );
  }