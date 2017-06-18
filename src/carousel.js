import React from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
`

const CarouselOuter = styled.div`
  overflow: hidden;
  height: ${props => props.height}px;
  width: ${props => props.width}px;
`;

const CarouselInner = styled.div`
  display: block;
  position: relative;
  width: ${props => props.children.length * props.width}px;
  left: -${props => (props.width * props.index) - props.width}px;
  transition: left 1s;
  > img {
    float: left;
  }
`;

const Button = styled.button`
  border: none;
  background: none;
  outline: none;

  padding: 1em;
`;

export default class Carousel extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      index: 1,
    }
  }
  
  render () {
    const { width, height } = this.props;
    
    return <CarouselContainer>
      <Button>Previous</Button>
      <CarouselOuter width={width} height={height}>
        <CarouselInner width={width} index={this.state.index}>
          {this.props.children}
        </CarouselInner>
      </CarouselOuter>
      <Button>Next</Button>
    </CarouselContainer>;
  }
}