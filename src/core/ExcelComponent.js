import {DomListener} from "@core/DomListener";

export class ExcelComponent extends DomListener {

    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ''
    }

    toHTML() {
        return '<h1>1</h1>'
    }

    init() {
        this.initDomListeners()
    }

    destroy() {
        this.removeDomListeners()
    }


}
