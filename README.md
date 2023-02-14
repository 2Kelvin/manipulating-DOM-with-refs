# manipulating-DOM-with-refs

In this read, I learnt:

- to `get a ref to the DOM node`. You can do this by importing the useRef hook then initializing your ref with it inside your component. Finally to access the DOM node, you pass the ref to the `ref attribute` of the DOM node e.g. \<section ref=\{myRef\}\>. By doing this, `the DOM node's reference is stored into myRef.current property`. You can then **manipulate this DOM node however you like using event handlers & other built in browser API functions that work with it**.
- you can have more than a single ref in a component
- when dealing with lists that you have no idea how many items are in it & each item needs a ref, the best solution is using a `ref callback`. **It's a function you pass to the ref attribute**. Using this, you can access each item's ref by its index or ID
- react doesn't let components accesss the DOM nodes of other components, not even its own children components. Manually manipulating other component's DOM nodes make your code fragile.
- if a component wants to expose their DOM node to other components it has to explicitly do so by using `React.forwardRef()`
- putting a ref on a custom-made component doesn't work i.e the ref doesn't store the component inside its current property since its React does not let components access other component's nodes. Such components need to use forwardRef() if they want their nodes to be accessed by other components. You do this by **adding forwardRef() to the custom functional component's definition**
  ```javascript
  const MyInput = forwardRef((props, ref) => {
    return <input {...props} ref={ref} />;
  });
  ```
- allowing other components to manipulate your DOM nodes also allows them to change your CSS styles. If you want to restrict this behavior to only manipulating the DOM node, do so by using `useImperativeHandle()` => it lets you pass your own custom object as the value of the ref to the parent component and instruct react on what to do with that value passed
- React state updates are usually queued, to override this and have the state update synchronously, **import `flushSync` from react-dom and wrap the logic updating the state with it**
- only use refs when you want to `step outside React`
