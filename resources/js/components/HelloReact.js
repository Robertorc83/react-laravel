import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('hello-react');
const root = createRoot(container);

export default function HelloReact() {
    return (
        <h1>Hello Test react!</h1>
    );
}

if (document.getElementById('hello-react')) {
    root.render(<HelloReact />);
}
