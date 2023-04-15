[rna-visualizer](../README.md) / Layer

# Class: Layer

A layer is a collection of data for structure and mapping lines to template.

## Table of contents

### Constructors

- [constructor](Layer.md#constructor)

### Properties

- [data](Layer.md#data)
- [mappingLines](Layer.md#mappinglines)
- [name](Layer.md#name)
- [visible](Layer.md#visible)

## Constructors

### constructor

• **new Layer**(`data`, `name`, `mappingLines`, `visible?`)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `data` | [`DataContainer`](DataContainer.md) | `undefined` | The data container for the layer |
| `name` | `string` | `undefined` | The name of the layer |
| `mappingLines` | [`MappingLine`](MappingLine.md)[] | `undefined` | The mapping lines for the layer |
| `visible` | `boolean` | `true` | Whether the layer is visible or not |

#### Defined in

[components/layer.ts:19](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/layer.ts#L19)

## Properties

### data

• **data**: [`DataContainer`](DataContainer.md)

#### Defined in

[components/layer.ts:9](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/layer.ts#L9)

___

### mappingLines

• **mappingLines**: [`MappingLine`](MappingLine.md)[]

#### Defined in

[components/layer.ts:10](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/layer.ts#L10)

___

### name

• **name**: `string`

#### Defined in

[components/layer.ts:8](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/layer.ts#L8)

___

### visible

• **visible**: `boolean` = `true`

#### Defined in

[components/layer.ts:11](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/layer.ts#L11)
