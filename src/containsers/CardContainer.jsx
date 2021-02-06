import React from 'react';
import Card from '../components/friend/Card';

function CardContainer ({friendInfo}) {
  return (
      <Card friendInfo={friendInfo} />
  );
}

export default CardContainer;