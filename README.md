# manipulating-DOM-with-refs

In this read, I learnt:

- to `get a ref to the DOM node`. You can do this by importing the useRef hook then initializing you ref with it inside your component. Finally to access the DOM node, you pass the ref to the `ref attribute` of the DOM node e.g. \<section ref=\{myRef\}\>. By doing this, `the DOM node's reference is stored into myRef.current property`. You can then **manipulate this DOM node however you like using event handlers & other built in browser API functions that work with it**.
- you can have more than a single ref in a component
- when dealing with lists that you have no idea how many items aare in it & each item needs a ref, the best solution is using a `ref callback`. **It's a function you pass to the ref attribute**. Using this, you can access each item's ref by its index or ID
- react doesn't let components accesss the DOM nodes of other components, not even its own children components. Manually manipulating other component's DOM nodes make your code fragile.
- if a component wants to expopse their DOM node to other components it has to explicitly do so by using `React.forwardRef()`
