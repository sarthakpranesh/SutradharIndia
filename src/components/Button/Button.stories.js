import React from 'react';
import Button from './Button.js'

// this is just some meta data
export default {
    title: "Button",
    component: Button,
}

// every named export is a story
export const Primary = () => <Button>Button</Button>
