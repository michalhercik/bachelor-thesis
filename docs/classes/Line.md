[rna-visualizer](../README.md) / Line

# Class: Line

A class representing a line segment between two points.

## Implements

- [`ILine`](../interfaces/ILine.md)

## Table of contents

### Constructors

- [constructor](Line.md#constructor)

### Properties

- [classes](Line.md#classes)
- [coor1](Line.md#coor1)
- [coor2](Line.md#coor2)
- [transform](Line.md#transform)
- [visible](Line.md#visible)

### Methods

- [getClasses](Line.md#getclasses)
- [getCoor1](Line.md#getcoor1)
- [getCoor2](Line.md#getcoor2)
- [getTransformedX1](Line.md#gettransformedx1)
- [getTransformedX2](Line.md#gettransformedx2)
- [getTransformedY1](Line.md#gettransformedy1)
- [getTransformedY2](Line.md#gettransformedy2)
- [getX1](Line.md#getx1)
- [getX2](Line.md#getx2)
- [getY1](Line.md#gety1)
- [getY2](Line.md#gety2)
- [isVisible](Line.md#isvisible)
- [setCoor1](Line.md#setcoor1)
- [setCoor2](Line.md#setcoor2)
- [setTransform](Line.md#settransform)
- [setVisible](Line.md#setvisible)
- [setX1](Line.md#setx1)
- [setX2](Line.md#setx2)
- [setY1](Line.md#sety1)
- [setY2](Line.md#sety2)
- [translate](Line.md#translate)

## Constructors

### constructor

• **new Line**(`coor1`, `coor2`, `classes`)

Create a new Line object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coor1` | [`Vector2`](Vector2.md) | The first coordinate of the line segment. |
| `coor2` | [`Vector2`](Vector2.md) | The second coordinate of the line segment. |
| `classes` | `string`[] | An array of classes for styling the line segment. |

#### Defined in

[components/line.ts:24](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L24)

## Properties

### classes

• **classes**: `string`[]

#### Defined in

[components/line.ts:14](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L14)

___

### coor1

• `Private` **coor1**: [`Vector2`](Vector2.md)

#### Defined in

[components/line.ts:12](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L12)

___

### coor2

• `Private` **coor2**: [`Vector2`](Vector2.md)

#### Defined in

[components/line.ts:13](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L13)

___

### transform

• **transform**: [`Transformation`](../interfaces/Transformation.md) = `identity`

#### Defined in

[components/line.ts:16](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L16)

___

### visible

• **visible**: `boolean` = `true`

#### Defined in

[components/line.ts:15](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L15)

## Methods

### getClasses

▸ **getClasses**(): `string`[]

Gets the classes applied to the line.

#### Returns

`string`[]

#### Implementation of

[ILine](../interfaces/ILine.md).[getClasses](../interfaces/ILine.md#getclasses)

#### Defined in

[components/line.ts:192](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L192)

___

### getCoor1

▸ **getCoor1**(): [`Vector2`](Vector2.md)

Gets a copy of the first point of the line as a Vector2.

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[components/line.ts:153](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L153)

___

### getCoor2

▸ **getCoor2**(): [`Vector2`](Vector2.md)

Gets a copy of the second point of the line as a Vector2.

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[components/line.ts:169](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L169)

___

### getTransformedX1

▸ **getTransformedX1**(): `number`

Get the transformed X coordinate of the first point of this line segment.

#### Returns

`number`

The transformed X coordinate of the first point.

#### Implementation of

[ILine](../interfaces/ILine.md).[getTransformedX1](../interfaces/ILine.md#gettransformedx1)

#### Defined in

[components/line.ts:44](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L44)

___

### getTransformedX2

▸ **getTransformedX2**(): `number`

Get the transformed X coordinate of the second point of this line segment.

#### Returns

`number`

The transformed X coordinate of the second point.

#### Implementation of

[ILine](../interfaces/ILine.md).[getTransformedX2](../interfaces/ILine.md#gettransformedx2)

#### Defined in

[components/line.ts:60](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L60)

___

### getTransformedY1

▸ **getTransformedY1**(): `number`

Get the transformed Y coordinate of the first point of this line segment.

#### Returns

`number`

The transformed Y coordinate of the first point.

#### Implementation of

[ILine](../interfaces/ILine.md).[getTransformedY1](../interfaces/ILine.md#gettransformedy1)

#### Defined in

[components/line.ts:52](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L52)

___

### getTransformedY2

▸ **getTransformedY2**(): `number`

Get the transformed Y coordinate of the second point of this line segment.

#### Returns

`number`

The transformed Y coordinate of the second point.

#### Implementation of

[ILine](../interfaces/ILine.md).[getTransformedY2](../interfaces/ILine.md#gettransformedy2)

#### Defined in

[components/line.ts:68](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L68)

___

### getX1

▸ **getX1**(): `number`

Get the X coordinate of the first point of this line segment.

#### Returns

`number`

The X coordinate of the first point.

#### Implementation of

[ILine](../interfaces/ILine.md).[getX1](../interfaces/ILine.md#getx1)

#### Defined in

[components/line.ts:86](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L86)

___

### getX2

▸ **getX2**(): `number`

Gets the x-coordinate of the second point of the line.

#### Returns

`number`

#### Implementation of

[ILine](../interfaces/ILine.md).[getX2](../interfaces/ILine.md#getx2)

#### Defined in

[components/line.ts:121](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L121)

___

### getY1

▸ **getY1**(): `number`

Get the Y coordinate of the first point of this line segment.

#### Returns

`number`

The Y coordinate of the first point.

#### Implementation of

[ILine](../interfaces/ILine.md).[getY1](../interfaces/ILine.md#gety1)

#### Defined in

[components/line.ts:104](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L104)

___

### getY2

▸ **getY2**(): `number`

Gets the Y coordinate of the second point of the line.

#### Returns

`number`

#### Implementation of

[ILine](../interfaces/ILine.md).[getY2](../interfaces/ILine.md#gety2)

#### Defined in

[components/line.ts:137](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L137)

___

### isVisible

▸ **isVisible**(): `boolean`

Gets the visibility of the line.

#### Returns

`boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[isVisible](../interfaces/ILine.md#isvisible)

#### Defined in

[components/line.ts:185](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L185)

___

### setCoor1

▸ **setCoor1**(`coor`): [`Line`](Line.md)

Sets the first point of the line to the given Vector2.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coor` | [`Vector2`](Vector2.md) | The new coordinates. |

#### Returns

[`Line`](Line.md)

#### Defined in

[components/line.ts:145](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L145)

___

### setCoor2

▸ **setCoor2**(`coor`): [`Line`](Line.md)

Sets the second point of the line to the given Vector2.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coor` | [`Vector2`](Vector2.md) | The new coordinates. |

#### Returns

[`Line`](Line.md)

#### Defined in

[components/line.ts:161](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L161)

___

### setTransform

▸ **setTransform**(`transform`): [`Line`](Line.md)

Set the transformation to apply to this line segment.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | [`Transformation`](../interfaces/Transformation.md) | The transformation to apply. |

#### Returns

[`Line`](Line.md)

This line segment, for chaining.

#### Defined in

[components/line.ts:35](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L35)

___

### setVisible

▸ **setVisible**(`visible`): [`Line`](Line.md)

Sets the visibility of the line.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `visible` | `boolean` | True if the line should be visible, false otherwise. |

#### Returns

[`Line`](Line.md)

#### Defined in

[components/line.ts:177](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L177)

___

### setX1

▸ **setX1**(`x1`): [`Line`](Line.md)

Set the X coordinate of the first point of this line segment.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x1` | `number` | The new X coordinate of the first point. |

#### Returns

[`Line`](Line.md)

This line segment, for chaining.

#### Defined in

[components/line.ts:77](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L77)

___

### setX2

▸ **setX2**(`x2`): [`Line`](Line.md)

Set the X coordinate of the second point of this line segment.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x2` | `number` | The new X coordinate of the second point. |

#### Returns

[`Line`](Line.md)

This line segment, for chaining.

#### Defined in

[components/line.ts:113](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L113)

___

### setY1

▸ **setY1**(`y1`): [`Line`](Line.md)

Set the Y coordinate of the first point of this line segment.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `y1` | `number` | The new Y coordinate of the first point. |

#### Returns

[`Line`](Line.md)

This line segment, for chaining.

#### Defined in

[components/line.ts:95](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L95)

___

### setY2

▸ **setY2**(`y2`): [`Line`](Line.md)

Sets the Y coordinate of the second point of the line.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `y2` | `number` | The new Y coordinate. |

#### Returns

[`Line`](Line.md)

#### Defined in

[components/line.ts:129](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L129)

___

### translate

▸ **translate**(`shift`): [`Line`](Line.md)

Translates the line by the given Vector2.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shift` | [`Vector2`](Vector2.md) | The Vector2 to translate by. |

#### Returns

[`Line`](Line.md)

#### Defined in

[components/line.ts:200](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L200)
