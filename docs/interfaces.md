# Interface: IAnimation

Interface for defining an animation

## Implemented by

- TranslationAnim
- VisibilityAnim

## Methods

### animate

**animate**(rna, duration, after): void

Preforms the Animation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| rna | RnaVis | RnaVis object on which is preformed the animation |
| duration | number | Duration of the animation |
| after | AfterFn | Function to call after the animation completes |

#### Returns

void

___

### changeState

**changeState**(index, isActive): void

Change the state of the animation to active or not at a given index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| index | number | Index to change the state of |
| isActive | boolean | New state of the index |

#### Returns

void

___

### do

**do**(elapsed): void

Perform a specified step of the animation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| elapsed | number | A part of the animation to preform |

#### Returns

void

___

### instant

**instant**(): void

Instantly and synchronously completes the animation.

#### Returns

void

___

### reverse

**reverse**(): void

Reverse the animation.

#### Returns

void

# Interface: IDataBasePair

## Properties

### basePairType

• **basePairType**: string

___

### classes

• **classes**: string[]

___

### residueIndex1

• **residueIndex1**: number

___

### residueIndex2

• **residueIndex2**: number

# Interface: IDataLabel

## Properties

### labelContent

• **labelContent**: IDataLabelContent

___

### labelLine

• **labelLine**: IDataLabelLine

___

### residueIndex

• **residueIndex**: number

# Interface: IDataLabelContent

## Properties

### classes

• **classes**: string[]

___

### label

• **label**: string

___

### x

• **x**: number

___

### y

• **y**: number

# Interface: IDataLabelLine

## Properties

### classes

• **classes**: string[]

___

### x1

• **x1**: number

___

### x2

• **x2**: number

___

### y1

• **y1**: number

___

### y2

• **y2**: number

# Interface: IDataResidue

## Properties

### classes

• **classes**: string[]

___

### residueIndex

• **residueIndex**: number

___

### residueName

• **residueName**: string

___

### templateResidueIndex

• **templateResidueIndex**: number

___

### templateResidueName

• **templateResidueName**: string

___

### x

• **x**: number

___

### y

• **y**: number

# Interface: IDataStyle

## Properties

### name

• **name**: string

# Interface: ILine

## Implemented by

- BasePair
- Line
- MappingLine

## Methods

### getClasses

**getClasses**(): string[]

#### Returns

string[]

The list of classes of the line.

___

### getTransformedX1

**getTransformedX1**(): number

#### Returns

number

The x coordinate of the first point of the line.

___

### getTransformedX2

**getTransformedX2**(): number

#### Returns

number

The x coordinate of the second point of the line.

___

### getTransformedY1

**getTransformedY1**(): number

#### Returns

number

The y coordinate of the first point of the line.

___

### getTransformedY2

**getTransformedY2**(): number

#### Returns

number

The y coordinate of the second point of the line.

___

### getX1

**getX1**(): number

#### Returns

number

The x coordinate of the first point of the line.

___

### getX2

**getX2**(): number

#### Returns

number

The x coordinate of the second point of the line.

___

### getY1

**getY1**(): number

#### Returns

number

The y coordinate of the first point of the line.

___

### getY2

**getY2**(): number

#### Returns

number

The y coordinate of the second point of the line.

___

### isVisible

**isVisible**(): boolean

#### Returns

boolean

True if the line is visible, false otherwise.

# Interface: IRnaComplex

## Properties

### rnaMolecules

• **rnaMolecules**: IRnaMolecule[]

# Interface: IRnaInput

Interface for object representing input data for RnaVis.

## Properties

### classes

• **classes**: IDataStyle[]

___

### rnaComplexes

• **rnaComplexes**: IRnaComplex[]

# Interface: IRnaMolecule

## Properties

### basePairs

• **basePairs**: IDataBasePair[]

___

### labels

• **labels**: IDataLabel[]

___

### sequence

• **sequence**: IDataResidue[]

# Interface: Transformation

Interface representing a 2D transformation.

## Methods

### applyX

**applyX**(x): number

Applies the transformation to a given x-coordinate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| x | number | The x-coordinate to apply the transformation to. |

#### Returns

number

The transformed x-coordinate.

___

### applyY

**applyY**(y): number

Applies the transformation to a given y-coordinate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| y | number | The y-coordinate to apply the transformation to. |

#### Returns

number

The transformed y-coordinate.
