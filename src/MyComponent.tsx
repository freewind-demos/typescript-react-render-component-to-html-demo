import React, {FC, useState} from 'react';

type Props = {
  defaultValue: string
}

export const MyComponent: FC<Props> = ({defaultValue}) => {
  const [value, setValue] = useState(defaultValue)
  return <div style={{color: 'red'}}>
    <span>Hello</span>
    <input type={'text'} value={value} onChange={event => setValue(event.target.value)}/>
  </div>;
}
