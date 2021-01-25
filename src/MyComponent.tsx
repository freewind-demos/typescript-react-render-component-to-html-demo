import React, {FC} from 'react';

type Props = {
  defaultValue: string
}

export const MyComponent: FC<Props> = ({defaultValue}) => {
  return <div style={{color: 'red'}}>
    <span>Hello</span>
    <input type={'text'} defaultValue={defaultValue}/>
  </div>;
}
