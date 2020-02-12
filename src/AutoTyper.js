import React, { useEffect, useLayoutEffect, useRef } from 'react';
import userEvent from '@testing-library/user-event';
import { trigger as debug } from 'rx-helper';
// Tries to type text against its selector, (ie for its children). Safe if no children
// exist matching the selector. Intended for use in Storybook.
export function AutoTyper({
  children,
  send = '',
  selector = 'input',
  delay = 0
}) {
  const domNode = useRef();
  useLayoutEffect(() => {
    const target =
      domNode.current && domNode.current.querySelectorAll(selector)[0];
    target && userEvent.type(target, send, { delay });
  }, []);

  useEffect(() => {
    debug('autotyper:mount');
    return () => debug('autotyper:release');
  }, [domNode.current]);

  return <div ref={domNode}>{children}</div>;
}
