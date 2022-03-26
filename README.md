## What is this ?

React modal component

## Installation

Run `npm i @elencrissy/modal`

## Use

For example :

```
import {Modal} from "@elencrissy/modal;

const ReactComponent = () => {
    return (
        <Modal open={isOpen} onClose={() => setIsOpen(false)} app={document.getElementById("root")}>
    )
}

```