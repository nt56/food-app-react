import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", {id:"parent"}, 
    [
        React.createElement("div", {id:"child-1"},[
            React.createElement("h1", {id:"heading"}, "I am  tag - 1"), 
            React.createElement("h1", {id:"heading"}, "I am  tag - 2")
        ]),
        React.createElement("div", {id:"child-2"},[
            React.createElement("h1", {id:"heading"}, "I am  tag - 3"), 
            React.createElement("h1", {id:"heading"}, "I am  tag - 4")
        ])
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);