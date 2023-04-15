[rna-visualizer](../README.md) / TranslationGroup

# Class: TranslationGroup

Represents a translation group with given translation.

## Table of contents

### Constructors

- [constructor](TranslationGroup.md#constructor)

### Properties

- [members](TranslationGroup.md#members)
- [xShift](TranslationGroup.md#xshift)
- [yShift](TranslationGroup.md#yshift)

### Methods

- [has](TranslationGroup.md#has)
- [push](TranslationGroup.md#push)
- [size](TranslationGroup.md#size)

## Constructors

### constructor

• **new TranslationGroup**(`x`, `y`, `member`)

Creates a translation group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x shift. |
| `y` | `number` | The y shift. |
| `member` | [`Residue`](Residue.md) | The member residue. |

#### Defined in

[data/translationGroup.ts:17](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/translationGroup.ts#L17)

## Properties

### members

• **members**: [`Residue`](Residue.md)[]

#### Defined in

[data/translationGroup.ts:9](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/translationGroup.ts#L9)

___

### xShift

• **xShift**: `number`

#### Defined in

[data/translationGroup.ts:7](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/translationGroup.ts#L7)

___

### yShift

• **yShift**: `number`

#### Defined in

[data/translationGroup.ts:8](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/translationGroup.ts#L8)

## Methods

### has

▸ **has**(`index`): `boolean`

Returns whether the group has a member residue with the given index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index to check for. |

#### Returns

`boolean`

Whether the group has a member residue with the given index.

#### Defined in

[data/translationGroup.ts:44](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/translationGroup.ts#L44)

___

### push

▸ **push**(`member`): `void`

Adds a member residue to the group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `member` | [`Residue`](Residue.md) | The member residue to add. |

#### Returns

`void`

#### Defined in

[data/translationGroup.ts:27](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/translationGroup.ts#L27)

___

### size

▸ **size**(): `number`

Returns the number of members in the group.

#### Returns

`number`

The number of members in the group.

#### Defined in

[data/translationGroup.ts:35](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/translationGroup.ts#L35)
