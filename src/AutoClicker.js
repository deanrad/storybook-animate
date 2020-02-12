import React, { useLayoutEffect, useRef } from 'react';
import userEvent from '@testing-library/user-event';
import { defer } from '../util/defer';
// Tries to click its selector, A noop if none match the selector.
// Intended for use in Storybook stories whose rendering
// or rerendering consists of some user actions.
export function AutoClicker({
  children,
  selector = '[role=button]',
  delay = 0
}) {
  const dom = useRef();
  useLayoutEffect(() => {
    defer(() => {
      const target = dom.current && dom.current.querySelectorAll(selector)[0];
      target && userEvent.click(target);
    }, delay);
  }, []);

  return <div ref={dom}>{children}</div>;
}
