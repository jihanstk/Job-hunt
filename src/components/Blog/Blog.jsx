import React from "react";
import RouteHeaders from "../RouteHeaders/RouteHeaders";

const Blog = () => {
  return (
    <div>
      <RouteHeaders>Blog</RouteHeaders>
      <div
        className="grid
     md:grid-cols-2 gap-6 w-11/12 mx-auto mt-8"
      >
        <div className="border-4 p-4 shadow-md bg-slate-50">
          <h2>
            <strong className="text-red-700">Context API:</strong>
            <br />
            The Context API in React should be utilized when there is a need to
            propagate data or state across numerous components that are not
            directly connected in the component hierarchy. In such cases,
            passing data down through props drilling can become overly complex
            and unmanageable. Context provides a streamlined solution to
            transmit data through the component tree, without the need to pass
            props manually at each level, thereby improving the maintainability
            and scalability of the application. By using the Context API,
            developers can avoid potential bugs and save time and effort in
            managing complex data flow in their React applications.
          </h2>
        </div>
        <div className="border-4 p-4 shadow-md bg-slate-50">
          <h2>
            <strong className="text-red-700">Custom Hook :</strong>
            <br />A custom hook in React is a JavaScript function that uses one
            or more built-in React hooks and/or other custom hooks to
            encapsulate a specific set of logic. Custom hooks allow developers
            to reuse common functionality across different components, making
            the code more modular and easier to maintain. Custom hooks can
            abstract away complex logic, such as managing state or interacting
            with APIs, and provide a simple and composable interface to use that
            logic throughout an application. Custom hooks follow a specific
            naming convention, starting with the prefix "use", which
            distinguishes them from regular functions. Custom hooks are a
            powerful tool for React developers to create reusable and efficient
            code, making it easier to manage and scale complex applications.
          </h2>
        </div>
        <div className="border-4 p-4 shadow-md bg-slate-50">
          <h2>
            <strong className="text-red-700">useRef:</strong>
            <br />
            In React, useRef is a built-in hook that allows developers to create
            a mutable reference to an object that persists across re-renders.
            useRef is commonly used to access and manipulate the properties of a
            DOM element, such as its size or position, without triggering a
            re-render. Additionally, useRef can be used to store and update
            values that do not cause a re-render, such as a count or a timer.
            Unlike useState, which is used for managing reactive state, useRef
            allows for the management of non-reactive state in a performant
            manner. useRef is a powerful tool in the React developer's arsenal,
            providing fine-grained control over the DOM and non-reactive state,
            while preserving the performance benefits of the virtual DOM. By
            leveraging useRef, developers can create more efficient and dynamic
            applications that meet their specific needs.
          </h2>
        </div>
        <div className="border-4 p-4 shadow-md  bg-slate-50">
          <h2>
            <strong className="text-red-700">useMemo:</strong>
            <br />
            useMemo is a built-in hook in React that allows developers to
            memoize the result of a function call, caching the value so that it
            is not recalculated on every render. useMemo is commonly used to
            optimize the performance of a component that performs expensive
            calculations or computations, by avoiding unnecessary re-computation
            of a value. useMemo takes two arguments: a function that returns a
            value, and an array of dependencies. If the dependencies do not
            change between renders, the cached value is returned, otherwise the
            function is re-evaluated and the new value is cached. useMemo can
            also be used to prevent unnecessary re-renders caused by passing new
            props to a component that does not depend on them. By using useMemo,
            developers can create more efficient and responsive React
            applications, by reducing unnecessary computation and improving
            overall performance.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Blog;
