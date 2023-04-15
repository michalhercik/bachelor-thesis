[rna-visualizer](../README.md) / Residue

# Class: Residue

Class representing a Residue

## Table of contents

### Constructors

- [constructor](Residue.md#constructor)

### Properties

- [circle](Residue.md#circle)
- [index](Residue.md#index)
- [name](Residue.md#name)
- [templateIndex](Residue.md#templateindex)
- [templateName](Residue.md#templatename)
- [text](Residue.md#text)
- [visible](Residue.md#visible)

### Methods

- [getClasses](Residue.md#getclasses)
- [getCoor](Residue.md#getcoor)
- [getTransformedCoor](Residue.md#gettransformedcoor)
- [getTransformedX](Residue.md#gettransformedx)
- [getTransformedY](Residue.md#gettransformedy)
- [getX](Residue.md#getx)
- [getY](Residue.md#gety)
- [isVisible](Residue.md#isvisible)
- [setCoor](Residue.md#setcoor)
- [setTransform](Residue.md#settransform)
- [setVisible](Residue.md#setvisible)
- [setX](Residue.md#setx)
- [setY](Residue.md#sety)
- [translate](Residue.md#translate)
- [fromDataResidue](Residue.md#fromdataresidue)

## Constructors

### constructor

• **new Residue**(`name`, `index`, `templateName`, `templateIndex`, `circle`, `text`)

Create a Residue.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the residue. |
| `index` | `number` | The index of the residue. |
| `templateName` | `string` | The name of the template residue. |
| `templateIndex` | `number` | The index of the template residue. |
| `circle` | [`Circle`](Circle.md) | The Circle object representing the text background. |
| `text` | [`Text`](Text.md) | The Text object representing the residue name. |

#### Defined in

[components/residue.ts:31](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/residue.ts#L31)

## Properties

### circle

• **circle**: [`Circle`](Circle.md)

#### Defined in

[components/residue.ts:18](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/residue.ts#L18)

___

### index

• **index**: `number`

#### Defined in

[components/residue.ts:15](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/residue.ts#L15)

___

### name

• **name**: `string`

#### Defined in

[components/residue.ts:14](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/residue.ts#L14)

___

### templateIndex

• **templateIndex**: `number`

#### Defined in

[components/residue.ts:16](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/residue.ts#L16)

___

### templateName

• **templateName**: `string`

#### Defined in

[components/residue.ts:17](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/residue.ts#L17)

___

### text

• **text**: [`Text`](Text.md)

#### Defined in

[components/residue.ts:19](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/residue.ts#L19)

___

### visible

• **visible**: `boolean` = `true`

#### Defined in

[components/residue.ts:20](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/residue.ts#L20)

## Methods

### getClasses

▸ **getClasses**(): `string`[]

Gets the classes of the Residue text.

#### Returns

`string`[]

The array of strings representing the classes of the Residue text.

#### Defined in

[components/residue.ts:187](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/residue.ts#L187)

___

### getCoor

▸ **getCoor**(): [`Vector2`](Vector2.md)

Gets the coordinate of the Residue.

#### Returns

[`Vector2`](Vector2.md)

The Vector2 object representing the coordinate of the Residue.

#### Defined in

[components/residue.ts:151](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/residue.ts#L151)

___

### getTransformedCoor

▸ **getTransformedCoor**(): [`Vector2`](Vector2.md)

Gets the transformed coordinate of the Residue.

#### Returns

[`Vector2`](Vector2.md)

The Vector2 object representing the transformed coordinate of the Residue.

#### Defined in

[components/residue.ts:159](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/residue.ts#L159)

___

### getTransformedX

▸ **getTransformedX**(): `number`

Gets the transformed X coordinate of the Residue.

#### Returns

`number`

The transformed X coordinate of the Residue.

#### Defined in

[components/residue.ts:86](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/residue.ts#L86)

___

### getTransformedY

▸ **getTransformedY**(): `number`

Gets the transformed Y coordinate of the Residue.

#### Returns

`number`

The transformed Y coordinate of the Residue.

#### Defined in

[components/residue.ts:113](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/residue.ts#L113)

___

### getX

▸ **getX**(): `number`

Gets the X coordinate of the Residue.

#### Returns

`number`

The X coordinate of the Residue.

#### Defined in

[components/residue.ts:94](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/residue.ts#L94)

___

### getY

▸ **getY**(): `number`

Gets the Y coordinate of the Residue.

#### Returns

`number`

The Y coordinate of the Residue.

#### Defined in

[components/residue.ts:121](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/residue.ts#L121)

___

### isVisible

▸ **isVisible**(): `boolean`

Gets the visibility of the Residue.

#### Returns

`boolean`

The boolean value representing the visibility of the Residue.

#### Defined in

[components/residue.ts:179](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/residue.ts#L179)

___

### setCoor

▸ **setCoor**(`coor`): [`Residue`](Residue.md)

Sets the coordinate of the Residue.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coor` | [`Vector2`](Vector2.md) | The Vector2 object representing the coordinate to set. |

#### Returns

[`Residue`](Residue.md)

The Residue object.

#### Defined in

[components/residue.ts:141](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/residue.ts#L141)

___

### setTransform

▸ **setTransform**(`transform`): [`Residue`](Residue.md)

Sets the transformation for the Residue.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | [`Transformation`](../interfaces/Transformation.md) | The Transformation object representing the transformation to set. |

#### Returns

[`Residue`](Residue.md)

The Residue object.

#### Defined in

[components/residue.ts:76](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/residue.ts#L76)

___

### setVisible

▸ **setVisible**(`visible`): [`Residue`](Residue.md)

Sets the visibility of the Residue.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `visible` | `boolean` | The boolean value representing the visibility to set. |

#### Returns

[`Residue`](Residue.md)

The Residue object.

#### Defined in

[components/residue.ts:168](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/residue.ts#L168)

___

### setX

▸ **setX**(`x`): [`Residue`](Residue.md)

Sets the X coordinate of the Residue.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The X coordinate to set. |

#### Returns

[`Residue`](Residue.md)

The Residue object.

#### Defined in

[components/residue.ts:103](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/residue.ts#L103)

___

### setY

▸ **setY**(`y`): [`Residue`](Residue.md)

Sets the Y coordinate of the Residue.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `y` | `number` | The Y coordinate to set. |

#### Returns

[`Residue`](Residue.md)

The Residue object.

#### Defined in

[components/residue.ts:130](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/residue.ts#L130)

___

### translate

▸ **translate**(`shift`): [`Residue`](Residue.md)

Translates the residue's circle and text by the given shift vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shift` | [`Vector2`](Vector2.md) | The vector to shift the residue's circle and text by. |

#### Returns

[`Residue`](Residue.md)

This Residue instance.

#### Defined in

[components/residue.ts:197](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/residue.ts#L197)

___

### fromDataResidue

▸ `Static` **fromDataResidue**(`res`, `styles`): [`Residue`](Residue.md)

Creates a Residue from IDataResidue object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `res` | [`IDataResidue`](../interfaces/IDataResidue.md) | The IDataResidue object representing a residue. |
| `styles` | [`Styles`](Styles.md) | The Styles object representing the styles of the residue. |

#### Returns

[`Residue`](Residue.md)

A Residue object created from the given IDataResidue object.

#### Defined in

[components/residue.ts:51](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/residue.ts#L51)
