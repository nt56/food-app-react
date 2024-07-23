import React from "react";
import ReactDOM from "react-dom/client";

const HeadingComponent = () => {
    return (
        <div>
            <h1>Hello World From React Component</h1>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);