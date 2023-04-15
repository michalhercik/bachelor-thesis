[rna-visualizer](../README.md) / DataContainer

# Class: DataContainer

Represents a container that holds data for rendering a visualization.

## Table of contents

### Constructors

- [constructor](DataContainer.md#constructor)

### Properties

- [basePairs](DataContainer.md#basepairs)
- [height](DataContainer.md#height)
- [labels](DataContainer.md#labels)
- [residues](DataContainer.md#residues)
- [styles](DataContainer.md#styles)
- [width](DataContainer.md#width)

### Methods

- [getCircles](DataContainer.md#getcircles)
- [getClosestResByCoor](DataContainer.md#getclosestresbycoor)
- [getLines](DataContainer.md#getlines)
- [getMappableResidues](DataContainer.md#getmappableresidues)
- [getResByCoor](DataContainer.md#getresbycoor)
- [getText](DataContainer.md#gettext)
- [getUnmappableResidues](DataContainer.md#getunmappableresidues)
- [translate](DataContainer.md#translate)
- [update](DataContainer.md#update)

## Constructors

### constructor

• **new DataContainer**(`residues`, `basePairs`, `labels`, `styles`)

Initializes a new instance of the DataContainer class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `residues` | [`Residue`](Residue.md)[] | The residues to render. |
| `basePairs` | [`BasePair`](BasePair.md)[] | The base pairs to render. |
| `labels` | [`Label`](Label.md)[] | The labels to render. |
| `styles` | [`Styles`](Styles.md) | The styles to apply. |

#### Defined in

[data/dataContainer.ts:33](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/dataContainer.ts#L33)

## Properties

### basePairs

• **basePairs**: [`BasePair`](BasePair.md)[]

#### Defined in

[data/dataContainer.ts:23](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/dataContainer.ts#L23)

___

### height

• **height**: `number`

#### Defined in

[data/dataContainer.ts:20](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/dataContainer.ts#L20)

___

### labels

• **labels**: [`Label`](Label.md)[]

#### Defined in

[data/dataContainer.ts:24](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/dataContainer.ts#L24)

___

### residues

• **residues**: [`Residue`](Residue.md)[]

#### Defined in

[data/dataContainer.ts:22](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/dataContainer.ts#L22)

___

### styles

• `Readonly` **styles**: [`Styles`](Styles.md)

#### Defined in

[data/dataContainer.ts:18](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/dataContainer.ts#L18)

___

### width

• **width**: `number`

#### Defined in

[data/dataContainer.ts:19](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/dataContainer.ts#L19)

## Methods

### getCircles

▸ **getCircles**(): [`Circle`](Circle.md)[]

Gets an array of Circle objects that represent the circles to render.

#### Returns

[`Circle`](Circle.md)[]

An array of Circle objects.

#### Defined in

[data/dataContainer.ts:62](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/dataContainer.ts#L62)

___

### getClosestResByCoor

▸ **getClosestResByCoor**(`x`, `y`, `maxDistance?`): [`Residue`](Residue.md)

Gets the closest residue to the specified coordinates within the specified maximum distance.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `undefined` | The x-coordinate. |
| `y` | `number` | `undefined` | The y-coordinate. |
| `maxDistance` | `number` | `100` | The maximum distance from the specified coordinates. |

#### Returns

[`Residue`](Residue.md)

The closest residue to the specified coordinates within the specified maximum distance, or null if no such residue exists.

#### Defined in

[data/dataContainer.ts:123](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/dataContainer.ts#L123)

___

### getLines

▸ **getLines**(): [`ILine`](../interfaces/ILine.md)[]

Gets an array of ILine objects that represent the lines to render.

#### Returns

[`ILine`](../interfaces/ILine.md)[]

An array of ILine objects.

#### Defined in

[data/dataContainer.ts:44](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/dataContainer.ts#L44)

___

### getMappableResidues

▸ **getMappableResidues**(): [`Residue`](Residue.md)[]

Gets an array of residues that can be mapped to a template.

#### Returns

[`Residue`](Residue.md)[]

An array of mappable residues.

#### Defined in

[data/dataContainer.ts:154](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/dataContainer.ts#L154)

___

### getResByCoor

▸ **getResByCoor**(`x`, `y`): [`Residue`](Residue.md)

Gets the residue at the specified coordinates.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x-coordinate. |
| `y` | `number` | The y-coordinate. |

#### Returns

[`Residue`](Residue.md)

The residue at the specified coordinates, or null if no such residue exists.

#### Defined in

[data/dataContainer.ts:99](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/dataContainer.ts#L99)

___

### getText

▸ **getText**(): [`Text`](Text.md)[]

Gets an array of Text objects that represent the text to render.

#### Returns

[`Text`](Text.md)[]

An array of Text objects.

#### Defined in

[data/dataContainer.ts:53](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/dataContainer.ts#L53)

___

### getUnmappableResidues

▸ **getUnmappableResidues**(): [`Residue`](Residue.md)[]

Gets an array of residues that cannot be mapped to a template.

#### Returns

[`Residue`](Residue.md)[]

An array of unmappable residues.

#### Defined in

[data/dataContainer.ts:146](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/dataContainer.ts#L146)

___

### translate

▸ **translate**(`shift`): `void`

Translates the objects by the specified amount.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shift` | [`Vector2`](Vector2.md) | The amount to translate the visualization. |

#### Returns

`void`

#### Defined in

[data/dataContainer.ts:162](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/dataContainer.ts#L162)

___

### update

▸ **update**(`event`): `void`

Updates the visualization with the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `any` | The event to use for the update. |

#### Returns

`void`

#### Defined in

[data/dataContainer.ts:70](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/dataContainer.ts#L70)
