import {resolveDOMEventHandlers} from './resolve-handlers';

/**
 * ElementController
 */
export default class ElementController {

  constructor(element) {
    // Target for event listeners
    this._element = element;
    // Resolve event handlers
    this._resolvedEventHandlers = resolveDOMEventHandlers(this.getEventHandlerStrings(), this);
    // Add event listeners
    this.addEventListeners();
  }

  get element() {
    return this._element;
  }

  getEventHandlerStrings() {
    return [];
  }

  dispose() {
    this.removeEventListeners();
    delete this._resolvedEventHandlers;
    delete this._element;
  }

  addEventListeners() {
    this._resolvedEventHandlers.forEach(eventHandler => {
      this.element.addEventListener(eventHandler.eventType, eventHandler);
    });
  }

  removeEventListeners() {
    this._resolvedEventHandlers.forEach(eventHandler => {
      this.element.removeEventListener(eventHandler.eventType, eventHandler);
    });
  }

}
