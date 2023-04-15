[rna-visualizer](../README.md) / Circle

# Class: Circle

A class representing a circle.

## Table of contents

### Constructors

- [constructor](Circle.md#constructor)

### Properties

- [coor](Circle.md#coor)
- [radius](Circle.md#radius)
- [scale](Circle.md#scale)
- [transform](Circle.md#transform)
- [visible](Circle.md#visible)

### Methods

- [getClasses](Circle.md#getclasses)
- [getCoor](Circle.md#getcoor)
- [getScaledRadius](Circle.md#getscaledradius)
- [getTransformedCoor](Circle.md#gettransformedcoor)
- [getTransformedX](Circle.md#gettransformedx)
- [getTransformedY](Circle.md#gettransformedy)
- [getX](Circle.md#getx)
- [getY](Circle.md#gety)
- [isVisible](Circle.md#isvisible)
- [setCoor](Circle.md#setcoor)
- [setScale](Circle.md#setscale)
- [setTransform](Circle.md#settransform)
- [setVisible](Circle.md#setvisible)
- [setX](Circle.md#setx)
- [setY](Circle.md#sety)
- [translate](Circle.md#translate)

## Constructors

### constructor

• **new Circle**(`coor`, `radius`)

Creates a new circle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coor` | [`Vector2`](Vector2.md) | The center coordinates of the circle. |
| `radius` | `number` | The radius of the circle. |

#### Defined in

[components/circle.ts:22](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L22)

## Properties

### coor

• `Private` **coor**: [`Vector2`](Vector2.md)

#### Defined in

[components/circle.ts:11](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L11)

___

### radius

• **radius**: `number`

#### Defined in

[components/circle.ts:12](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L12)

___

### scale

• **scale**: `number` = `1`

#### Defined in

[components/circle.ts:13](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L13)

___

### transform

• **transform**: [`Transformation`](../interfaces/Transformation.md) = `identity`

#### Defined in

[components/circle.ts:15](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L15)

___

### visible

• **visible**: `boolean` = `true`

#### Defined in

[components/circle.ts:14](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L14)

## Methods

### getClasses

▸ **getClasses**(): `string`[]

Gets the classes associated with the circle.

#### Returns

`string`[]

The classes associated with the circle.

#### Defined in

[components/circle.ts:158](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L158)

___

### getCoor

▸ **getCoor**(): [`Vector2`](Vector2.md)

Gets the center coordinates of the circle.

#### Returns

[`Vector2`](Vector2.md)

A copy of the center coordinates as a Vector2 object.

#### Defined in

[components/circle.ts:103](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L103)

___

### getScaledRadius

▸ **getScaledRadius**(): `number`

Gets the scaled radius of the circle.

#### Returns

`number`

The scaled radius.

#### Defined in

[components/circle.ts:122](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L122)

___

### getTransformedCoor

▸ **getTransformedCoor**(): [`Vector2`](Vector2.md)

Gets the transformed center coordinates of the circle.

#### Returns

[`Vector2`](Vector2.md)

The transformed center coordinates as a Vector2 object.

#### Defined in

[components/circle.ts:111](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L111)

___

### getTransformedX

▸ **getTransformedX**(): `number`

Gets the transformed X coordinate of the circle center.

#### Returns

`number`

The transformed X coordinate.

#### Defined in

[components/circle.ts:41](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L41)

___

### getTransformedY

▸ **getTransformedY**(): `number`

Gets the transformed Y coordinate of the circle center.

#### Returns

`number`

The transformed Y coordinate.

#### Defined in

[components/circle.ts:67](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L67)

___

### getX

▸ **getX**(): `number`

Gets the X coordinate of the circle center.

#### Returns

`number`

The X coordinate.

#### Defined in

[components/circle.ts:49](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L49)

___

### getY

▸ **getY**(): `number`

Gets the Y coordinate of the circle center.

#### Returns

`number`

The Y coordinate.

#### Defined in

[components/circle.ts:75](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L75)

___

### isVisible

▸ **isVisible**(): `boolean`

Determines whether the circle is visible.

#### Returns

`boolean`

Whether the circle is visible.

#### Defined in

[components/circle.ts:150](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L150)

___

### setCoor

▸ **setCoor**(`coor`): [`Circle`](Circle.md)

Sets the center coordinates of the circle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coor` | [`Vector2`](Vector2.md) | The center coordinates to set. |

#### Returns

[`Circle`](Circle.md)

The circle object.

#### Defined in

[components/circle.ts:94](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L94)

___

### setScale

▸ **setScale**(`scale`): [`Circle`](Circle.md)

Sets the scaling factor of the circle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | `number` | The scaling factor to set. |

#### Returns

[`Circle`](Circle.md)

The circle object.

#### Defined in

[components/circle.ts:131](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L131)

___

### setTransform

▸ **setTransform**(`transform`): [`Circle`](Circle.md)

Sets a transformation for the circle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | [`Transformation`](../interfaces/Transformation.md) | The transformation to set. |

#### Returns

[`Circle`](Circle.md)

The circle object.

#### Defined in

[components/circle.ts:32](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L32)

___

### setVisible

▸ **setVisible**(`visible`): [`Circle`](Circle.md)

Sets the visibility of the circle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `visible` | `boolean` | The visibility to set. |

#### Returns

[`Circle`](Circle.md)

The circle object.

#### Defined in

[components/circle.ts:141](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L141)

___

### setX

▸ **setX**(`x`): [`Circle`](Circle.md)

Sets the X coordinate of the circle center.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The X coordinate to set. |

#### Returns

[`Circle`](Circle.md)

The circle object.

#### Defined in

[components/circle.ts:58](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L58)

___

### setY

▸ **setY**(`y`): [`Circle`](Circle.md)

Sets the Y coordinate of the circle center.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `y` | `number` | The Y coordinate to set. |

#### Returns

[`Circle`](Circle.md)

The circle object.

#### Defined in

[components/circle.ts:84](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L84)

___

### translate

▸ **translate**(`shift`): [`Circle`](Circle.md)

Translates the circle by the given vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shift` | [`Vector2`](Vector2.md) | The vector by which to translate the circle. |

#### Returns

[`Circle`](Circle.md)

The circle object.

#### Defined in

[components/circle.ts:167](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L167)
