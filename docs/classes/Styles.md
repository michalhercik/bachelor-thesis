[rna-visualizer](../README.md) / Styles

# Class: Styles

A class for defining and managing styles for RNA visualization.

## Table of contents

### Constructors

- [constructor](Styles.md#constructor)

### Properties

- [default](Styles.md#default)
- [styles](Styles.md#styles)
- [TRANSFORMED\_CLASS](Styles.md#transformed_class)

### Methods

- [addFrom](Styles.md#addfrom)
- [get](Styles.md#get)
- [getProperty](Styles.md#getproperty)
- [reset](Styles.md#reset)
- [set](Styles.md#set)
- [randomHexColor](Styles.md#randomhexcolor)

## Constructors

### constructor

• **new Styles**()

## Properties

### default

• `Private` **default**: `Map`<`string`, `object`\>

The default map of styles for RNA visualization.

#### Defined in

[styles.ts:21](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/styles.ts#L21)

___

### styles

• **styles**: `Map`<`string`, `object`\>

The map of custom styles for RNA visualization.

#### Defined in

[styles.ts:84](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/styles.ts#L84)

___

### TRANSFORMED\_CLASS

▪ `Static` **TRANSFORMED\_CLASS**: `string` = `'transform'`

The name of the class to add to transformed structure.

#### Defined in

[styles.ts:16](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/styles.ts#L16)

## Methods

### addFrom

▸ **addFrom**(`classes`): `void`

Adds a set of styles to the custom styles map.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `classes` | `object`[] | An array of style objects to add to the map. |

#### Returns

`void`

#### Defined in

[styles.ts:90](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/styles.ts#L90)

___

### get

▸ **get**(`names`): `any`

Gets the style values for one or more style names combine in one object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `names` | `string`[] | An array of style names to get. |

#### Returns

`any`

An object containing the style values.

#### Defined in

[styles.ts:114](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/styles.ts#L114)

___

### getProperty

▸ **getProperty**(`names`, `property`): `string`

Gets the value of a specific property for one or more style names.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `names` | `string`[] | An array of style names to get. |
| `property` | `string` | The name of the property to get. |

#### Returns

`string`

The value of the specified property.

#### Defined in

[styles.ts:126](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/styles.ts#L126)

___

### reset

▸ **reset**(): `void`

Resets the custom styles map to its default values.

#### Returns

`void`

#### Defined in

[styles.ts:135](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/styles.ts#L135)

___

### set

▸ **set**(`name`, `value`): `void`

Sets a style value in the custom styles map.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the style to set. |
| `value` | `object` | The value to set for the style. |

#### Returns

`void`

#### Defined in

[styles.ts:102](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/styles.ts#L102)

___

### randomHexColor

▸ `Static` **randomHexColor**(): `string`

Generates a random hexadecimal color code.

#### Returns

`string`

A randomly generated hexadecimal color code.

#### Defined in

[styles.ts:143](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/styles.ts#L143)
