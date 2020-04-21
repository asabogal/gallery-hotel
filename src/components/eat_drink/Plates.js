import React from 'react';
import styled from 'styled-components';
import {Thumbnail} from '../utils/Pictures';
// images
import plate from '../../images/eat_drink/plate.png';
import rice from '../../images/eat_drink/rice.png';

const Plates = () => {

  return (
    <Container>
        <ImageContainer>
         <Thumbnail image={plate} alt='plate-picture' contain='contain'/>
        </ImageContainer>
        
        <ImageContainer>
          <Thumbnail image={rice} alt='rice-picture' contain='contain'/>
        </ImageContainer>
        
    </Container>
  );
};

export default Plates;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  width: 80%;
  margin: 10vh auto;
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
`;