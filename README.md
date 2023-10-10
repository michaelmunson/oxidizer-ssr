# Oxidizer SSR
An <a href="https://www.npmjs.com/package/oxidizer">Oxidizer</a> framework for implementing Server Side Rendering.

## How What & Why
Oxidizer SSR is an HTML templating framework designed to be used via the backend.

It is designed to be as lightweight and simple as possible (almost a third of the package's size comes from the license). 

It works by assigning a class to a corresponding HTML Element, (ex. <code>DIV</code>, <code>BUTTON</code>, etc... ). Instances of these classes are converted to JSON, in a tree structure representing HTML. This can then be sent to the frontend, where it is parsed via the <code>parseTree</code> method. 

## Usage
### Creating Components
The class components can take either 1 or 2 arguments. 
1. Fields to attach to the element
2. A subtree of child elements

A class element can have either field and subtree arguments, or only field, or only subtree arguments. 

*Subtree arguments <i>must</i> be an array. 
```typescript
import {DIV, BUTTON, P, I, B, BR} from "oxidizer-ssr";

const buttonGroup = (
    new DIV({style:"display:flex"}, [
        new BUTTON(["HELLO"]),
        new BUTTON(["WORLD"])
    ])
)

const justADiv = new DIV({className:"lonely-div"});

const formattedTaxt = new P([
    "Some normal text ", 
    new I(["with italic text "]),
    "with some more normal text ",
    new B(["with some bold text!"])
]);
```
These class invocations result in instances of an <code>SSRObject</code>, which has a singular <code>stringify</code> method. This converts the Object into an JSON string, which can then be delivered to the frontend. 


### Parsing & Rendering
<code>parseTree</code> returns an <code>HTMLElement</code> instance, with an extra <code>render</code> method attached to it. 


The <code>render</code> method is used to insert the HTML Element into the DOM tree, and takes 2 arguments. 
1. An <code>HTMLElement</code> | <code>String</code> (selector) to insert into/replace.
2. Location/method of insertion. Can either be "append", "prepend", or "replace". 


## Example
### Backend
```typescript
import {DIV, BUTTON, A} from "oxidizer-ssr";

function handler(event, context){
    
    const myComponent = (
        new DIV({className: "my-div"}, [
            new BUTTON({className: "my-button"}, [
                new A({href:"#anchor"}, [
                    "HELLO WORLD"
                ])
            ])
        ])
    );

    return {
        status: 200,
        body: myComponent.stringify()
    }
}
```

### Fontend
``` typescript
import {parseTree} from "oxidizer-ssr";

const res = await fetch('...');

const myComponent = parseTree(res);

myComponent.render('#ssr-div');
```
