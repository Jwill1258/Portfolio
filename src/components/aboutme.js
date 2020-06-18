import React, { Component } from 'react';
import { Card, CardText, CardTitle } from 'react-mdl';


class About extends Component {
  render() {
    return(
      <div>

        <Card>
        <CardTitle>About Me</CardTitle>
            <CardText>
              Hello! My name is Jeffrey Williams. I am from Orlando, Florida. I moved to Boca Raton to attend Florida Atlantic University in 2013 and lived there for 6 years. I worked mostly as a sales associate during college. I was able to apply my previous knowledge in bookkeeping, marketing, and finance to this position while being a full-time student and balancing multiple extracurricular activities. I graduated in 2017 with my Bachelor of Health Services in health administration.
              <br></br>
              After completing my undergraduate degree, I have been working as a credentialing coordinator for a fortune 500 company. Since starting at the company, I have worked directly under the operations director and was the taught the ins and outs of operations and finance (business partner roles). Health care is a good field to work in and I have been fortunate enough to work for a great organization, but I don’t feel that it is where I can reach my full potential. Even though I chose a different path in college, technology has always been a passion of mine. I am excited to put my unique perspective to working building some cutting edge technologies with/for you!            
            </CardText>
                
        </Card>
      </div>
    )
  }
}

export default About;
