import React, {FC, useState} from 'react';
import {MyComponent} from './MyComponent';
import ReactDOMServer from "react-dom/server";

type Props = {};

export const Hello: FC<Props> = ({}) => {
  const [componentString, setComponentString] = useState<string>();
  const [componentMarkup, setComponentMarkup] = useState<string>();

  const myComponent = <MyComponent defaultValue={'custom-component'}/>;

  function renderComponentToHtml() {
    setComponentString(ReactDOMServer.renderToString(myComponent));
    setComponentMarkup(ReactDOMServer.renderToStaticMarkup(myComponent));
  }

  return <div>
    <h1>Hello React</h1>
    {myComponent}
    <button onClick={renderComponentToHtml}>Render Html</button>
    <hr/>
    <div>componentString: {componentString}</div>
    <div>componentMarkup: {componentMarkup}</div>
  </div>;
}
