[rna-visualizer](../README.md) / Text

# Class: Text

Represents a Text object.

## Table of contents

### Constructors

- [constructor](Text.md#constructor)

### Properties

- [classes](Text.md#classes)
- [coor](Text.md#coor)
- [text](Text.md#text)
- [transform](Text.md#transform)
- [visible](Text.md#visible)

### Methods

- [getClasses](Text.md#getclasses)
- [getCoor](Text.md#getcoor)
- [getText](Text.md#gettext)
- [getTransformedX](Text.md#gettransformedx)
- [getTransformedY](Text.md#gettransformedy)
- [getX](Text.md#getx)
- [getY](Text.md#gety)
- [isVisible](Text.md#isvisible)
- [setCoor](Text.md#setcoor)
- [setTransform](Text.md#settransform)
- [setVisible](Text.md#setvisible)
- [setX](Text.md#setx)
- [setY](Text.md#sety)
- [translate](Text.md#translate)
- [width](Text.md#width)

## Constructors

### constructor

• **new Text**(`coor`, `text`, `classes`)

Creates a new Text object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coor` | [`Vector2`](Vector2.md) | The initial position of the object. |
| `text` | `string` | The text content of the object. |
| `classes` | `string`[] | An array of classes for styling the text. |

#### Defined in

[components/text.ts:24](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L24)

## Properties

### classes

• **classes**: `string`[]

#### Defined in

[components/text.ts:14](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L14)

___

### coor

• `Private` **coor**: [`Vector2`](Vector2.md)

#### Defined in

[components/text.ts:13](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L13)

___

### text

• **text**: `string`

#### Defined in

[components/text.ts:12](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L12)

___

### transform

• **transform**: [`Transformation`](../interfaces/Transformation.md) = `identity`

#### Defined in

[components/text.ts:16](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L16)

___

### visible

• **visible**: `boolean` = `true`

#### Defined in

[components/text.ts:15](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L15)

## Methods

### getClasses

▸ **getClasses**(): `string`[]

Returns the classes which are used to style the object.

#### Returns

`string`[]

The classes.

#### Defined in

[components/text.ts:140](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L140)

___

### getCoor

▸ **getCoor**(): [`Vector2`](Vector2.md)

Returns a copy of the position vector of the object.

#### Returns

[`Vector2`](Vector2.md)

The position vector.

#### Defined in

[components/text.ts:106](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L106)

___

### getText

▸ **getText**(): `string`

Returns the text content of the object.

#### Returns

`string`

The text content.

#### Defined in

[components/text.ts:132](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L132)

___

### getTransformedX

▸ **getTransformedX**(): `number`

Returns the transformed x-coordinate of the object.

#### Returns

`number`

The transformed x-coordinate.

#### Defined in

[components/text.ts:44](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L44)

___

### getTransformedY

▸ **getTransformedY**(): `number`

Returns the transformed y-coordinate of the object.

#### Returns

`number`

The transformed y-coordinate.

#### Defined in

[components/text.ts:70](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L70)

___

### getX

▸ **getX**(): `number`

Returns the x-coordinate of the object.

#### Returns

`number`

The x-coordinate.

#### Defined in

[components/text.ts:52](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L52)

___

### getY

▸ **getY**(): `number`

Returns the y-coordinate of the object.

#### Returns

`number`

The y-coordinate.

#### Defined in

[components/text.ts:78](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L78)

___

### isVisible

▸ **isVisible**(): `boolean`

Returns whether the object is visible.

#### Returns

`boolean`

Whether the object is visible.

#### Defined in

[components/text.ts:124](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L124)

___

### setCoor

▸ **setCoor**(`coor`): [`Text`](Text.md)

Sets the position of the object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coor` | [`Vector2`](Vector2.md) | The position to set. |

#### Returns

[`Text`](Text.md)

The Text object.

#### Defined in

[components/text.ts:97](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L97)

___

### setTransform

▸ **setTransform**(`transform`): [`Text`](Text.md)

Sets the transformation applied to the object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | [`Transformation`](../interfaces/Transformation.md) | The transformation to apply. |

#### Returns

[`Text`](Text.md)

The Text object.

#### Defined in

[components/text.ts:35](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L35)

___

### setVisible

▸ **setVisible**(`visible`): [`Text`](Text.md)

Sets whether the object is visible.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `visible` | `boolean` | Whether the object is visible. |

#### Returns

[`Text`](Text.md)

The Text object.

#### Defined in

[components/text.ts:115](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L115)

___

### setX

▸ **setX**(`x`): [`Text`](Text.md)

Sets the x-coordinate of the object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x-coordinate to set. |

#### Returns

[`Text`](Text.md)

The Text object.

#### Defined in

[components/text.ts:61](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L61)

___

### setY

▸ **setY**(`y`): [`Text`](Text.md)

Sets the y-coordinate of the object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `y` | `number` | The y-coordinate to set. |

#### Returns

[`Text`](Text.md)

The Text object.

#### Defined in

[components/text.ts:87](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L87)

___

### translate

▸ **translate**(`shift`): [`Text`](Text.md)

Translates the position of the object by a given shift vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shift` | [`Vector2`](Vector2.md) | The shift vector. |

#### Returns

[`Text`](Text.md)

The Text object.

#### Defined in

[components/text.ts:171](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L171)

___

### width

▸ **width**(`styles`): `number`

Returns the width of the text in pixels, given a set of styles.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `styles` | [`Styles`](Styles.md) | The styles to use. |

#### Returns

`number`

The width of the text in pixels.

#### Defined in

[components/text.ts:149](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L149)
