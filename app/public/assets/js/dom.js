var $d = document
class Nodo{
    static get(q,v){
        let n = $d.querySelector(q)
        if(v){
            let nodeName = n.nodeName.toLowerCase()
            if(nodeName == 'input' || nodeName == 'textarea' || nodeName == 'select'){
                n.value = v
            }else{
                n.innerHTML = v
                if(nodeName == 'option'){
                    n.value = v
                }
            }
        } 
        return n
    }
    static getList(q){ return $d.querySelectorAll(q) }
    static push(name, html, pushIn){
        let nodo = $d.createElement(name)
        if(pushIn){
            pushIn = typeof pushIn == "string" ? Nodo.get(pushIn) : pushIn
            pushIn.appendChild(nodo)
        }
        if(html){
            nodo.innerHTML = html
        }
        return nodo
    }
}

let state = {
    data:{login:false , user:""},
    dom:{if:{},else:{},for:{},html:{}},
    instanceDom(){
        for(let a of Nodo.getList("*[if]")){
            if(Array.isArray(this.dom.if[a.getAttribute("if")])){
                this.dom.if[a.getAttribute("if")].push(a)
            }else{
                this.dom.if[a.getAttribute("if")] = [a]
            }
        }
        for(let a of Nodo.getList("*[else]")){
            if(Array.isArray(this.dom.else[a.getAttribute("else")])){
                this.dom.else[a.getAttribute("else")].push(a)
            }else{
                this.dom.else[a.getAttribute("else")] = [a]
            }
        }
        for(let a of Nodo.getList("*[html]")){
            if(Array.isArray(this.dom.html[a.getAttribute("html")])){
                this.dom.html[a.getAttribute("html")].push(a)
            }else{
                this.dom.html[a.getAttribute("html")] = [a]
            }
        }
        for(let a of Nodo.getList("*[for]")){
            if(Array.isArray(this.dom.for[a.getAttribute("for")])){
                this.dom.for[a.getAttribute("for")].push(a)
            }else{
                this.dom.for[a.getAttribute("for")] = [a]
            }
        }
    },
    evalDom(k){
        if(this.dom.if.hasOwnProperty(k)){
            for(let a of this.dom.if[k]){
                if(this.data[k]){
                    a.style.display = "block"
                }else{
                    a.style.display = "none"
                }
            }
        }
        if(this.dom.else.hasOwnProperty(k)){
            for(let a of this.dom.else[k]){
                if(this.data[k]){
                    a.style.display = "none"
                }else{
                    a.style.display = "block"
                }
            }
        }
        if(this.dom.html.hasOwnProperty(k)){
            for(let a of this.dom.html[k]){
                a.innerHTML = this.data[k]
            }
        }
    },
    set(k,v){
        state.data[k] = v
        state.evalDom(k)
    }
}