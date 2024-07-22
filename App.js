const parent = React.createElement("div", {id:"parent"}, 
    [
        React.createElement("div", {id:"child-1"},[
            React.createElement("h1", {id:"heading"}, "I am h1 tag - 1"), 
            React.createElement("h1", {id:"heading"}, "I am h1 tag - 2")
        ]),
        React.createElement("div", {id:"child-2"},[
            React.createElement("h1", {id:"heading"}, "I am h1 tag - 1"), 
            React.createElement("h1", {id:"heading"}, "I am h1 tag - 2")
        ])
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);