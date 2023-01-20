# manipulating-DOM-with-refs

In this read, I learnt:

- to `get a ref to the DOM node`. You can do this by importing the useRef hook then initializing you ref with it inside your component. Finally to access the DOM node, you pass the ref to the `ref attribute` of the DOM node e.g. \<section ref=\{myRef\}\>. By doing this, `the DOM node's reference is stored into myRef.current property`. You can then **manipulate this DOM node however you like using event handlers & other built in browser API functions that work with it**.
