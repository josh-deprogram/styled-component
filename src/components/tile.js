import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Tile extends Component {
  render() {
   
   const image = 'images/' + this.props.image;

   const Wrapper = styled.section`
      position: relative;
      margin: 20px;
      width: 120px;
      height: 70px;
      border: 5px solid black;
      background-size:auto 100%;
      background-image: url(${image});
      transition: border .3s ease, transform .1s linear;

      &:hover {
         transform: scale(1.1);
         border: 5px solid #e91f2d;
      }
   `;
   
   const Bar = styled.section`
      position: absolute;
      bottom: 0;
      width: calc(100% - 10px);
      display: flex;
      align-items: center;
      padding: 2px 5px;
      background: rgba(0,0,0,0.5);
   `;

   const Icon = styled.div`
      width: 15px;
      height: 15px;
      background-size:auto 100%;
      background-image: url('images/logo.png');
   `;

   const Title = styled.div`
      margin-left: 5px;
      color: white;
      font-size: 0.5em;
   `;

    return (
      <Wrapper>
          <Bar><Icon/><Title>{ this.props.title }</Title></Bar>
      </Wrapper>
    );
  }
}

Tile.propTypes = {
   title: PropTypes.string.isRequired,
   image: PropTypes.string.isRequired
};

export default Tile;
