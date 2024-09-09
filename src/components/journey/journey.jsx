import React from "react";
import {
  DataText,
  JourneyContainer,
  JourneyInfoBox,
  JourneyInfosWrapper,
  StyledSpan,
  TitleJob,
} from "../../styles/journeyStyle";
///mui
import Stepper from "@mui/joy/Stepper";
import Step from "@mui/joy/Step";
import StepIndicator, { stepIndicatorClasses } from "@mui/joy/StepIndicator";
import SchoolIcon from "@mui/icons-material/School";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { Element } from "react-scroll";

const JourneyComponent = () => {
  return (
    <Element name="journey" className="element">
    <JourneyContainer>
      <h1>My Journey</h1>
      <p>
        I will upload all achievements and updates in my career as a Front-End
        Developer.
      </p>

      <JourneyInfosWrapper>
        <Stepper
          size="lg"
          orientation="vertical"
          sx={{
            // border: "1px solid red",
            width: "100%",
            maxWidth: "750px",
            "--Step-connectorInset": "-100%",
            "--Step-connectorRadius": "0px",
            "--Step-gap": "15px",
            "--StepIndicator-size": "48px",
            "--Step-connectorThickness": "2px",
            [`& .${stepIndicatorClasses.root}`]: {
              borderColor: "primary.300",
              color: "black",
              bgcolor: "rgb(191 219 254)",
              height: "100%",
              borderWidth: 0,
            },
          }}
        >
          <Step
            orientation="vertical"
            indicator={
              <StepIndicator variant="outlined" color="primary">
                <AccountBalanceIcon />
              </StepIndicator>
            }
          >
            <JourneyInfoBox>
              <TitleJob>
                {" "}
                Freshman at <StyledSpan>Joongbu University</StyledSpan>
              </TitleJob>
              <DataText> South Korea, September 2022</DataText>
              <DataText $Color115>
                Embarked on studies at Joongbu University with a focus on
                international trade and economic strategies. Core coursework
                includes international trade dynamics, trade policy analysis,
                global market strategies, and economic diplomacy.
              </DataText>
            </JourneyInfoBox>
          </Step>
          <Step
            orientation="vertical"
            indicator={
              <StepIndicator variant="outlined" color="primary">
                <SchoolIcon />
              </StepIndicator>
            }
          >
            <JourneyInfoBox>
              <TitleJob> Academic Lyceum Graduation</TitleJob>
              <DataText>
                Lola Academic Lyceum, Namangan State University, Uzbekistan,
                2021
              </DataText>
              <DataText $Color115>
                Completed studies with a concentration in international
                languages, gaining proficiency in multiple languages and
                cultural insights.
              </DataText>
            </JourneyInfoBox>
          </Step>
          <Step
            orientation="vertical"
            indicator={
              <StepIndicator variant="outlined" color="primary">
                En
              </StepIndicator>
            }
          >
            <JourneyInfoBox>
              <TitleJob> English Proficiency Test,</TitleJob>
              <DataText> Tashkent, Uzbekistan, May 2022</DataText>
              <DataText $Color115>
                Achieved a respectable band score, reflecting solid performance
                despite some challenges during the test. A good foundation for
                further improvement.
              </DataText>
            </JourneyInfoBox>
          </Step>
        </Stepper>
      </JourneyInfosWrapper>
    </JourneyContainer>
    </Element>
  );
};

export default JourneyComponent;
