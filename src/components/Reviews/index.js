// import React from "react";
// import Icon1 from '../../images/morning.png';
// import Icon2 from '../../images/evening.png';
// import Icon3 from '../../images/wholeday.png';
// import {
//   ServicesContainer,
//   ServicesH1,
//   ServicesH2,
//   ServicesCard,
//   ServicesIcon,
//   ServicesP,
//   ServicesWrapper,
// } from "./ReviewElements";

// const Reviews = () => {
//   return (
//     <ServicesContainer  id="services">
//       <ServicesH1>Our Services</ServicesH1>
//       <ServicesWrapper>
//         <ServicesCard>
//           <ServicesIcon src={Icon1} />
//           <ServicesH2>Saifur Rahman</ServicesH2>
//           <ServicesP>
//             {/* <h3>⭐⭐⭐⭐⭐</h3> */}
//             <h3>Cost = 700 ruppes/month</h3>
//             Perfect timing for one who loves to start early
//           </ServicesP>
//         </ServicesCard>
//         <ServicesCard>
//           <ServicesIcon src={Icon2} />
//           <ServicesH2>Utkarsh Shresth</ServicesH2>
//           <ServicesP>
//           {/* <h3>⭐⭐⭐⭐</h3> */}
//             <h3>Cost = 600 ruppes/month</h3>
//             I got you late night working lover
//           </ServicesP>
//         </ServicesCard>
//         <ServicesCard>
//           <ServicesIcon src={Icon3} />
//           <ServicesH2>Ankit Kumar</ServicesH2>
//           <ServicesP>
//           {/* <h3>⭐⭐⭐⭐⭐</h3> */}
//             <h3>Cost = 900 ruppes/month</h3>
//             I can smell hardworking attitude!
//           </ServicesP>
//         </ServicesCard>
//       </ServicesWrapper>
//     </ServicesContainer>
//   );
// };

// export default Reviews;




import React from "react";
import Icon1 from '../../images/saif.png';
import Icon2 from '../../images/utkarsh.png';
import Icon3 from '../../images/ankit.png';
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesCard,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ReviewElements";

const Services = () => {
  return (
    <ServicesContainer id="signup">
      <ServicesH1>Rating And Reviews</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Saifur Rahman</ServicesH2>
          <ServicesP>
            <p>⭐⭐⭐⭐⭐</p>
            {/* <h3>Cost = 700 ruppes/month</h3> */}
            The one of the best library that i havw ever seen and the peacefull environment that i got here !</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Utkarsh Shresth</ServicesH2>
          <ServicesP>
          <p>⭐⭐⭐⭐</p>
            {/* <h3>Cost = 600 ruppes/month</h3> */}
            I had cracked jee mains while studing in this library.Highly recommended!
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Ankit Kumar</ServicesH2>
          <ServicesP>
          <h3>⭐⭐⭐⭐⭐</h3>
            {/* <h3>Cost = 900 ruppes/month</h3> */}
            Everthing available here is good like wifi,table ,lamp and drinking water. and you will require nothing extra to sit for long hours of study. 
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;




