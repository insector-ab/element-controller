# ElementController &middot; [![GitHub license](https://img.shields.io/github/license/insector-ab/element-controller.svg)](https://github.com/insector-ab/element-controller/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/element-controller.svg?style=flat)](https://www.npmjs.com/package/element-controller)

Simple ui controller with [Backbone.js](http://backbonejs.org/#Events) inspired event delegation.


## Installation

```sh
npm install element-controller
```


## Example usage
```javascript
import ElementController from 'element-controller';

/**
 * CommentController
 */
export default class CommentController extends ElementController {

  getEventHandlerStrings() {
    return [
      'click .comment > .btn-delete: onDeleteCommentClick',
      'focusin .comment: onCommentFocus',
      'click .comment: onCommentClick'
    ];
  }

  onDeleteCommentClick() {
    /* delete handler */
  }

  onCommentFocus() {
    /* focus handler */
  }

  onCommentClick() {
    /* click handler */
  }

}
```

## Change log

### 0.2.0
* Updated dependencies


## License

This software is licensed under the [MIT License](https://github.com/insector-ab/element-controller/blob/master/LICENSE).
