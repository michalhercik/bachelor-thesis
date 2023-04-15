[rna-visualizer](../README.md) / TranslationGroups

# Class: TranslationGroups

A utility class for creating and manipulating TranslationGroups.

## Table of contents

### Constructors

- [constructor](TranslationGroups.md#constructor)

### Methods

- [create](TranslationGroups.md#create)
- [getBest](TranslationGroups.md#getbest)

## Constructors

### constructor

• **new TranslationGroups**()

## Methods

### create

▸ `Static` **create**(`contA`, `contB`, `group?`, `filter?`): [`TranslationGroup`](TranslationGroup.md)[]

Creates TranslationGroups from two DataContainers, optionally filtered by a specific group and a minimum size.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `contA` | [`DataContainer`](DataContainer.md) | `undefined` | The first DataContainer. |
| `contB` | [`DataContainer`](DataContainer.md) | `undefined` | The second DataContainer. |
| `group` | [`TranslationGroup`](TranslationGroup.md) | `null` | Optional TranslationGroup to filter by. |
| `filter` | `number` | `5` | Minimum size for generated TranslationGroups. |

#### Returns

[`TranslationGroup`](TranslationGroup.md)[]

An array of TranslationGroups.

#### Defined in

[data/translationGroups.ts:19](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/translationGroups.ts#L19)

___

### getBest

▸ `Static` **getBest**(`groups`): [`TranslationGroup`](TranslationGroup.md)

Returns the largest TranslationGroup from an array of TranslationGroups.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `groups` | [`TranslationGroup`](TranslationGroup.md)[] | The array of TranslationGroups to search. |

#### Returns

[`TranslationGroup`](TranslationGroup.md)

The largest TranslationGroup.

#### Defined in

[data/translationGroups.ts:44](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/translationGroups.ts#L44)
