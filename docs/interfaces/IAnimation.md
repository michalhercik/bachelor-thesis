[rna-visualizer](../README.md) / IAnimation

# Interface: IAnimation

Interface for defining an animation

## Implemented by

- [`TranslationAnim`](../classes/TranslationAnim.md)
- [`VisibilityAnim`](../classes/VisibilityAnim.md)

## Table of contents

### Methods

- [animate](IAnimation.md#animate)
- [changeState](IAnimation.md#changestate)
- [do](IAnimation.md#do)
- [instant](IAnimation.md#instant)
- [reverse](IAnimation.md#reverse)

## Methods

### animate

▸ **animate**(`rna`, `duration`, `after`): `void`

Preforms the Animation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rna` | [`RnaVis`](../classes/RnaVis.md) | RnaVis object on which is preformed the animation |
| `duration` | `number` | Duration of the animation |
| `after` | [`AfterFn`](../README.md#afterfn) | Function to call after the animation completes |

#### Returns

`void`

#### Defined in

[animations/iAnimation.ts:37](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/iAnimation.ts#L37)

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

#### Defined in

[animations/iAnimation.ts:18](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/iAnimation.ts#L18)

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

#### Defined in

[animations/iAnimation.ts:24](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/iAnimation.ts#L24)

___

### instant

▸ **instant**(): `void`

Instantly and synchronously completes the animation.

#### Returns

`void`

#### Defined in

[animations/iAnimation.ts:42](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/iAnimation.ts#L42)

___

### reverse

▸ **reverse**(): `void`

Reverse the animation.

#### Returns

`void`

#### Defined in

[animations/iAnimation.ts:29](https://github.com/michalhercik/rna-visualizer/blob/febfa3b/lib/src/animations/iAnimation.ts#L29)
