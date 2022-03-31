import React from "react";
import Icon1 from '../../images/morning.png';
import Icon2 from '../../images/evening.png';
import Icon3 from '../../images/wholeday.png';
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesCard,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Morning Shift</ServicesH2>
          <ServicesP>
            <h3>7:00 am to 2:00 pm</h3>
            <h3>Cost = 700 ruppes/month</h3>
            Perfect timing for one who loves to start early
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Evening Shift</ServicesH2>
          <ServicesP>
          <h3>2:00 pm to 9:00 pm</h3>
            <h3>Cost = 600 ruppes/month</h3>
            I got you late night working lover
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Whole Day Shift</ServicesH2>
          <ServicesP>
          <h3>7:00 pm to 9:00 pm</h3>
            <h3>Cost = 900 ruppes/month</h3>
            I can smell hardworking attitude!
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
