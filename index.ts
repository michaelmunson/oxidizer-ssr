import { Fields, SSRObject } from "./types"
type Subtree = Array<SSRElement>

function attachFields(element:HTMLElement) : void {
    const fields:{[key:string] : any} = {
        render(parent:string|HTMLElement="body", renderType="append"){
            if (typeof parent === "string"){
                if (renderType === "append"){
                    document.querySelector(parent)?.append(this);
                }
                else if (renderType === "prepend"){
                    document.querySelector(parent)?.prepend(this);
                }
                else if (renderType === "replace"){
                    document.querySelector(parent)?.replaceWith(this);
                }
            }
            else {
                if (renderType === "append"){
                    element?.append(this);
                }
                else if (renderType === "prepend"){
                    element?.prepend(this);
                }
                else if (renderType === "replace"){
                    element?.replaceWith(this);
                }
            }
        },
    }
    for (const field in fields){
        element[field] = fields[field];
    }
}

export function createElement(ssrObject:SSRObject) : HTMLElement {
    const element = document.createElement(ssrObject.tagName);
    for (const field in ssrObject.fields) {
        element[field] = ssrObject.fields[field];
    }
    return element;
}

export function parseTree(ssrTree:SSRObject|Array<SSRObject>|Array<string>, parent:HTMLElement|void) : HTMLElement {
    if (!parent && !Array.isArray(ssrTree)){
        parent = document.createElement(ssrTree.tagName);
        attachFields(parent);
        for (const field in ssrTree.fields) {
            parent[field] = ssrTree.fields[field];
        }
        parseTree(ssrTree.subtree, parent);
    }
    else if (Array.isArray(ssrTree)) {
        for (const ssrObject of ssrTree){
            if (typeof ssrObject === "string"){
                if (parent) {
                    parent.append(ssrObject);
                }
            }
            else {
                parseTree(ssrObject, parent);
            }
        }
    }
    else {
        const node = createElement(ssrTree);
        if (parent) {
            parent.append(node);
        }
        parseTree(ssrTree.subtree, node);
    }

    if (parent) return parent;
    else return document.createElement("div");
}

export class SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        let _fields:any = fields;
        let _subtree:any = subtree;
        if (Array.isArray(fields)){
            _fields = {};
            _subtree = fields; 
        }

        return {
            fields: _fields,
            subtree: _subtree,
            tagName: this.constructor.name.toLowerCase(),
            stringify: function() : string {
                return JSON.stringify(this);
            }
        }
    }
}

export class A extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class ACRONYM extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class ABBR extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class ADDRESS extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class APPLET extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class EMBED extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class AREA extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class ARTICLE extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class ASIDE extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class AUDIO extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class B extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class BASE extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class BASEFONT extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class BDI extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class BDO extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class BIG extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class BLOCKQUOTE extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class BODY extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class BR extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class BUTTON extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class CANVAS extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class CAPTION extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class CENTER extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class CITE extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class CODE extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class COL extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class COLGROUP extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class DATA extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class DATALIST extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class DD extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class DEL extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class DETAILS extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class DFN extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class DIALOG extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class DIR extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class UL extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class DIV extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class DL extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class DT extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class EM extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}

export class FIELDSET extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class FIGCAPTION extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class FIGURE extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class FONT extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class FOOTER extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class FORM extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class FRAME extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class FRAMESET extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class H1 extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}

export class H2 extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}

export class H3 extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}

export class H4 extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}

export class H5 extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}

export class H6 extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class HEAD extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class HEADER extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class HR extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class HTML extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class I extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class IFRAME extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class IMG extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class INPUT extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class INS extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class KBD extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class LABEL extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class LEGEND extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class LI extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class LINK extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class MAIN extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class MAP extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class MARK extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class META extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class METER extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class NAV extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class NOFRAMES extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class NOSCRIPT extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class OBJECT extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class OL extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class OPTGROUP extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class OPTION extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class OUTPUT extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class P extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class PARAM extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class PICTURE extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class PRE extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class PROGRESS extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class Q extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class RP extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class RT extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class RUBY extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class SAMP extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class SCRIPT extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class SECTION extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class SELECT extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class SMALL extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class SOURCE extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class SPAN extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class STRIKE extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
    
export class S extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class STRONG extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class STYLE extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class SUB extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class SUMMARY extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class SUP extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class SVG extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class TABLE extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class TBODY extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class TD extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class TEMPLATE extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class TEXTAREA extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class TFOOT extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class TH extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class THEAD extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class TIME extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class TITLE extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class TR extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class TRACK extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class TT extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class U extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class VAR extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class VIDEO extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
    
export class WBR extends SSRElement {
    constructor(fields:Fields|Subtree={}, subtree:Subtree=[]){
        super(fields, subtree);
    }
}
