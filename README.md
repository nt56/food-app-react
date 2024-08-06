# Food App

I tried to create a online food ordering app using swiggy API. This project is the part of namaste react course.

project is build using the react, tailwind and some other API and dependecies.

# Parcel 
    Dev Build
    Local Server
    HMR = Hot Module Replacement
    File Watching Algorithm - written in C++
    Caching - Faster Builds
    Image Optimization
    Minification
    Bundling
    Compress
    Consistent Hashing
    Code Splitting
    Differential Bundling - support older browsers
    Diagnostic
    Error Handling
    HTTPs
    Tree Shaking - remove unused code
    Different dev and prod bundles
    Namaste Food



# Two types of Export/Import

    Default Export/Import
        export default Component; import Component from "path";

    Named Export/Import
        export const Component; import {Component} from "path";


# React Hooks
    (Normal JS utility functions)
    useState() - Superpowerful State Variables in react
    useEffect() - this will call after the compelition of component render cycle.


2 types Routing in web apps
    Client Side Routing
    Server Side Routing


# Redux Toolkit
    Install @reduxjs/toolkit and react-redux
    Build our store
    Connect our store to our app
    Slice (cartSlice)
    dispatch(action)
    Selector


# Types of testing (devloper)
    Unit Testing
    Integration Testing
    End to End Testing - e2e testing
    Setting up Testing in our app
    Install React Testing Library
    Installed jest
    Installed Babel dependencies
    Configure Babel
    Configure Parcel Config file to disable default babel transpilation
    Jest - npx jest --init
    Install jsdom library
    Install @babel/preset-react - to make JSX work in test cases
    Include @babel/preset-react inside my babel config
    npm i -D @testing-library/jest-dom


# React lifeCycle method
    - call parent constructor
    - call parent render method
    - if child component is exists then trigger to child component
        -- call child constructor
        -- call child render method
        -- call child ComponentDidMount
    - call parent ComponentDidMount


- Parent Constructor
- Parent Render
    - first (class)Child Constructor
    -  first (class)Child Render

    - second (class)Child Constructor
    - second (class)Child Render

    (DOM Updated)
    - first (class)Child componentDidMount
    -  second (class)Child componentDidMount
- Parent componentDidMount

note -> refer diagram pdf for better understanding.
ComponentDidMount is used for to make API calls.



#  Modularity is also known as:
    - Chunking
    - Code Splitting
    - Dynamic Bundling
    - Lazy Loading
    - On-Demand Loading
    - Dynamic Import


# styling methods
    - Boostrap
    - chakra UI
    - Material UI
    - Normal CSS
    - Tailwind CSS
    - Ant Design
    - style components

