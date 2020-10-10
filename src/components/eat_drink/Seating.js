import React from 'react';
import styled from 'styled-components';
import {Thumbnail} from '../utils/Pictures';
// images
import garden from '../../images/eat_drink/garden.jpeg';
import oysters from '../../images/eat_drink/oysters.png';
import dinningRoom from '../../images/eat_drink/dinningroom.png';


const Seating = () => {
  return (
    <Container>
      <TopSection>
        <TextContainer>
          <h2>Indoor and Outdoor</h2>
          <p>Enjoy the full service Kon Tiki experience on our intimate dinning room, or our gorgeous backyard garden.</p>
        </TextContainer>
        <Thumbnail 
          image={garden} 
          alt='arden-seating'
          heading='Garden Seating'
          info='Service from 5pm - 10pm'
          />   
        <Thumbnail 
          image={dinningRoom} 
          alt='dinning-room'
          heading='Dinning Room'
          info='Service from 6pm - 11pm'
          />
        </TopSection>
    </Container>
  );
};

export default Seating;

const Container = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-gap: 2rem;
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 2fr));
  justify-content: center;
  grid-gap: 2rem;
`;

const TextContainer = styled.div`
`;
