[rna-visualizer](../README.md) / PositionRecord

# Class: PositionRecord

A class representing a record of position targets for labels and residues.

## Table of contents

### Constructors

- [constructor](PositionRecord.md#constructor)

### Properties

- [labelLines](PositionRecord.md#labellines)
- [labelTexts](PositionRecord.md#labeltexts)
- [residues](PositionRecord.md#residues)

### Methods

- [fromDataContainer](PositionRecord.md#fromdatacontainer)
- [fromTemplate](PositionRecord.md#fromtemplate)
- [fromTranslation](PositionRecord.md#fromtranslation)

## Constructors

### constructor

• **new PositionRecord**(`labelLines`, `labelTexts`, `residues`)

Constructor for a PositionRecord object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `labelLines` | `Map`<`string`, [`DoubleCoorTarget`](DoubleCoorTarget.md)\> | The map of label line targets. |
| `labelTexts` | `Map`<`string`, [`SingleCoorTarget`](SingleCoorTarget.md)\> | The map of label text targets. |
| `residues` | `Map`<`string`, [`SingleCoorTarget`](SingleCoorTarget.md)\> | The map of residue targets. |

#### Defined in

[components/positionRecord.ts:34](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/positionRecord.ts#L34)

## Properties

### labelLines

• `Readonly` **labelLines**: `Map`<`string`, [`DoubleCoorTarget`](DoubleCoorTarget.md)\>

Map containing the target coordinates of the label lines, with the key being the residue index as a string.

**`Param`**

The map of label line targets.

#### Defined in

[components/positionRecord.ts:16](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/positionRecord.ts#L16)

___

### labelTexts

• `Readonly` **labelTexts**: `Map`<`string`, [`SingleCoorTarget`](SingleCoorTarget.md)\>

Map containing the target coordinates of the label texts, with the key being the residue index as a string.

**`Param`**

The map of label text targets.

#### Defined in

[components/positionRecord.ts:21](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/positionRecord.ts#L21)

___

### residues

• `Readonly` **residues**: `Map`<`string`, [`SingleCoorTarget`](SingleCoorTarget.md)\>

Map containing the target coordinates of the residues, with the key being the residue index as a string.

**`Param`**

The map of residue targets.

#### Defined in

[components/positionRecord.ts:26](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/positionRecord.ts#L26)

## Methods

### fromDataContainer

▸ `Static` **fromDataContainer**(`container`): [`PositionRecord`](PositionRecord.md)

Creates a new PositionRecord object from the given DataContainer object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `container` | [`DataContainer`](DataContainer.md) | The DataContainer object from which to create the PositionRecord object. |

#### Returns

[`PositionRecord`](PositionRecord.md)

A new PositionRecord object.

#### Defined in

[components/positionRecord.ts:47](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/positionRecord.ts#L47)

___

### fromTemplate

▸ `Static` **fromTemplate**(`container`, `template`): [`PositionRecord`](PositionRecord.md)

Creates a new PositionRecord object from the given DataContainer with coordinates from the given template DataContainer object. Residue is added to record only if it has template residue.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `container` | [`DataContainer`](DataContainer.md) | The DataContainer object from which to create the PositionRecord object. |
| `template` | [`DataContainer`](DataContainer.md) | The template DataContainer object from which are taken coordinates. |

#### Returns

[`PositionRecord`](PositionRecord.md)

A new PositionRecord object.

#### Defined in

[components/positionRecord.ts:77](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/positionRecord.ts#L77)

___

### fromTranslation

▸ `Static` **fromTranslation**(`container`, `shift`): [`PositionRecord`](PositionRecord.md)

Creates a new PositionRecord object from the given DataContainer object and all coordinates are transalted by a Vector2 shift.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `container` | [`DataContainer`](DataContainer.md) | The DataContainer object from which to create the PositionRecord object. |
| `shift` | [`Vector2`](Vector2.md) | The Vector2 shift to apply to the target coordinates. |

#### Returns

[`PositionRecord`](PositionRecord.md)

A new PositionRecord object.

#### Defined in

[components/positionRecord.ts:118](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/positionRecord.ts#L118)
