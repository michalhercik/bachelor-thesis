[rna-visualizer](../README.md) / Rectangle

# Class: Rectangle

Object representing a rectangle

## Table of contents

### Constructors

- [constructor](Rectangle.md#constructor)

### Properties

- [classes](Rectangle.md#classes)
- [coor](Rectangle.md#coor)
- [height](Rectangle.md#height)
- [transform](Rectangle.md#transform)
- [visible](Rectangle.md#visible)
- [width](Rectangle.md#width)

### Methods

- [getClasses](Rectangle.md#getclasses)
- [getCoor](Rectangle.md#getcoor)
- [getHeight](Rectangle.md#getheight)
- [getTransformedX](Rectangle.md#gettransformedx)
- [getTransformedY](Rectangle.md#gettransformedy)
- [getWidth](Rectangle.md#getwidth)
- [getX](Rectangle.md#getx)
- [getY](Rectangle.md#gety)
- [isVisible](Rectangle.md#isvisible)
- [setCoor](Rectangle.md#setcoor)
- [setTransform](Rectangle.md#settransform)
- [setVisible](Rectangle.md#setvisible)
- [setX](Rectangle.md#setx)
- [setY](Rectangle.md#sety)
- [translate](Rectangle.md#translate)

## Constructors

### constructor

• **new Rectangle**(`coor`, `width`, `height`, `classes`)

Creates a new rectangle with the given parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coor` | [`Vector2`](Vector2.md) | The coordinate of the rectangle. |
| `width` | `number` | The width of the rectangle. |
| `height` | `number` | The height of the rectangle. |
| `classes` | `string`[] | An array of classes for styling the rectangle. |

#### Defined in

[components/rectangle.ts:25](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L25)

## Properties

### classes

• **classes**: `string`[]

#### Defined in

[components/rectangle.ts:14](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L14)

___

### coor

• `Private` **coor**: [`Vector2`](Vector2.md)

#### Defined in

[components/rectangle.ts:11](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L11)

___

### height

• **height**: `number`

#### Defined in

[components/rectangle.ts:13](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L13)

___

### transform

• **transform**: [`Transformation`](../interfaces/Transformation.md) = `identity`

#### Defined in

[components/rectangle.ts:16](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L16)

___

### visible

• **visible**: `boolean` = `true`

#### Defined in

[components/rectangle.ts:15](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L15)

___

### width

• **width**: `number`

#### Defined in

[components/rectangle.ts:12](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L12)

## Methods

### getClasses

▸ **getClasses**(): `string`[]

Gets the classes associated with the rectangle.

#### Returns

`string`[]

- An array of strings representing the classes associated with the rectangle.

#### Defined in

[components/rectangle.ts:150](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L150)

___

### getCoor

▸ **getCoor**(): [`Vector2`](Vector2.md)

Gets the coordinates of the rectangle.

#### Returns

[`Vector2`](Vector2.md)

- A copy of the coordinates of the rectangle as a `Vector2` object.

#### Defined in

[components/rectangle.ts:108](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L108)

___

### getHeight

▸ **getHeight**(): `number`

Gets the height of the rectangle.

#### Returns

`number`

- The height of the rectangle as a number.

#### Defined in

[components/rectangle.ts:142](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L142)

___

### getTransformedX

▸ **getTransformedX**(): `number`

Returns the transformed X coordinate of the rectangle.

#### Returns

`number`

The transformed X coordinate of the rectangle.

#### Defined in

[components/rectangle.ts:46](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L46)

___

### getTransformedY

▸ **getTransformedY**(): `number`

Returns the transformed Y coordinate of the rectangle.

#### Returns

`number`

The transformed Y coordinate of the rectangle.

#### Defined in

[components/rectangle.ts:72](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L72)

___

### getWidth

▸ **getWidth**(): `number`

Gets the width of the rectangle.

#### Returns

`number`

- The width of the rectangle as a number.

#### Defined in

[components/rectangle.ts:134](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L134)

___

### getX

▸ **getX**(): `number`

Returns the X coordinate of the rectangle.

#### Returns

`number`

The X coordinate of the rectangle.

#### Defined in

[components/rectangle.ts:54](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L54)

___

### getY

▸ **getY**(): `number`

Returns the Y coordinate of the rectangle.

#### Returns

`number`

The Y coordinate of the rectangle.

#### Defined in

[components/rectangle.ts:80](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L80)

___

### isVisible

▸ **isVisible**(): `boolean`

Gets the visibility of the rectangle.

#### Returns

`boolean`

- A boolean indicating the visibility of the rectangle.

#### Defined in

[components/rectangle.ts:126](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L126)

___

### setCoor

▸ **setCoor**(`coor`): [`Rectangle`](Rectangle.md)

Sets the coordinate of the rectangle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coor` | [`Vector2`](Vector2.md) | The new coordinate of the rectangle. |

#### Returns

[`Rectangle`](Rectangle.md)

The modified rectangle.

#### Defined in

[components/rectangle.ts:99](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L99)

___

### setTransform

▸ **setTransform**(`transform`): [`Rectangle`](Rectangle.md)

Sets the transformation to be applied to the rectangle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | [`Transformation`](../interfaces/Transformation.md) | The transformation to be applied to the rectangle. |

#### Returns

[`Rectangle`](Rectangle.md)

The modified rectangle.

#### Defined in

[components/rectangle.ts:37](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L37)

___

### setVisible

▸ **setVisible**(`visible`): [`Rectangle`](Rectangle.md)

Sets the visibility of the rectangle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `visible` | `boolean` | A boolean indicating the visibility of the rectangle. |

#### Returns

[`Rectangle`](Rectangle.md)

- The current `Rectangle` object.

#### Defined in

[components/rectangle.ts:117](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L117)

___

### setX

▸ **setX**(`x`): [`Rectangle`](Rectangle.md)

Sets the X coordinate of the rectangle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The new X coordinate of the rectangle. |

#### Returns

[`Rectangle`](Rectangle.md)

The modified rectangle.

#### Defined in

[components/rectangle.ts:63](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L63)

___

### setY

▸ **setY**(`y`): [`Rectangle`](Rectangle.md)

Sets the Y coordinate of the rectangle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `y` | `number` | The new Y coordinate of the rectangle. |

#### Returns

[`Rectangle`](Rectangle.md)

The modified rectangle.

#### Defined in

[components/rectangle.ts:89](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L89)

___

### translate

▸ **translate**(`shift`): [`Rectangle`](Rectangle.md)

Translates the rectangle by the given vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shift` | [`Vector2`](Vector2.md) | A `Vector2` object representing the amount to translate the rectangle. |

#### Returns

[`Rectangle`](Rectangle.md)

- The current `Rectangle` object.

#### Defined in

[components/rectangle.ts:159](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L159)
