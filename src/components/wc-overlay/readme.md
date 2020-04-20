# wc-overlay



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type      | Default     |
| ------------- | -------------- | ----------- | --------- | ----------- |
| `isShow`      | `is-show`      |             | `boolean` | `undefined` |
| `showOverlay` | `show-overlay` |             | `boolean` | `true`      |


## Methods

### `cleanChildModals() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `closeModal(id: string) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `getChildModals() => Promise<Node[]>`



#### Returns

Type: `Promise<Node[]>`




## Dependencies

### Used by

 - [wc-handle-modals](../wc-handle-modals)

### Graph
```mermaid
graph TD;
  wc-handle-modals --> wc-overlay
  style wc-overlay fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
