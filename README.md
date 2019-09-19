[![npm version](https://badge.fury.io/js/storybook-animate.svg)](https://badge.fury.io/js/storybook-animate)![twitter link](https://img.shields.io/badge/twitter-@deaniusol-55acee.svg)

# Storybook-Animate

Storybook is great for designing indivdual states of your application's components.
But your users don't see your app as individual states, but a series of states that flow together over time. If storybook lets you design the frames, Storybook-Animate lets you create the flipbook!

## Simplicity Breeds Creativity

Where you used to provide a story of a single component with props:

```js
storiesOf('Thermometer', module)
  .add('Healthy Temperature', () => (
    <Thermometer scale="F" temp={98.6}> 
  ))
```

You can animate the component with a `propStream`

```js
storiesOf('Thermometer', module)
  .add('Healthy Temperature', () => (
    <Animate
      component={Thermometer}
      propStream={climbingTemp}
    />    
  ))
```

And here is the beautiful result:

![](./therm.gif)

Try clicking on the animation to restart it, or using `<Animate loop={true} ... />` to just sit back and admire your animation :)

## Dive into Streams
A `propStream` is an [RxJS](https://github.com/ReactiveX/rxjs) Observable, created any way you like. But to ease you in,  Storybook-Animate includes some helpers to supplement those provided by Rx-Helper:

```js
const climbingTemp = sequenceOf(
  after(0.0, { temp: 86 }),
  after(1000, { temp: 92 }),
  after(1000, { temp: 96 }),
  after(1000, { temp: 99 }),
  after(1000, { temp: 100.5 }),
  after(1000, { temp: 102.2 })
).combineWith({scale: "F"})
```

## The Sky's The Limit!

You can combine Storybook-Animate with CSS animations, React Transition Groups internal to your components - you are only limited by what you can come up with!

Got ideas that we haven't thought of? Search for an issue or open one if you don't see it.

## Examples

The Thermometer example is in the `stories/` folder of this project. Feel free to post a link to what you've built with it too, we can include it here!

![twitter link](https://img.shields.io/badge/twitter-@deaniusol-55acee.svg)