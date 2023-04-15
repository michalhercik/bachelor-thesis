[rna-visualizer](../README.md) / ContainerFactory

# Class: ContainerFactory

Factory class for creating a DataContainer object that displays RNA visualization.

## Table of contents

### Constructors

- [constructor](ContainerFactory.md#constructor)

### Properties

- [basePairs](ContainerFactory.md#basepairs)
- [container](ContainerFactory.md#container)
- [data](ContainerFactory.md#data)
- [labels](ContainerFactory.md#labels)
- [margin](ContainerFactory.md#margin)
- [residues](ContainerFactory.md#residues)
- [styles](ContainerFactory.md#styles)

### Methods

- [addBasePairs](ContainerFactory.md#addbasepairs)
- [addLabels](ContainerFactory.md#addlabels)
- [addMargin](ContainerFactory.md#addmargin)
- [addResidues](ContainerFactory.md#addresidues)
- [create](ContainerFactory.md#create)
- [setDimensions](ContainerFactory.md#setdimensions)

## Constructors

### constructor

• **new ContainerFactory**()

## Properties

### basePairs

▪ `Static` `Private` **basePairs**: [`BasePair`](BasePair.md)[]

#### Defined in

[data/containerFactory.ts:27](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/containerFactory.ts#L27)

___

### container

▪ `Static` `Private` **container**: [`DataContainer`](DataContainer.md)

#### Defined in

[data/containerFactory.ts:23](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/containerFactory.ts#L23)

___

### data

▪ `Static` `Private` **data**: [`IRnaInput`](../interfaces/IRnaInput.md)

#### Defined in

[data/containerFactory.ts:24](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/containerFactory.ts#L24)

___

### labels

▪ `Static` `Private` **labels**: [`Label`](Label.md)[]

#### Defined in

[data/containerFactory.ts:28](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/containerFactory.ts#L28)

___

### margin

▪ `Static` `Private` `Readonly` **margin**: ``10``

#### Defined in

[data/containerFactory.ts:22](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/containerFactory.ts#L22)

___

### residues

▪ `Static` `Private` **residues**: [`Residue`](Residue.md)[]

#### Defined in

[data/containerFactory.ts:26](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/containerFactory.ts#L26)

___

### styles

▪ `Static` `Private` **styles**: [`Styles`](Styles.md)

#### Defined in

[data/containerFactory.ts:25](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/containerFactory.ts#L25)

## Methods

### addBasePairs

▸ `Static` `Private` **addBasePairs**(): `void`

#### Returns

`void`

#### Defined in

[data/containerFactory.ts:77](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/containerFactory.ts#L77)

___

### addLabels

▸ `Static` `Private` **addLabels**(): `void`

#### Returns

`void`

#### Defined in

[data/containerFactory.ts:109](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/containerFactory.ts#L109)

___

### addMargin

▸ `Static` `Private` **addMargin**(): `void`

#### Returns

`void`

#### Defined in

[data/containerFactory.ts:51](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/containerFactory.ts#L51)

___

### addResidues

▸ `Static` `Private` **addResidues**(): `void`

#### Returns

`void`

#### Defined in

[data/containerFactory.ts:100](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/containerFactory.ts#L100)

___

### create

▸ `Static` **create**(`data`, `styles`): [`DataContainer`](DataContainer.md)

Creates a DataContainer object for the RNA visualization.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`IRnaInput`](../interfaces/IRnaInput.md) | The RNA input data. |
| `styles` | [`Styles`](Styles.md) | The styles to apply to the visualization. |

#### Returns

[`DataContainer`](DataContainer.md)

A DataContainer object representing the IRnaInput data with given styles.

#### Defined in

[data/containerFactory.ts:36](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/containerFactory.ts#L36)

___

### setDimensions

▸ `Static` `Private` **setDimensions**(): `void`

#### Returns

`void`

#### Defined in

[data/containerFactory.ts:63](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/data/containerFactory.ts#L63)
