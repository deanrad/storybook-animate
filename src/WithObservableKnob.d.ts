import React from "react";
/**
A component that exposes a knob's present and future
values as an Observable.

Example:
```
<WithObservableKnob
  knob={[boolean, 'Online', true]}
  render={knobStates => (
    <Connectivity networkStates={knobStates} />
  )}
/>
```
*/
export declare function WithObservableKnob({ render, knob: [type, name, value, options] }: {
    render: any;
    knob: [any, any, any, ({} | undefined)?];
}): React.ReactElement;
