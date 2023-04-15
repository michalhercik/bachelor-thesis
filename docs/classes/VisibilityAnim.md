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
