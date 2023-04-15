[rna-visualizer](../README.md) / MappingLine

# Class: MappingLine

Represents a line between two residues that are mapped to each other.

## Implements

- [`ILine`](../interfaces/ILine.md)

## Table of contents

### Constructors

- [constructor](MappingLine.md#constructor)

### Properties

- [classes](MappingLine.md#classes)
- [residue1](MappingLine.md#residue1)
- [residue2](MappingLine.md#residue2)
- [visible](MappingLine.md#visible)

### Methods

- [getClasses](MappingLine.md#getclasses)
- [getTransformedX1](MappingLine.md#gettransformedx1)
- [getTransformedX2](MappingLine.md#gettransformedx2)
- [getTransformedY1](MappingLine.md#gettransformedy1)
- [getTransformedY2](MappingLine.md#gettransformedy2)
- [getX1](MappingLine.md#getx1)
- [getX2](MappingLine.md#getx2)
- [getY1](MappingLine.md#gety1)
- [getY2](MappingLine.md#gety2)
- [isVisible](MappingLine.md#isvisible)
- [setVisible](MappingLine.md#setvisible)
- [createMappingLines](MappingLine.md#createmappinglines)

## Constructors

### constructor

• **new MappingLine**(`residue1`, `residue2`, `classes`)

Constructs a MappingLine object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `residue1` | [`Residue`](Residue.md) | the first residue object |
| `residue2` | [`Residue`](Residue.md) | the second residue object |
| `classes` | `string`[] | an array of strings representing the classes of the MappingLine object for styling the line. |

#### Defined in

[components/mappingLine.ts:19](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/mappingLine.ts#L19)

## Properties

### classes

• **classes**: `string`[]

#### Defined in

[components/mappingLine.ts:10](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/mappingLine.ts#L10)

___

### residue1

• **residue1**: [`Residue`](Residue.md)

#### Defined in

[components/mappingLine.ts:8](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/mappingLine.ts#L8)

___

### residue2

• **residue2**: [`Residue`](Residue.md)

#### Defined in

[components/mappingLine.ts:9](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/mappingLine.ts#L9)

___

### visible

• **visible**: `boolean` = `true`

#### Defined in

[components/mappingLine.ts:11](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/mappingLine.ts#L11)

## Methods

### getClasses

▸ **getClasses**(): `string`[]

Gets an array of strings representing the classes of the MappingLine object

#### Returns

`string`[]

an array of strings representing the classes of the MappingLine object

#### Implementation of

[ILine](../interfaces/ILine.md).[getClasses](../interfaces/ILine.md#getclasses)

#### Defined in

[components/mappingLine.ts:109](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/mappingLine.ts#L109)

___

### getTransformedX1

▸ **getTransformedX1**(): `number`

Gets the transformed X coordinate of the first residue

#### Returns

`number`

a number representing the transformed X coordinate of the first residue

#### Implementation of

[ILine](../interfaces/ILine.md).[getTransformedX1](../interfaces/ILine.md#gettransformedx1)

#### Defined in

[components/mappingLine.ts:29](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/mappingLine.ts#L29)

___

### getTransformedX2

▸ **getTransformedX2**(): `number`

Gets the transformed X coordinate of the second residue

#### Returns

`number`

a number representing the transformed X coordinate of the second residue

#### Implementation of

[ILine](../interfaces/ILine.md).[getTransformedX2](../interfaces/ILine.md#gettransformedx2)

#### Defined in

[components/mappingLine.ts:45](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/mappingLine.ts#L45)

___

### getTransformedY1

▸ **getTransformedY1**(): `number`

Gets the transformed Y coordinate of the first residue

#### Returns

`number`

a number representing the transformed Y coordinate of the first residue

#### Implementation of

[ILine](../interfaces/ILine.md).[getTransformedY1](../interfaces/ILine.md#gettransformedy1)

#### Defined in

[components/mappingLine.ts:37](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/mappingLine.ts#L37)

___

### getTransformedY2

▸ **getTransformedY2**(): `number`

Gets the transformed Y coordinate of the second residue

#### Returns

`number`

a number representing the transformed Y coordinate of the second residue

#### Implementation of

[ILine](../interfaces/ILine.md).[getTransformedY2](../interfaces/ILine.md#gettransformedy2)

#### Defined in

[components/mappingLine.ts:53](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/mappingLine.ts#L53)

___

### getX1

▸ **getX1**(): `number`

Gets the X coordinate of the first residue

#### Returns

`number`

a number representing the X coordinate of the first residue

#### Implementation of

[ILine](../interfaces/ILine.md).[getX1](../interfaces/ILine.md#getx1)

#### Defined in

[components/mappingLine.ts:61](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/mappingLine.ts#L61)

___

### getX2

▸ **getX2**(): `number`

Gets the X coordinate of the second residue

#### Returns

`number`

a number representing the X coordinate of the second residue

#### Implementation of

[ILine](../interfaces/ILine.md).[getX2](../interfaces/ILine.md#getx2)

#### Defined in

[components/mappingLine.ts:77](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/mappingLine.ts#L77)

___

### getY1

▸ **getY1**(): `number`

Gets the Y coordinate of the first residue

#### Returns

`number`

a number representing the Y coordinate of the first residue

#### Implementation of

[ILine](../interfaces/ILine.md).[getY1](../interfaces/ILine.md#gety1)

#### Defined in

[components/mappingLine.ts:69](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/mappingLine.ts#L69)

___

### getY2

▸ **getY2**(): `number`

Gets the Y coordinate of the second residue

#### Returns

`number`

a number representing the Y coordinate of the second residue

#### Implementation of

[ILine](../interfaces/ILine.md).[getY2](../interfaces/ILine.md#gety2)

#### Defined in

[components/mappingLine.ts:85](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/mappingLine.ts#L85)

___

### isVisible

▸ **isVisible**(): `boolean`

Gets the visibility of the MappingLine object

#### Returns

`boolean`

a boolean value representing the visibility of the MappingLine object

#### Implementation of

[ILine](../interfaces/ILine.md).[isVisible](../interfaces/ILine.md#isvisible)

#### Defined in

[components/mappingLine.ts:101](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/mappingLine.ts#L101)

___

### setVisible

▸ **setVisible**(`visible`): `void`

Sets the visibility of the MappingLine object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `visible` | `boolean` | a boolean value representing the visibility of the MappingLine object |

#### Returns

`void`

#### Defined in

[components/mappingLine.ts:93](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/mappingLine.ts#L93)

___

### createMappingLines

▸ `Static` **createMappingLines**(`template`, `container`, `classes?`): [`MappingLine`](MappingLine.md)[]

Creates MappingLine objects for each residue pair that can be mapped between template and derived container.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `template` | [`DataContainer`](DataContainer.md) | The DataContainer representing the template structure. |
| `container` | [`DataContainer`](DataContainer.md) | The DataContainer representing the derived structure. |
| `classes` | `string`[] | (Optional) An array of strings to set as the classes property for each MappingLine object. |

#### Returns

[`MappingLine`](MappingLine.md)[]

An array of MappingLine objects representing the residue mappings between template and derived container.

#### Defined in

[components/mappingLine.ts:120](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/mappingLine.ts#L120)
