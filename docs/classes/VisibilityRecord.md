[rna-visualizer](../README.md) / VisibilityRecord

# Class: VisibilityRecord

Stores information about the visibility of residues in a structure for animation.

## Table of contents

### Constructors

- [constructor](VisibilityRecord.md#constructor)

### Properties

- [active](VisibilityRecord.md#active)
- [residues](VisibilityRecord.md#residues)
- [to](VisibilityRecord.md#to)

### Methods

- [isActive](VisibilityRecord.md#isactive)
- [setActive](VisibilityRecord.md#setactive)

## Constructors

### constructor

• **new VisibilityRecord**(`residues`, `to`)

Creates a new VisibilityRecord.

**`Throws`**

Error if the length of `residues` and `to` arrays differ.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `residues` | [`Residue`](Residue.md)[] | Array of residues. |
| `to` | `boolean`[] | Array of boolean values. |

#### Defined in

[components/visibilityRecord.ts:23](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/visibilityRecord.ts#L23)

## Properties

### active

• **active**: `boolean` = `true`

Boolean indicating if this VisibilityRecord is used in animation.

#### Defined in

[components/visibilityRecord.ts:15](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/visibilityRecord.ts#L15)

___

### residues

• **residues**: [`Residue`](Residue.md)[]

#### Defined in

[components/visibilityRecord.ts:7](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/visibilityRecord.ts#L7)

___

### to

• **to**: `boolean`[]

Array of boolean values indicating whether a residue is visible or not at the end of a animation.

#### Defined in

[components/visibilityRecord.ts:11](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/visibilityRecord.ts#L11)

## Methods

### isActive

▸ **isActive**(): `boolean`

Returns the `active` flag for this VisibilityRecord.

#### Returns

`boolean`

A boolean indicating if this VisibilityRecord is active or not.

#### Defined in

[components/visibilityRecord.ts:43](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/visibilityRecord.ts#L43)

___

### setActive

▸ **setActive**(`active`): `void`

Sets the `active` flag for this VisibilityRecord.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `active` | `boolean` | Boolean value to set as the `active` flag. |

#### Returns

`void`

#### Defined in

[components/visibilityRecord.ts:35](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/visibilityRecord.ts#L35)
