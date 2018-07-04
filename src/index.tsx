import * as React from 'react';

export const Hello: React.SFC<{ name: string }>
  = (props) => <h1>hello, {props.name}</h1>;
  