# Oxidizer SSR
An <a href="https://github.com/michaelmunson/oxidizer">Oxidizer</a> framework for implementing Server Side Rendering.

## Usage

### Backend
```typescript
import {DIV, BUTTON, A} from "oxidizer-ssr";

function lambdaHandler (event, context) {
    
    const myComponent = (
        new DIV({className: "my-div"}, [
            new BUTTON({className: "my-button"}, [
                new A({className: "my-anchor"}, [
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

const res = await ('<lambdaUrl>');

const myComponent = parseTree(res);

myComponent.render('#ssr-div');
```