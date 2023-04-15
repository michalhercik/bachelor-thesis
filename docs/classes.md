[rna-visualizer](../README.md) / BasePair

# Class: BasePair

Represents a base pair.

**`Implements`**

## Implements

- [`ILine`](../interfaces/ILine.md)

## Table of contents

### Constructors

- [constructor](BasePair.md#constructor)

### Properties

- [classes](BasePair.md#classes)
- [residue1](BasePair.md#residue1)
- [residue2](BasePair.md#residue2)

### Methods

- [getClasses](BasePair.md#getclasses)
- [getTransformedX1](BasePair.md#gettransformedx1)
- [getTransformedX2](BasePair.md#gettransformedx2)
- [getTransformedY1](BasePair.md#gettransformedy1)
- [getTransformedY2](BasePair.md#gettransformedy2)
- [getX1](BasePair.md#getx1)
- [getX2](BasePair.md#getx2)
- [getY1](BasePair.md#gety1)
- [getY2](BasePair.md#gety2)
- [isVisible](BasePair.md#isvisible)

## Constructors

### constructor

• **new BasePair**(`residue1`, `residue2`, `classes`)

Creates a new instance of BasePair.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `residue1` | [`Residue`](Residue.md) | The first residue of the base pair. |
| `residue2` | [`Residue`](Residue.md) | The second residue of the base pair. |
| `classes` | `string`[] | The classes associated with the base pair. |

#### Defined in

[components/basePair.ts:23](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/basePair.ts#L23)

## Properties

### classes

• **classes**: `string`[]

#### Defined in

[components/basePair.ts:15](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/basePair.ts#L15)

___

### residue1

• **residue1**: [`Residue`](Residue.md)

#### Defined in

[components/basePair.ts:13](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/basePair.ts#L13)

___

### residue2

• **residue2**: [`Residue`](Residue.md)

#### Defined in

[components/basePair.ts:14](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/basePair.ts#L14)

## Methods

### getClasses

▸ **getClasses**(): `string`[]

Gets the classes associated with the base pair.

#### Returns

`string`[]

The classes associated with the base pair.

#### Implementation of

[ILine](../interfaces/ILine.md).[getClasses](../interfaces/ILine.md#getclasses)

#### Defined in

[components/basePair.ts:105](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/basePair.ts#L105)

___

### getTransformedX1

▸ **getTransformedX1**(): `number`

Gets the x coordinate of the first residue after transformation.

#### Returns

`number`

The x coordinate of the first residue after transformation.

#### Implementation of

[ILine](../interfaces/ILine.md).[getTransformedX1](../interfaces/ILine.md#gettransformedx1)

#### Defined in

[components/basePair.ts:33](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/basePair.ts#L33)

___

### getTransformedX2

▸ **getTransformedX2**(): `number`

Gets the x coordinate of the second residue after transformation.

#### Returns

`number`

The x coordinate of the second residue after transformation.

#### Implementation of

[ILine](../interfaces/ILine.md).[getTransformedX2](../interfaces/ILine.md#gettransformedx2)

#### Defined in

[components/basePair.ts:49](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/basePair.ts#L49)

___

### getTransformedY1

▸ **getTransformedY1**(): `number`

Gets the y coordinate of the first residue after transformation.

#### Returns

`number`

The y coordinate of the first residue after transformation.

#### Implementation of

[ILine](../interfaces/ILine.md).[getTransformedY1](../interfaces/ILine.md#gettransformedy1)

#### Defined in

[components/basePair.ts:41](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/basePair.ts#L41)

___

### getTransformedY2

▸ **getTransformedY2**(): `number`

Gets the y coordinate of the second residue after transformation.

#### Returns

`number`

The y coordinate of the second residue after transformation.

#### Implementation of

[ILine](../interfaces/ILine.md).[getTransformedY2](../interfaces/ILine.md#gettransformedy2)

#### Defined in

[components/basePair.ts:57](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/basePair.ts#L57)

___

### getX1

▸ **getX1**(): `number`

Gets the x coordinate of the first residue.

#### Returns

`number`

The x coordinate of the first residue.

#### Implementation of

[ILine](../interfaces/ILine.md).[getX1](../interfaces/ILine.md#getx1)

#### Defined in

[components/basePair.ts:65](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/basePair.ts#L65)

___

### getX2

▸ **getX2**(): `number`

Gets the x coordinate of the second residue.

#### Returns

`number`

The x coordinate of the second residue.

#### Implementation of

[ILine](../interfaces/ILine.md).[getX2](../interfaces/ILine.md#getx2)

#### Defined in

[components/basePair.ts:81](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/basePair.ts#L81)

___

### getY1

▸ **getY1**(): `number`

Gets the y coordinate of the first residue.

#### Returns

`number`

The y coordinate of the first residue.

#### Implementation of

[ILine](../interfaces/ILine.md).[getY1](../interfaces/ILine.md#gety1)

#### Defined in

[components/basePair.ts:73](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/basePair.ts#L73)

___

### getY2

▸ **getY2**(): `number`

Gets the y coordinate of the second residue.

#### Returns

`number`

The y coordinate of the second residue.

#### Implementation of

[ILine](../interfaces/ILine.md).[getY2](../interfaces/ILine.md#gety2)

#### Defined in

[components/basePair.ts:89](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/basePair.ts#L89)

___

### isVisible

▸ **isVisible**(): `boolean`

Determines whether the base pair is visible.

#### Returns

`boolean`

Whether the base pair is visible.

#### Implementation of

[ILine](../interfaces/ILine.md).[isVisible](../interfaces/ILine.md#isvisible)

#### Defined in

[components/basePair.ts:97](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/basePair.ts#L97)
[rna-visualizer](../README.md) / Circle

# Class: Circle

A class representing a circle.

## Table of contents

### Constructors

- [constructor](Circle.md#constructor)

### Properties

- [coor](Circle.md#coor)
- [radius](Circle.md#radius)
- [scale](Circle.md#scale)
- [transform](Circle.md#transform)
- [visible](Circle.md#visible)

### Methods

- [getClasses](Circle.md#getclasses)
- [getCoor](Circle.md#getcoor)
- [getScaledRadius](Circle.md#getscaledradius)
- [getTransformedCoor](Circle.md#gettransformedcoor)
- [getTransformedX](Circle.md#gettransformedx)
- [getTransformedY](Circle.md#gettransformedy)
- [getX](Circle.md#getx)
- [getY](Circle.md#gety)
- [isVisible](Circle.md#isvisible)
- [setCoor](Circle.md#setcoor)
- [setScale](Circle.md#setscale)
- [setTransform](Circle.md#settransform)
- [setVisible](Circle.md#setvisible)
- [setX](Circle.md#setx)
- [setY](Circle.md#sety)
- [translate](Circle.md#translate)

## Constructors

### constructor

• **new Circle**(`coor`, `radius`)

Creates a new circle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coor` | [`Vector2`](Vector2.md) | The center coordinates of the circle. |
| `radius` | `number` | The radius of the circle. |

#### Defined in

[components/circle.ts:22](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L22)

## Properties

### coor

• `Private` **coor**: [`Vector2`](Vector2.md)

#### Defined in

[components/circle.ts:11](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L11)

___

### radius

• **radius**: `number`

#### Defined in

[components/circle.ts:12](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L12)

___

### scale

• **scale**: `number` = `1`

#### Defined in

[components/circle.ts:13](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L13)

___

### transform

• **transform**: [`Transformation`](../interfaces/Transformation.md) = `identity`

#### Defined in

[components/circle.ts:15](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L15)

___

### visible

• **visible**: `boolean` = `true`

#### Defined in

[components/circle.ts:14](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L14)

## Methods

### getClasses

▸ **getClasses**(): `string`[]

Gets the classes associated with the circle.

#### Returns

`string`[]

The classes associated with the circle.

#### Defined in

[components/circle.ts:158](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L158)

___

### getCoor

▸ **getCoor**(): [`Vector2`](Vector2.md)

Gets the center coordinates of the circle.

#### Returns

[`Vector2`](Vector2.md)

A copy of the center coordinates as a Vector2 object.

#### Defined in

[components/circle.ts:103](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L103)

___

### getScaledRadius

▸ **getScaledRadius**(): `number`

Gets the scaled radius of the circle.

#### Returns

`number`

The scaled radius.

#### Defined in

[components/circle.ts:122](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L122)

___

### getTransformedCoor

▸ **getTransformedCoor**(): [`Vector2`](Vector2.md)

Gets the transformed center coordinates of the circle.

#### Returns

[`Vector2`](Vector2.md)

The transformed center coordinates as a Vector2 object.

#### Defined in

[components/circle.ts:111](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L111)

___

### getTransformedX

▸ **getTransformedX**(): `number`

Gets the transformed X coordinate of the circle center.

#### Returns

`number`

The transformed X coordinate.

#### Defined in

[components/circle.ts:41](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L41)

___

### getTransformedY

▸ **getTransformedY**(): `number`

Gets the transformed Y coordinate of the circle center.

#### Returns

`number`

The transformed Y coordinate.

#### Defined in

[components/circle.ts:67](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L67)

___

### getX

▸ **getX**(): `number`

Gets the X coordinate of the circle center.

#### Returns

`number`

The X coordinate.

#### Defined in

[components/circle.ts:49](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L49)

___

### getY

▸ **getY**(): `number`

Gets the Y coordinate of the circle center.

#### Returns

`number`

The Y coordinate.

#### Defined in

[components/circle.ts:75](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L75)

___

### isVisible

▸ **isVisible**(): `boolean`

Determines whether the circle is visible.

#### Returns

`boolean`

Whether the circle is visible.

#### Defined in

[components/circle.ts:150](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L150)

___

### setCoor

▸ **setCoor**(`coor`): [`Circle`](Circle.md)

Sets the center coordinates of the circle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coor` | [`Vector2`](Vector2.md) | The center coordinates to set. |

#### Returns

[`Circle`](Circle.md)

The circle object.

#### Defined in

[components/circle.ts:94](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L94)

___

### setScale

▸ **setScale**(`scale`): [`Circle`](Circle.md)

Sets the scaling factor of the circle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | `number` | The scaling factor to set. |

#### Returns

[`Circle`](Circle.md)

The circle object.

#### Defined in

[components/circle.ts:131](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L131)

___

### setTransform

▸ **setTransform**(`transform`): [`Circle`](Circle.md)

Sets a transformation for the circle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | [`Transformation`](../interfaces/Transformation.md) | The transformation to set. |

#### Returns

[`Circle`](Circle.md)

The circle object.

#### Defined in

[components/circle.ts:32](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L32)

___

### setVisible

▸ **setVisible**(`visible`): [`Circle`](Circle.md)

Sets the visibility of the circle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `visible` | `boolean` | The visibility to set. |

#### Returns

[`Circle`](Circle.md)

The circle object.

#### Defined in

[components/circle.ts:141](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L141)

___

### setX

▸ **setX**(`x`): [`Circle`](Circle.md)

Sets the X coordinate of the circle center.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The X coordinate to set. |

#### Returns

[`Circle`](Circle.md)

The circle object.

#### Defined in

[components/circle.ts:58](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L58)

___

### setY

▸ **setY**(`y`): [`Circle`](Circle.md)

Sets the Y coordinate of the circle center.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `y` | `number` | The Y coordinate to set. |

#### Returns

[`Circle`](Circle.md)

The circle object.

#### Defined in

[components/circle.ts:84](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L84)

___

### translate

▸ **translate**(`shift`): [`Circle`](Circle.md)

Translates the circle by the given vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shift` | [`Vector2`](Vector2.md) | The vector by which to translate the circle. |

#### Returns

[`Circle`](Circle.md)

The circle object.

#### Defined in

[components/circle.ts:167](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/circle.ts#L167)
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
[rna-visualizer](../README.md) / DoubleCoorTarget

# Class: DoubleCoorTarget

A class representing a pair of 2D coordinates.

## Table of contents

### Constructors

- [constructor](DoubleCoorTarget.md#constructor)

### Properties

- [coor1](DoubleCoorTarget.md#coor1)
- [coor2](DoubleCoorTarget.md#coor2)

### Methods

- [getX1](DoubleCoorTarget.md#getx1)
- [getX2](DoubleCoorTarget.md#getx2)
- [getY1](DoubleCoorTarget.md#gety1)
- [getY2](DoubleCoorTarget.md#gety2)

## Constructors

### constructor

• **new DoubleCoorTarget**(`coor1`, `coor2`)

Constructs a DoubleCoorTarget object with the given coordinates.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coor1` | [`Vector2`](Vector2.md) | The first coordinate. |
| `coor2` | [`Vector2`](Vector2.md) | The second coordinate. |

#### Defined in

[animations/doubleCoorTarget.ts:15](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/doubleCoorTarget.ts#L15)

## Properties

### coor1

• `Readonly` **coor1**: [`Vector2`](Vector2.md)

#### Defined in

[animations/doubleCoorTarget.ts:7](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/doubleCoorTarget.ts#L7)

___

### coor2

• `Readonly` **coor2**: [`Vector2`](Vector2.md)

#### Defined in

[animations/doubleCoorTarget.ts:8](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/doubleCoorTarget.ts#L8)

## Methods

### getX1

▸ **getX1**(): `number`

Returns the x value of the first coordinate.

#### Returns

`number`

#### Defined in

[animations/doubleCoorTarget.ts:23](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/doubleCoorTarget.ts#L23)

___

### getX2

▸ **getX2**(): `number`

Returns the x value of the second coordinate.

#### Returns

`number`

#### Defined in

[animations/doubleCoorTarget.ts:37](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/doubleCoorTarget.ts#L37)

___

### getY1

▸ **getY1**(): `number`

Returns the y value of the first coordinate.

#### Returns

`number`

#### Defined in

[animations/doubleCoorTarget.ts:30](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/doubleCoorTarget.ts#L30)

___

### getY2

▸ **getY2**(): `number`

Returns the y value of the second coordinate.

#### Returns

`number`

#### Defined in

[animations/doubleCoorTarget.ts:44](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/doubleCoorTarget.ts#L44)
[rna-visualizer](../README.md) / Label

# Class: Label

Label class.

## Table of contents

### Constructors

- [constructor](Label.md#constructor)

### Properties

- [line](Label.md#line)
- [residue](Label.md#residue)
- [text](Label.md#text)
- [visible](Label.md#visible)

### Methods

- [isVisible](Label.md#isvisible)
- [setTransform](Label.md#settransform)
- [setVisible](Label.md#setvisible)
- [translate](Label.md#translate)

## Constructors

### constructor

• **new Label**(`residue`, `line`, `text`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `residue` | [`Residue`](Residue.md) | Residue to which the label is attached. |
| `line` | [`Line`](Line.md) | Line component of the label. |
| `text` | [`Text`](Text.md) | Text component of the label. |

#### Defined in

[components/label.ts:23](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/label.ts#L23)

## Properties

### line

• **line**: [`Line`](Line.md)

#### Defined in

[components/label.ts:14](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/label.ts#L14)

___

### residue

• **residue**: [`Residue`](Residue.md)

#### Defined in

[components/label.ts:13](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/label.ts#L13)

___

### text

• **text**: [`Text`](Text.md)

#### Defined in

[components/label.ts:15](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/label.ts#L15)

___

### visible

• **visible**: `boolean` = `true`

#### Defined in

[components/label.ts:16](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/label.ts#L16)

## Methods

### isVisible

▸ **isVisible**(): `boolean`

#### Returns

`boolean`

Whether the label is visible.

#### Defined in

[components/label.ts:51](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/label.ts#L51)

___

### setTransform

▸ **setTransform**(`transform`): [`Label`](Label.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | [`Transformation`](../interfaces/Transformation.md) | Transformation to apply to the label. |

#### Returns

[`Label`](Label.md)

#### Defined in

[components/label.ts:32](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/label.ts#L32)

___

### setVisible

▸ **setVisible**(`visible`): [`Label`](Label.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `visible` | `boolean` | Whether the label should be visible. |

#### Returns

[`Label`](Label.md)

#### Defined in

[components/label.ts:41](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/label.ts#L41)

___

### translate

▸ **translate**(`shift`): [`Label`](Label.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shift` | [`Vector2`](Vector2.md) | Vector to translate the label by. |

#### Returns

[`Label`](Label.md)

The label.

#### Defined in

[components/label.ts:59](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/label.ts#L59)
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
[rna-visualizer](../README.md) / Line

# Class: Line

A class representing a line segment between two points.

## Implements

- [`ILine`](../interfaces/ILine.md)

## Table of contents

### Constructors

- [constructor](Line.md#constructor)

### Properties

- [classes](Line.md#classes)
- [coor1](Line.md#coor1)
- [coor2](Line.md#coor2)
- [transform](Line.md#transform)
- [visible](Line.md#visible)

### Methods

- [getClasses](Line.md#getclasses)
- [getCoor1](Line.md#getcoor1)
- [getCoor2](Line.md#getcoor2)
- [getTransformedX1](Line.md#gettransformedx1)
- [getTransformedX2](Line.md#gettransformedx2)
- [getTransformedY1](Line.md#gettransformedy1)
- [getTransformedY2](Line.md#gettransformedy2)
- [getX1](Line.md#getx1)
- [getX2](Line.md#getx2)
- [getY1](Line.md#gety1)
- [getY2](Line.md#gety2)
- [isVisible](Line.md#isvisible)
- [setCoor1](Line.md#setcoor1)
- [setCoor2](Line.md#setcoor2)
- [setTransform](Line.md#settransform)
- [setVisible](Line.md#setvisible)
- [setX1](Line.md#setx1)
- [setX2](Line.md#setx2)
- [setY1](Line.md#sety1)
- [setY2](Line.md#sety2)
- [translate](Line.md#translate)

## Constructors

### constructor

• **new Line**(`coor1`, `coor2`, `classes`)

Create a new Line object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coor1` | [`Vector2`](Vector2.md) | The first coordinate of the line segment. |
| `coor2` | [`Vector2`](Vector2.md) | The second coordinate of the line segment. |
| `classes` | `string`[] | An array of classes for styling the line segment. |

#### Defined in

[components/line.ts:24](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L24)

## Properties

### classes

• **classes**: `string`[]

#### Defined in

[components/line.ts:14](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L14)

___

### coor1

• `Private` **coor1**: [`Vector2`](Vector2.md)

#### Defined in

[components/line.ts:12](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L12)

___

### coor2

• `Private` **coor2**: [`Vector2`](Vector2.md)

#### Defined in

[components/line.ts:13](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L13)

___

### transform

• **transform**: [`Transformation`](../interfaces/Transformation.md) = `identity`

#### Defined in

[components/line.ts:16](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L16)

___

### visible

• **visible**: `boolean` = `true`

#### Defined in

[components/line.ts:15](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L15)

## Methods

### getClasses

▸ **getClasses**(): `string`[]

Gets the classes applied to the line.

#### Returns

`string`[]

#### Implementation of

[ILine](../interfaces/ILine.md).[getClasses](../interfaces/ILine.md#getclasses)

#### Defined in

[components/line.ts:192](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L192)

___

### getCoor1

▸ **getCoor1**(): [`Vector2`](Vector2.md)

Gets a copy of the first point of the line as a Vector2.

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[components/line.ts:153](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L153)

___

### getCoor2

▸ **getCoor2**(): [`Vector2`](Vector2.md)

Gets a copy of the second point of the line as a Vector2.

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[components/line.ts:169](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L169)

___

### getTransformedX1

▸ **getTransformedX1**(): `number`

Get the transformed X coordinate of the first point of this line segment.

#### Returns

`number`

The transformed X coordinate of the first point.

#### Implementation of

[ILine](../interfaces/ILine.md).[getTransformedX1](../interfaces/ILine.md#gettransformedx1)

#### Defined in

[components/line.ts:44](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L44)

___

### getTransformedX2

▸ **getTransformedX2**(): `number`

Get the transformed X coordinate of the second point of this line segment.

#### Returns

`number`

The transformed X coordinate of the second point.

#### Implementation of

[ILine](../interfaces/ILine.md).[getTransformedX2](../interfaces/ILine.md#gettransformedx2)

#### Defined in

[components/line.ts:60](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L60)

___

### getTransformedY1

▸ **getTransformedY1**(): `number`

Get the transformed Y coordinate of the first point of this line segment.

#### Returns

`number`

The transformed Y coordinate of the first point.

#### Implementation of

[ILine](../interfaces/ILine.md).[getTransformedY1](../interfaces/ILine.md#gettransformedy1)

#### Defined in

[components/line.ts:52](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L52)

___

### getTransformedY2

▸ **getTransformedY2**(): `number`

Get the transformed Y coordinate of the second point of this line segment.

#### Returns

`number`

The transformed Y coordinate of the second point.

#### Implementation of

[ILine](../interfaces/ILine.md).[getTransformedY2](../interfaces/ILine.md#gettransformedy2)

#### Defined in

[components/line.ts:68](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L68)

___

### getX1

▸ **getX1**(): `number`

Get the X coordinate of the first point of this line segment.

#### Returns

`number`

The X coordinate of the first point.

#### Implementation of

[ILine](../interfaces/ILine.md).[getX1](../interfaces/ILine.md#getx1)

#### Defined in

[components/line.ts:86](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L86)

___

### getX2

▸ **getX2**(): `number`

Gets the x-coordinate of the second point of the line.

#### Returns

`number`

#### Implementation of

[ILine](../interfaces/ILine.md).[getX2](../interfaces/ILine.md#getx2)

#### Defined in

[components/line.ts:121](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L121)

___

### getY1

▸ **getY1**(): `number`

Get the Y coordinate of the first point of this line segment.

#### Returns

`number`

The Y coordinate of the first point.

#### Implementation of

[ILine](../interfaces/ILine.md).[getY1](../interfaces/ILine.md#gety1)

#### Defined in

[components/line.ts:104](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L104)

___

### getY2

▸ **getY2**(): `number`

Gets the Y coordinate of the second point of the line.

#### Returns

`number`

#### Implementation of

[ILine](../interfaces/ILine.md).[getY2](../interfaces/ILine.md#gety2)

#### Defined in

[components/line.ts:137](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L137)

___

### isVisible

▸ **isVisible**(): `boolean`

Gets the visibility of the line.

#### Returns

`boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[isVisible](../interfaces/ILine.md#isvisible)

#### Defined in

[components/line.ts:185](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L185)

___

### setCoor1

▸ **setCoor1**(`coor`): [`Line`](Line.md)

Sets the first point of the line to the given Vector2.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coor` | [`Vector2`](Vector2.md) | The new coordinates. |

#### Returns

[`Line`](Line.md)

#### Defined in

[components/line.ts:145](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L145)

___

### setCoor2

▸ **setCoor2**(`coor`): [`Line`](Line.md)

Sets the second point of the line to the given Vector2.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coor` | [`Vector2`](Vector2.md) | The new coordinates. |

#### Returns

[`Line`](Line.md)

#### Defined in

[components/line.ts:161](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L161)

___

### setTransform

▸ **setTransform**(`transform`): [`Line`](Line.md)

Set the transformation to apply to this line segment.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | [`Transformation`](../interfaces/Transformation.md) | The transformation to apply. |

#### Returns

[`Line`](Line.md)

This line segment, for chaining.

#### Defined in

[components/line.ts:35](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L35)

___

### setVisible

▸ **setVisible**(`visible`): [`Line`](Line.md)

Sets the visibility of the line.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `visible` | `boolean` | True if the line should be visible, false otherwise. |

#### Returns

[`Line`](Line.md)

#### Defined in

[components/line.ts:177](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L177)

___

### setX1

▸ **setX1**(`x1`): [`Line`](Line.md)

Set the X coordinate of the first point of this line segment.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x1` | `number` | The new X coordinate of the first point. |

#### Returns

[`Line`](Line.md)

This line segment, for chaining.

#### Defined in

[components/line.ts:77](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L77)

___

### setX2

▸ **setX2**(`x2`): [`Line`](Line.md)

Set the X coordinate of the second point of this line segment.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x2` | `number` | The new X coordinate of the second point. |

#### Returns

[`Line`](Line.md)

This line segment, for chaining.

#### Defined in

[components/line.ts:113](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L113)

___

### setY1

▸ **setY1**(`y1`): [`Line`](Line.md)

Set the Y coordinate of the first point of this line segment.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `y1` | `number` | The new Y coordinate of the first point. |

#### Returns

[`Line`](Line.md)

This line segment, for chaining.

#### Defined in

[components/line.ts:95](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L95)

___

### setY2

▸ **setY2**(`y2`): [`Line`](Line.md)

Sets the Y coordinate of the second point of the line.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `y2` | `number` | The new Y coordinate. |

#### Returns

[`Line`](Line.md)

#### Defined in

[components/line.ts:129](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L129)

___

### translate

▸ **translate**(`shift`): [`Line`](Line.md)

Translates the line by the given Vector2.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shift` | [`Vector2`](Vector2.md) | The Vector2 to translate by. |

#### Returns

[`Line`](Line.md)

#### Defined in

[components/line.ts:200](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/line.ts#L200)
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
[rna-visualizer](../README.md) / Rectangle

# Class: Rectangle

Object representing a rectangle

## Table of contents

### Constructors

- [constructor](Rectangle.md#constructor)

### Properties

- [classes](Rectangle.md#classes)
- [coor](Rectangle.md#coor)
- [height](Rectangle.md#height)
- [transform](Rectangle.md#transform)
- [visible](Rectangle.md#visible)
- [width](Rectangle.md#width)

### Methods

- [getClasses](Rectangle.md#getclasses)
- [getCoor](Rectangle.md#getcoor)
- [getHeight](Rectangle.md#getheight)
- [getTransformedX](Rectangle.md#gettransformedx)
- [getTransformedY](Rectangle.md#gettransformedy)
- [getWidth](Rectangle.md#getwidth)
- [getX](Rectangle.md#getx)
- [getY](Rectangle.md#gety)
- [isVisible](Rectangle.md#isvisible)
- [setCoor](Rectangle.md#setcoor)
- [setTransform](Rectangle.md#settransform)
- [setVisible](Rectangle.md#setvisible)
- [setX](Rectangle.md#setx)
- [setY](Rectangle.md#sety)
- [translate](Rectangle.md#translate)

## Constructors

### constructor

• **new Rectangle**(`coor`, `width`, `height`, `classes`)

Creates a new rectangle with the given parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coor` | [`Vector2`](Vector2.md) | The coordinate of the rectangle. |
| `width` | `number` | The width of the rectangle. |
| `height` | `number` | The height of the rectangle. |
| `classes` | `string`[] | An array of classes for styling the rectangle. |

#### Defined in

[components/rectangle.ts:25](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L25)

## Properties

### classes

• **classes**: `string`[]

#### Defined in

[components/rectangle.ts:14](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L14)

___

### coor

• `Private` **coor**: [`Vector2`](Vector2.md)

#### Defined in

[components/rectangle.ts:11](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L11)

___

### height

• **height**: `number`

#### Defined in

[components/rectangle.ts:13](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L13)

___

### transform

• **transform**: [`Transformation`](../interfaces/Transformation.md) = `identity`

#### Defined in

[components/rectangle.ts:16](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L16)

___

### visible

• **visible**: `boolean` = `true`

#### Defined in

[components/rectangle.ts:15](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L15)

___

### width

• **width**: `number`

#### Defined in

[components/rectangle.ts:12](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L12)

## Methods

### getClasses

▸ **getClasses**(): `string`[]

Gets the classes associated with the rectangle.

#### Returns

`string`[]

- An array of strings representing the classes associated with the rectangle.

#### Defined in

[components/rectangle.ts:150](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L150)

___

### getCoor

▸ **getCoor**(): [`Vector2`](Vector2.md)

Gets the coordinates of the rectangle.

#### Returns

[`Vector2`](Vector2.md)

- A copy of the coordinates of the rectangle as a `Vector2` object.

#### Defined in

[components/rectangle.ts:108](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L108)

___

### getHeight

▸ **getHeight**(): `number`

Gets the height of the rectangle.

#### Returns

`number`

- The height of the rectangle as a number.

#### Defined in

[components/rectangle.ts:142](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L142)

___

### getTransformedX

▸ **getTransformedX**(): `number`

Returns the transformed X coordinate of the rectangle.

#### Returns

`number`

The transformed X coordinate of the rectangle.

#### Defined in

[components/rectangle.ts:46](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L46)

___

### getTransformedY

▸ **getTransformedY**(): `number`

Returns the transformed Y coordinate of the rectangle.

#### Returns

`number`

The transformed Y coordinate of the rectangle.

#### Defined in

[components/rectangle.ts:72](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L72)

___

### getWidth

▸ **getWidth**(): `number`

Gets the width of the rectangle.

#### Returns

`number`

- The width of the rectangle as a number.

#### Defined in

[components/rectangle.ts:134](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L134)

___

### getX

▸ **getX**(): `number`

Returns the X coordinate of the rectangle.

#### Returns

`number`

The X coordinate of the rectangle.

#### Defined in

[components/rectangle.ts:54](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L54)

___

### getY

▸ **getY**(): `number`

Returns the Y coordinate of the rectangle.

#### Returns

`number`

The Y coordinate of the rectangle.

#### Defined in

[components/rectangle.ts:80](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L80)

___

### isVisible

▸ **isVisible**(): `boolean`

Gets the visibility of the rectangle.

#### Returns

`boolean`

- A boolean indicating the visibility of the rectangle.

#### Defined in

[components/rectangle.ts:126](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L126)

___

### setCoor

▸ **setCoor**(`coor`): [`Rectangle`](Rectangle.md)

Sets the coordinate of the rectangle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coor` | [`Vector2`](Vector2.md) | The new coordinate of the rectangle. |

#### Returns

[`Rectangle`](Rectangle.md)

The modified rectangle.

#### Defined in

[components/rectangle.ts:99](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L99)

___

### setTransform

▸ **setTransform**(`transform`): [`Rectangle`](Rectangle.md)

Sets the transformation to be applied to the rectangle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | [`Transformation`](../interfaces/Transformation.md) | The transformation to be applied to the rectangle. |

#### Returns

[`Rectangle`](Rectangle.md)

The modified rectangle.

#### Defined in

[components/rectangle.ts:37](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L37)

___

### setVisible

▸ **setVisible**(`visible`): [`Rectangle`](Rectangle.md)

Sets the visibility of the rectangle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `visible` | `boolean` | A boolean indicating the visibility of the rectangle. |

#### Returns

[`Rectangle`](Rectangle.md)

- The current `Rectangle` object.

#### Defined in

[components/rectangle.ts:117](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L117)

___

### setX

▸ **setX**(`x`): [`Rectangle`](Rectangle.md)

Sets the X coordinate of the rectangle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The new X coordinate of the rectangle. |

#### Returns

[`Rectangle`](Rectangle.md)

The modified rectangle.

#### Defined in

[components/rectangle.ts:63](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L63)

___

### setY

▸ **setY**(`y`): [`Rectangle`](Rectangle.md)

Sets the Y coordinate of the rectangle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `y` | `number` | The new Y coordinate of the rectangle. |

#### Returns

[`Rectangle`](Rectangle.md)

The modified rectangle.

#### Defined in

[components/rectangle.ts:89](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L89)

___

### translate

▸ **translate**(`shift`): [`Rectangle`](Rectangle.md)

Translates the rectangle by the given vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shift` | [`Vector2`](Vector2.md) | A `Vector2` object representing the amount to translate the rectangle. |

#### Returns

[`Rectangle`](Rectangle.md)

- The current `Rectangle` object.

#### Defined in

[components/rectangle.ts:159](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/rectangle.ts#L159)
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
[rna-visualizer](../README.md) / RnaVis

# Class: RnaVis

RNA visualization tool for displaying RNA secondary structures
on a canvas element.

## Table of contents

### Constructors

- [constructor](RnaVis.md#constructor)

### Properties

- [canvas](RnaVis.md#canvas)
- [layers](RnaVis.md#layers)
- [styles](RnaVis.md#styles)
- [zoom](RnaVis.md#zoom)

### Methods

- [addLayer](RnaVis.md#addlayer)
- [addZoom](RnaVis.md#addzoom)
- [align](RnaVis.md#align)
- [clear](RnaVis.md#clear)
- [draw](RnaVis.md#draw)
- [drawHoverLabel](RnaVis.md#drawhoverlabel)
- [getAlignmentToTempResidue](RnaVis.md#getalignmenttotempresidue)
- [getDataContainers](RnaVis.md#getdatacontainers)
- [getDefaultAlpha](RnaVis.md#getdefaultalpha)
- [getLayerIndex](RnaVis.md#getlayerindex)
- [numberingLabelsVisibility](RnaVis.md#numberinglabelsvisibility)
- [resetTransform](RnaVis.md#resettransform)
- [setAllVisibility](RnaVis.md#setallvisibility)
- [setAlpha](RnaVis.md#setalpha)
- [setVisibility](RnaVis.md#setvisibility)
- [setVisibilityByName](RnaVis.md#setvisibilitybyname)
- [translate](RnaVis.md#translate)

## Constructors

### constructor

• **new RnaVis**(`canvas`)

Constructs a new RnaVis instance with the specified canvas element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `canvas` | `HTMLCanvasElement` | The canvas element to render the RNA secondary structures on. |

#### Defined in

[rna-vis.ts:44](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/rna-vis.ts#L44)

## Properties

### canvas

• **canvas**: `HTMLCanvasElement`

The canvas element to render the RNA secondary structures on.

#### Defined in

[rna-vis.ts:26](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/rna-vis.ts#L26)

___

### layers

• `Readonly` **layers**: [`Layer`](Layer.md)[]

An array of layers for each RNA secondary structure.

#### Defined in

[rna-vis.ts:30](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/rna-vis.ts#L30)

___

### styles

• `Private` **styles**: [`Styles`](Styles.md)

The styles to use for rendering the RNA secondary structures.

#### Defined in

[rna-vis.ts:34](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/rna-vis.ts#L34)

___

### zoom

• `Private` **zoom**: `ZoomBehavior`<`Element`, `unknown`\>

The zoom behavior for the canvas element.

#### Defined in

[rna-vis.ts:38](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/rna-vis.ts#L38)

## Methods

### addLayer

▸ **addLayer**(`data`, `name`, `visible?`): [`RnaVis`](RnaVis.md)

Adds a new layer for the specified RNA secondary structure

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `data` | [`IRnaInput`](../interfaces/IRnaInput.md) | `undefined` | The input data for the RNA secondary structure. |
| `name` | `string` | `undefined` | The name to use for the new layer. |
| `visible` | `boolean` | `true` | Whether the new layer should be visible. |

#### Returns

[`RnaVis`](RnaVis.md)

#### Defined in

[rna-vis.ts:118](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/rna-vis.ts#L118)

___

### addZoom

▸ **addZoom**(): [`RnaVis`](RnaVis.md)

Adds zoom behavior to the canvas element.

#### Returns

[`RnaVis`](RnaVis.md)

This RnaVis instance.

#### Defined in

[rna-vis.ts:56](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/rna-vis.ts#L56)

___

### align

▸ **align**(`groupIndex?`, `minGroupSize?`): [`Vector2`](Vector2.md)[]

Creates translation vectors for aligning the RNA secondary structures to the template.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `groupIndex` | `number` | `-1` | The index of the generated translation group to use for alignment. |
| `minGroupSize` | `number` | `5` | The minimum size of a translation group. |

#### Returns

[`Vector2`](Vector2.md)[]

An array of translation vectors for each RNA secondary structure.

#### Defined in

[rna-vis.ts:152](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/rna-vis.ts#L152)

___

### clear

▸ **clear**(): `void`

Clears all layers and styles from the RnaVis instance, clears canvas and reset zoom.

#### Returns

`void`

#### Defined in

[rna-vis.ts:138](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/rna-vis.ts#L138)

___

### draw

▸ **draw**(): `void`

Renders the RNA secondary structures on the canvas element.

#### Returns

`void`

#### Defined in

[rna-vis.ts:70](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/rna-vis.ts#L70)

___

### drawHoverLabel

▸ **drawHoverLabel**(`x`, `y`): `void`

Draws the hover label for the specified coordinates.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x-coordinate of the mouse pointer. |
| `y` | `number` | The y-coordinate of the mouse pointer. |

#### Returns

`void`

#### Defined in

[rna-vis.ts:99](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/rna-vis.ts#L99)

___

### getAlignmentToTempResidue

▸ **getAlignmentToTempResidue**(`tempRes`): [`Vector2`](Vector2.md)[]

Gets the translation vectors for aligning the RNA secondary structures
to the specified template residue.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tempRes` | [`Residue`](Residue.md) | The template residue to align the RNA secondary structures to. |

#### Returns

[`Vector2`](Vector2.md)[]

An array of translation vectors for each RNA secondary structure.

#### Defined in

[rna-vis.ts:197](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/rna-vis.ts#L197)

___

### getDataContainers

▸ **getDataContainers**(): [`DataContainer`](DataContainer.md)[]

Get an array of DataContainer instances representing the data for each
layer.

#### Returns

[`DataContainer`](DataContainer.md)[]

An array of DataContainer instances.

#### Defined in

[rna-vis.ts:328](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/rna-vis.ts#L328)

___

### getDefaultAlpha

▸ **getDefaultAlpha**(): `number`

Gets the calculated alpha value based on the number of layers for
rendering the RNA secondary structures.

#### Returns

`number`

The calculated alpha value.

#### Defined in

[rna-vis.ts:247](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/rna-vis.ts#L247)

___

### getLayerIndex

▸ **getLayerIndex**(`name`): `number`

Gets the index of the layer with the specified name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the layer. |

#### Returns

`number`

The index of the layer, or -1 if the layer was not found.

#### Defined in

[rna-vis.ts:219](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/rna-vis.ts#L219)

___

### numberingLabelsVisibility

▸ **numberingLabelsVisibility**(`visible`): [`RnaVis`](RnaVis.md)

Set the visibility of all numbering labels showing the order of residues.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `visible` | `boolean` | A boolean indicating whether all numbering labels should be visible. |

#### Returns

[`RnaVis`](RnaVis.md)

The RnaVis instance to allow for method chaining.

#### Defined in

[rna-vis.ts:305](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/rna-vis.ts#L305)

___

### resetTransform

▸ **resetTransform**(): [`RnaVis`](RnaVis.md)

Discards zooming and panning of the canvas.

#### Returns

[`RnaVis`](RnaVis.md)

The RnaVis instance to allow for method chaining.

#### Defined in

[rna-vis.ts:317](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/rna-vis.ts#L317)

___

### setAllVisibility

▸ **setAllVisibility**(`visible`): [`RnaVis`](RnaVis.md)

Set the visibility of all layers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `visible` | `boolean` | A boolean indicating whether all layers should be visible. |

#### Returns

[`RnaVis`](RnaVis.md)

The RnaVis instance to allow for method chaining.

#### Defined in

[rna-vis.ts:294](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/rna-vis.ts#L294)

___

### setAlpha

▸ **setAlpha**(`alpha`): [`RnaVis`](RnaVis.md)

Set the global alpha value of the canvas context.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alpha` | `number` | A number between 0 and 1 representing the opacity value. |

#### Returns

[`RnaVis`](RnaVis.md)

The RnaVis instance to allow for method chaining.

#### Defined in

[rna-vis.ts:259](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/rna-vis.ts#L259)

___

### setVisibility

▸ **setVisibility**(`index`, `visibility`): [`RnaVis`](RnaVis.md)

Set the visibility of a layer by its index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index of the layer to modify. |
| `visibility` | `boolean` | A boolean indicating whether the layer should be visible. |

#### Returns

[`RnaVis`](RnaVis.md)

The RnaVis instance to allow for method chaining.

#### Defined in

[rna-vis.ts:270](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/rna-vis.ts#L270)

___

### setVisibilityByName

▸ **setVisibilityByName**(`name`, `visible`): [`RnaVis`](RnaVis.md)

Set the visibility of a layer by its name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the layer to modify. |
| `visible` | `boolean` | A boolean indicating whether the layer should be visible. |

#### Returns

[`RnaVis`](RnaVis.md)

The RnaVis instance to allow for method chaining.

#### Defined in

[rna-vis.ts:281](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/rna-vis.ts#L281)

___

### translate

▸ **translate**(`translations`): [`RnaVis`](RnaVis.md)

Translates each RNA secondary structure by the specified vectors.

**`Throws`**

An error if the length of the translations array does not match
the number of RNA secondary structures.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `translations` | [`Vector2`](Vector2.md)[] | An array of translation vectors for each RNA secondary structure. |

#### Returns

[`RnaVis`](RnaVis.md)

This RnaVis instance.

#### Defined in

[rna-vis.ts:233](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/rna-vis.ts#L233)
[rna-visualizer](../README.md) / SingleCoorTarget

# Class: SingleCoorTarget

Represents a target coordinate with a single point.

## Table of contents

### Constructors

- [constructor](SingleCoorTarget.md#constructor)

### Properties

- [coor](SingleCoorTarget.md#coor)

### Methods

- [getX](SingleCoorTarget.md#getx)
- [getY](SingleCoorTarget.md#gety)

## Constructors

### constructor

• **new SingleCoorTarget**(`coor`)

Initializes a new instance of the `SingleCoorTarget` class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coor` | [`Vector2`](Vector2.md) | The coordinate of the target. |

#### Defined in

[animations/singleCoorTarget.ts:13](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/singleCoorTarget.ts#L13)

## Properties

### coor

• `Readonly` **coor**: [`Vector2`](Vector2.md)

#### Defined in

[animations/singleCoorTarget.ts:7](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/singleCoorTarget.ts#L7)

## Methods

### getX

▸ **getX**(): `number`

Gets the x-coordinate of the target.

#### Returns

`number`

The x-coordinate of the target.

#### Defined in

[animations/singleCoorTarget.ts:21](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/singleCoorTarget.ts#L21)

___

### getY

▸ **getY**(): `number`

Gets the y-coordinate of the target.

#### Returns

`number`

The y-coordinate of the target.

#### Defined in

[animations/singleCoorTarget.ts:29](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/singleCoorTarget.ts#L29)
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
[rna-visualizer](../README.md) / Text

# Class: Text

Represents a Text object.

## Table of contents

### Constructors

- [constructor](Text.md#constructor)

### Properties

- [classes](Text.md#classes)
- [coor](Text.md#coor)
- [text](Text.md#text)
- [transform](Text.md#transform)
- [visible](Text.md#visible)

### Methods

- [getClasses](Text.md#getclasses)
- [getCoor](Text.md#getcoor)
- [getText](Text.md#gettext)
- [getTransformedX](Text.md#gettransformedx)
- [getTransformedY](Text.md#gettransformedy)
- [getX](Text.md#getx)
- [getY](Text.md#gety)
- [isVisible](Text.md#isvisible)
- [setCoor](Text.md#setcoor)
- [setTransform](Text.md#settransform)
- [setVisible](Text.md#setvisible)
- [setX](Text.md#setx)
- [setY](Text.md#sety)
- [translate](Text.md#translate)
- [width](Text.md#width)

## Constructors

### constructor

• **new Text**(`coor`, `text`, `classes`)

Creates a new Text object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coor` | [`Vector2`](Vector2.md) | The initial position of the object. |
| `text` | `string` | The text content of the object. |
| `classes` | `string`[] | An array of classes for styling the text. |

#### Defined in

[components/text.ts:24](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L24)

## Properties

### classes

• **classes**: `string`[]

#### Defined in

[components/text.ts:14](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L14)

___

### coor

• `Private` **coor**: [`Vector2`](Vector2.md)

#### Defined in

[components/text.ts:13](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L13)

___

### text

• **text**: `string`

#### Defined in

[components/text.ts:12](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L12)

___

### transform

• **transform**: [`Transformation`](../interfaces/Transformation.md) = `identity`

#### Defined in

[components/text.ts:16](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L16)

___

### visible

• **visible**: `boolean` = `true`

#### Defined in

[components/text.ts:15](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L15)

## Methods

### getClasses

▸ **getClasses**(): `string`[]

Returns the classes which are used to style the object.

#### Returns

`string`[]

The classes.

#### Defined in

[components/text.ts:140](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L140)

___

### getCoor

▸ **getCoor**(): [`Vector2`](Vector2.md)

Returns a copy of the position vector of the object.

#### Returns

[`Vector2`](Vector2.md)

The position vector.

#### Defined in

[components/text.ts:106](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L106)

___

### getText

▸ **getText**(): `string`

Returns the text content of the object.

#### Returns

`string`

The text content.

#### Defined in

[components/text.ts:132](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L132)

___

### getTransformedX

▸ **getTransformedX**(): `number`

Returns the transformed x-coordinate of the object.

#### Returns

`number`

The transformed x-coordinate.

#### Defined in

[components/text.ts:44](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L44)

___

### getTransformedY

▸ **getTransformedY**(): `number`

Returns the transformed y-coordinate of the object.

#### Returns

`number`

The transformed y-coordinate.

#### Defined in

[components/text.ts:70](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L70)

___

### getX

▸ **getX**(): `number`

Returns the x-coordinate of the object.

#### Returns

`number`

The x-coordinate.

#### Defined in

[components/text.ts:52](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L52)

___

### getY

▸ **getY**(): `number`

Returns the y-coordinate of the object.

#### Returns

`number`

The y-coordinate.

#### Defined in

[components/text.ts:78](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L78)

___

### isVisible

▸ **isVisible**(): `boolean`

Returns whether the object is visible.

#### Returns

`boolean`

Whether the object is visible.

#### Defined in

[components/text.ts:124](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L124)

___

### setCoor

▸ **setCoor**(`coor`): [`Text`](Text.md)

Sets the position of the object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coor` | [`Vector2`](Vector2.md) | The position to set. |

#### Returns

[`Text`](Text.md)

The Text object.

#### Defined in

[components/text.ts:97](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L97)

___

### setTransform

▸ **setTransform**(`transform`): [`Text`](Text.md)

Sets the transformation applied to the object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | [`Transformation`](../interfaces/Transformation.md) | The transformation to apply. |

#### Returns

[`Text`](Text.md)

The Text object.

#### Defined in

[components/text.ts:35](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L35)

___

### setVisible

▸ **setVisible**(`visible`): [`Text`](Text.md)

Sets whether the object is visible.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `visible` | `boolean` | Whether the object is visible. |

#### Returns

[`Text`](Text.md)

The Text object.

#### Defined in

[components/text.ts:115](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L115)

___

### setX

▸ **setX**(`x`): [`Text`](Text.md)

Sets the x-coordinate of the object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x-coordinate to set. |

#### Returns

[`Text`](Text.md)

The Text object.

#### Defined in

[components/text.ts:61](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L61)

___

### setY

▸ **setY**(`y`): [`Text`](Text.md)

Sets the y-coordinate of the object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `y` | `number` | The y-coordinate to set. |

#### Returns

[`Text`](Text.md)

The Text object.

#### Defined in

[components/text.ts:87](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L87)

___

### translate

▸ **translate**(`shift`): [`Text`](Text.md)

Translates the position of the object by a given shift vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shift` | [`Vector2`](Vector2.md) | The shift vector. |

#### Returns

[`Text`](Text.md)

The Text object.

#### Defined in

[components/text.ts:171](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L171)

___

### width

▸ **width**(`styles`): `number`

Returns the width of the text in pixels, given a set of styles.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `styles` | [`Styles`](Styles.md) | The styles to use. |

#### Returns

`number`

The width of the text in pixels.

#### Defined in

[components/text.ts:149](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/text.ts#L149)
[rna-visualizer](../README.md) / Title

# Class: Title

Class representing a Title with background.

## Table of contents

### Constructors

- [constructor](Title.md#constructor)

### Properties

- [background](Title.md#background)
- [styles](Title.md#styles)
- [texts](Title.md#texts)

### Methods

- [draw](Title.md#draw)
- [getBackground](Title.md#getbackground)
- [getTexts](Title.md#gettexts)
- [fromResidues](Title.md#fromresidues)

## Constructors

### constructor

• **new Title**(`texts`, `background`, `styles`)

Creates a new Title object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `texts` | [`Text`](Text.md)[] | An array of Text objects to be displayed as the title text. |
| `background` | [`Rectangle`](Rectangle.md) | The Rectangle object representing the background of the title. |
| `styles` | [`Styles`](Styles.md) | The styles to be applied to the title. |

#### Defined in

[components/title.ts:24](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/title.ts#L24)

## Properties

### background

• `Private` **background**: [`Rectangle`](Rectangle.md)

#### Defined in

[components/title.ts:15](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/title.ts#L15)

___

### styles

• `Private` **styles**: [`Styles`](Styles.md)

#### Defined in

[components/title.ts:16](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/title.ts#L16)

___

### texts

• `Private` **texts**: [`Text`](Text.md)[]

#### Defined in

[components/title.ts:14](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/title.ts#L14)

## Methods

### draw

▸ **draw**(`ctx`): `void`

Draws the Title using the given CanvasRenderingContext2D.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | The CanvasRenderingContext2D to use for drawing. |

#### Returns

`void`

#### Defined in

[components/title.ts:50](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/title.ts#L50)

___

### getBackground

▸ **getBackground**(): [`Rectangle`](Rectangle.md)

Gets the background Rectangle of the Title.

#### Returns

[`Rectangle`](Rectangle.md)

The background Rectangle object.

#### Defined in

[components/title.ts:42](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/title.ts#L42)

___

### getTexts

▸ **getTexts**(): [`Text`](Text.md)[]

Gets the Text objects of the Title.

#### Returns

[`Text`](Text.md)[]

An array of Text objects.

#### Defined in

[components/title.ts:34](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/title.ts#L34)

___

### fromResidues

▸ `Static` **fromResidues**(`residues`, `canvasWidth`, `canvasHeight`, `styles`): [`Title`](Title.md)

Creates a new Title object from an array of Residue objects.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `residues` | [`Residue`](Residue.md)[] | An array of Residue objects to be used for creating the title. |
| `canvasWidth` | `number` | The width of the canvas the title will be drawn on. |
| `canvasHeight` | `number` | The height of the canvas the title will be drawn on. |
| `styles` | [`Styles`](Styles.md) | The styles to be applied to the title. |

#### Returns

[`Title`](Title.md)

A new Title object.

#### Defined in

[components/title.ts:63](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/title.ts#L63)
[rna-visualizer](../README.md) / TranslationAnim

# Class: TranslationAnim

An implementation of the IAnimation interface for translation animations.

## Implements

- [`IAnimation`](../interfaces/IAnimation.md)

## Table of contents

### Constructors

- [constructor](TranslationAnim.md#constructor)

### Properties

- [container](TranslationAnim.md#container)
- [from](TranslationAnim.md#from)
- [isActive](TranslationAnim.md#isactive)
- [reversed](TranslationAnim.md#reversed)
- [to](TranslationAnim.md#to)

### Methods

- [animate](TranslationAnim.md#animate)
- [changeAllStates](TranslationAnim.md#changeallstates)
- [changeState](TranslationAnim.md#changestate)
- [do](TranslationAnim.md#do)
- [getActiveContainers](TranslationAnim.md#getactivecontainers)
- [getState](TranslationAnim.md#getstate)
- [instant](TranslationAnim.md#instant)
- [isReversed](TranslationAnim.md#isreversed)
- [reverse](TranslationAnim.md#reverse)
- [setFrom](TranslationAnim.md#setfrom)
- [setState](TranslationAnim.md#setstate)
- [updateFrom](TranslationAnim.md#updatefrom)

## Constructors

### constructor

• **new TranslationAnim**(`container`, `to`)

Creates an instance of TranslationAnim.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `container` | [`DataContainer`](DataContainer.md)[] | An array of DataContainer instances to animate. |
| `to` | [`PositionRecord`](PositionRecord.md)[] | An array of PositionRecord instances that represent the final position of the containers. |

#### Defined in

[animations/translationAnim.ts:22](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/translationAnim.ts#L22)

## Properties

### container

• **container**: [`DataContainer`](DataContainer.md)[]

#### Defined in

[animations/translationAnim.ts:11](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/translationAnim.ts#L11)

___

### from

• **from**: [`PositionRecord`](PositionRecord.md)[]

#### Defined in

[animations/translationAnim.ts:12](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/translationAnim.ts#L12)

___

### isActive

• **isActive**: `boolean`[]

#### Defined in

[animations/translationAnim.ts:14](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/translationAnim.ts#L14)

___

### reversed

• `Private` **reversed**: `boolean` = `false`

#### Defined in

[animations/translationAnim.ts:15](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/translationAnim.ts#L15)

___

### to

• **to**: [`PositionRecord`](PositionRecord.md)[]

#### Defined in

[animations/translationAnim.ts:13](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/translationAnim.ts#L13)

## Methods

### animate

▸ **animate**(`rna`, `duration`, `after?`): `void`

Preforms the Animation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rna` | [`RnaVis`](RnaVis.md) | An instance of RnaVis to animate. |
| `duration` | `number` | The duration of the animation in milliseconds. |
| `after` | [`AfterFn`](../README.md#afterfn) | A callback function to execute after the animation has finished. |

#### Returns

`void`

#### Implementation of

[IAnimation](../interfaces/IAnimation.md).[animate](../interfaces/IAnimation.md#animate)

#### Defined in

[animations/translationAnim.ts:159](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/translationAnim.ts#L159)

___

### changeAllStates

▸ **changeAllStates**(`isActive`): `void`

Changes the active state of all containers to a specific value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isActive` | `boolean` | The new active state of all containers. |

#### Returns

`void`

#### Defined in

[animations/translationAnim.ts:70](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/translationAnim.ts#L70)

___

### changeState

▸ **changeState**(`index`, `isActive`): `void`

Changes the active state of a container at a specific index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index of the container to change the active state of. |
| `isActive` | `boolean` | The new active state of the container. |

#### Returns

`void`

#### Implementation of

[IAnimation](../interfaces/IAnimation.md).[changeState](../interfaces/IAnimation.md#changestate)

#### Defined in

[animations/translationAnim.ts:62](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/translationAnim.ts#L62)

___

### do

▸ **do**(`elapsed`): `void`

Perform a specified step of the animation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `elapsed` | `number` | A part of the animation to preform |

#### Returns

`void`

#### Implementation of

[IAnimation](../interfaces/IAnimation.md).[do](../interfaces/IAnimation.md#do)

#### Defined in

[animations/translationAnim.ts:101](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/translationAnim.ts#L101)

___

### getActiveContainers

▸ **getActiveContainers**(): [`DataContainer`](DataContainer.md)[]

Returns an array of DataContainer instances that are currently active.

#### Returns

[`DataContainer`](DataContainer.md)[]

An array of DataContainer instances that are currently active.

#### Defined in

[animations/translationAnim.ts:188](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/translationAnim.ts#L188)

___

### getState

▸ **getState**(): `boolean`[]

Returns an array of boolean values that represent the active state of the containers.

#### Returns

`boolean`[]

An array of boolean values that represent the active state of the containers.

#### Defined in

[animations/translationAnim.ts:53](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/translationAnim.ts#L53)

___

### instant

▸ **instant**(): `void`

Instantly and synchronously completes the animation.

#### Returns

`void`

#### Implementation of

[IAnimation](../interfaces/IAnimation.md).[instant](../interfaces/IAnimation.md#instant)

#### Defined in

[animations/translationAnim.ts:180](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/translationAnim.ts#L180)

___

### isReversed

▸ **isReversed**(): `boolean`

Returns true if the animation is currently reversed, false otherwise.

#### Returns

`boolean`

True if the animation is currently reversed, false otherwise.

#### Defined in

[animations/translationAnim.ts:34](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/translationAnim.ts#L34)

___

### reverse

▸ **reverse**(): `void`

Reverses the animation.

#### Returns

`void`

#### Implementation of

[IAnimation](../interfaces/IAnimation.md).[reverse](../interfaces/IAnimation.md#reverse)

#### Defined in

[animations/translationAnim.ts:146](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/translationAnim.ts#L146)

___

### setFrom

▸ **setFrom**(`from`): `void`

Sets the from array to a new array of PositionRecord instances.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | [`PositionRecord`](PositionRecord.md)[] | An array of PositionRecord instances to set the from array to. |

#### Returns

`void`

#### Defined in

[animations/translationAnim.ts:91](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/translationAnim.ts#L91)

___

### setState

▸ **setState**(`isActive`): `void`

Sets the active state of the containers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isActive` | `boolean`[] | An array of boolean values that represent the active state of the containers. |

#### Returns

`void`

#### Defined in

[animations/translationAnim.ts:42](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/translationAnim.ts#L42)

___

### updateFrom

▸ **updateFrom**(): `void`

Updates the to array if the animation is reversed otherwise it updates from array using container.

#### Returns

`void`

#### Defined in

[animations/translationAnim.ts:77](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/translationAnim.ts#L77)
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
[rna-visualizer](../README.md) / Vector2

# Class: Vector2

Two-dimensional vector.

## Table of contents

### Constructors

- [constructor](Vector2.md#constructor)

### Properties

- [x](Vector2.md#x)
- [y](Vector2.md#y)
- [zero](Vector2.md#zero)

### Methods

- [add](Vector2.md#add)
- [copy](Vector2.md#copy)
- [multiply](Vector2.md#multiply)
- [size](Vector2.md#size)
- [subtract](Vector2.md#subtract)
- [distance](Vector2.md#distance)
- [subtraction](Vector2.md#subtraction)
- [sum](Vector2.md#sum)

## Constructors

### constructor

• **new Vector2**(`x`, `y`)

Creates a new Vector2 instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x component of the vector. |
| `y` | `number` | The y component of the vector. |

#### Defined in

[components/vector.ts:18](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/vector.ts#L18)

## Properties

### x

• **x**: `number`

#### Defined in

[components/vector.ts:5](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/vector.ts#L5)

___

### y

• **y**: `number`

#### Defined in

[components/vector.ts:6](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/vector.ts#L6)

___

### zero

▪ `Static` `Readonly` **zero**: [`Vector2`](Vector2.md)

The zero vector.

#### Defined in

[components/vector.ts:11](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/vector.ts#L11)

## Methods

### add

▸ **add**(`vector`): [`Vector2`](Vector2.md)

Adds the given vector to this vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | [`Vector2`](Vector2.md) | The vector to add. |

#### Returns

[`Vector2`](Vector2.md)

The sum of this vector and the given vector.

#### Defined in

[components/vector.ts:28](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/vector.ts#L28)

___

### copy

▸ **copy**(): [`Vector2`](Vector2.md)

Returns a copy of this vector.

#### Returns

[`Vector2`](Vector2.md)

A copy of this vector.

#### Defined in

[components/vector.ts:70](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/vector.ts#L70)

___

### multiply

▸ **multiply**(`k`): [`Vector2`](Vector2.md)

Multiplies this vector by the given scalar.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `k` | `number` | The scalar to multiply by. |

#### Returns

[`Vector2`](Vector2.md)

This vector multiplied by the given scalar.

#### Defined in

[components/vector.ts:50](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/vector.ts#L50)

___

### size

▸ **size**(): `number`

Returns the size (magnitude) of this vector.

#### Returns

`number`

The size of this vector.

#### Defined in

[components/vector.ts:60](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/vector.ts#L60)

___

### subtract

▸ **subtract**(`vector`): [`Vector2`](Vector2.md)

Subtracts the given vector from this vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | [`Vector2`](Vector2.md) | The vector to subtract. |

#### Returns

[`Vector2`](Vector2.md)

The difference between this vector and the given vector.

#### Defined in

[components/vector.ts:39](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/vector.ts#L39)

___

### distance

▸ `Static` **distance**(`vector1`, `vector2`): `number`

Returns the distance between the given vectors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector1` | [`Vector2`](Vector2.md) | The first vector. |
| `vector2` | [`Vector2`](Vector2.md) | The second vector. |

#### Returns

`number`

The distance between the given vectors.

#### Defined in

[components/vector.ts:100](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/vector.ts#L100)

___

### subtraction

▸ `Static` **subtraction**(`vector1`, `vector2`): [`Vector2`](Vector2.md)

Returns the difference between the given vectors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector1` | [`Vector2`](Vector2.md) | The first vector. |
| `vector2` | [`Vector2`](Vector2.md) | The second vector. |

#### Returns

[`Vector2`](Vector2.md)

The difference between the given vectors.

#### Defined in

[components/vector.ts:90](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/vector.ts#L90)

___

### sum

▸ `Static` **sum**(`vector1`, `vector2`): [`Vector2`](Vector2.md)

Returns the sum of the given vectors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector1` | [`Vector2`](Vector2.md) | The first vector. |
| `vector2` | [`Vector2`](Vector2.md) | The second vector. |

#### Returns

[`Vector2`](Vector2.md)

The sum of the given vectors.

#### Defined in

[components/vector.ts:80](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/components/vector.ts#L80)
[rna-visualizer](../README.md) / VisibilityAnim

# Class: VisibilityAnim

Interface for defining an animation

## Implements

- [`IAnimation`](../interfaces/IAnimation.md)

## Table of contents

### Constructors

- [constructor](VisibilityAnim.md#constructor)

### Properties

- [visibilityRecords](VisibilityAnim.md#visibilityrecords)

### Methods

- [animate](VisibilityAnim.md#animate)
- [changeState](VisibilityAnim.md#changestate)
- [do](VisibilityAnim.md#do)
- [instant](VisibilityAnim.md#instant)
- [maxIndex](VisibilityAnim.md#maxindex)
- [reverse](VisibilityAnim.md#reverse)

## Constructors

### constructor

• **new VisibilityAnim**(`visibilityRecords`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `visibilityRecords` | [`VisibilityRecord`](VisibilityRecord.md)[] |

#### Defined in

[animations/visibilityAnim.ts:9](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/visibilityAnim.ts#L9)

## Properties

### visibilityRecords

• **visibilityRecords**: [`VisibilityRecord`](VisibilityRecord.md)[]

#### Defined in

[animations/visibilityAnim.ts:7](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/visibilityAnim.ts#L7)

## Methods

### animate

▸ **animate**(`rna`, `duration`, `after?`): `void`

Preforms the Animation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rna` | [`RnaVis`](RnaVis.md) | RnaVis object on which is preformed the animation |
| `duration` | `number` | Duration of the animation |
| `after` | [`AfterFn`](../README.md#afterfn) | Function to call after the animation completes |

#### Returns

`void`

#### Implementation of

[IAnimation](../interfaces/IAnimation.md).[animate](../interfaces/IAnimation.md#animate)

#### Defined in

[animations/visibilityAnim.ts:49](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/visibilityAnim.ts#L49)

___

### changeState

▸ **changeState**(`index`, `isActive`): `void`

Change the state of the animation to active or not at a given index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | Index to change the state of |
| `isActive` | `boolean` | New state of the index |

#### Returns

`void`

#### Implementation of

[IAnimation](../interfaces/IAnimation.md).[changeState](../interfaces/IAnimation.md#changestate)

#### Defined in

[animations/visibilityAnim.ts:18](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/visibilityAnim.ts#L18)

___

### do

▸ **do**(`elapsed`): `void`

Perform a specified step of the animation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `elapsed` | `number` | A part of the animation to preform |

#### Returns

`void`

#### Implementation of

[IAnimation](../interfaces/IAnimation.md).[do](../interfaces/IAnimation.md#do)

#### Defined in

[animations/visibilityAnim.ts:26](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/visibilityAnim.ts#L26)

___

### instant

▸ **instant**(): `void`

Instantly and synchronously completes the animation.

#### Returns

`void`

#### Implementation of

[IAnimation](../interfaces/IAnimation.md).[instant](../interfaces/IAnimation.md#instant)

#### Defined in

[animations/visibilityAnim.ts:72](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/visibilityAnim.ts#L72)

___

### maxIndex

▸ `Private` **maxIndex**(): `number`

#### Returns

`number`

#### Defined in

[animations/visibilityAnim.ts:79](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/visibilityAnim.ts#L79)

___

### reverse

▸ **reverse**(): `void`

Reverse the animation.

#### Returns

`void`

#### Implementation of

[IAnimation](../interfaces/IAnimation.md).[reverse](../interfaces/IAnimation.md#reverse)

#### Defined in

[animations/visibilityAnim.ts:37](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/visibilityAnim.ts#L37)
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
