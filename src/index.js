import {resolveDOMEventHandlers} from 'resolve-handlers';

/**
 * ElementController
 */
export default class ElementController {

  constructor(element) {
    // Target for event listeners
    this._element = element;
    // Resolve event handlers
    this._resolvedEventHandlers = resolveDOMEventHandlers(this.getDOMEventHandlerStrings(), this);
    // Add DOM event listeners
    this.addDOMEventListeners();
  }

  get element() {
    return this._element;
  }

  getDOMEventHandlerStrings() {
    return [];
  }

  dispose() {
    this.removeDOMEventListeners();
    this._dispose();
    this._deleteReferences();
  }

  addDOMEventListeners() {
    const element = this.element;
    if (element) {
      this._resolvedEventHandlers.forEach(eventHandler => {
        element.addEventListener(eventHandler.eventType, eventHandler);
      });
    }
  }

  removeDOMEventListeners() {
    const element = this.element;
    if (element) {
      this._resolvedEventHandlers.forEach(eventHandler => {
        element.removeEventListener(eventHandler.eventType, eventHandler);
      });
    }
  }

  _dispose() {
    // Abstract
  }

  _deleteReferences() {
    delete this._resolvedEventHandlers;
    delete this._element;
  }

}
