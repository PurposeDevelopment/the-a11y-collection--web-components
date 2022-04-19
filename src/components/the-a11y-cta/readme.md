## Description
A fully accessible button/link component that converst from button to link and vice versa depending on the src property.

### What makes it accessible?
- native `<button>` and `<a>` element -> all build in accessibility features are supported
  - focusable
  - keyboard accessible
  - mouse accessible
- min-width and height fo 48px
- manually controled aria-label in case of no label



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                                                | Type                  | Default     |
| ----------- | ------------ | -------------------------------------------------------------------------- | --------------------- | ----------- |
| `ariaTitle` | `aria-title` | Aria title which can be set if the button should not have a label.         | `string`              | `undefined` |
| `icon`      | `icon`       | String to generate random icon placed in front of or instead of the label. | `string`              | `undefined` |
| `label`     | `label`      | Label for the component.                                                   | `string`              | `undefined` |
| `src`       | `src`        | Target source in case of a link.                                           | `string`              | `undefined` |
| `target`    | `target`     | Target attribute for the link.                                             | `"_blank" \| "_self"` | `'_blank'`  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
