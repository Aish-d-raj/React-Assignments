import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Accordioncomponent(props) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Jhon</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <img src="{props.employee.profileimage}" alt="jhon" />
             <p>Jhon</p>
             <p>Hi I am a web developer currently working in xyz project</p>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Ram Krish</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <img src="{props.employee.profileimage}" alt="jhon" />
             <p>Ram Krish</p>
             <p>Hi I am a web developer currently working in project Z .</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
