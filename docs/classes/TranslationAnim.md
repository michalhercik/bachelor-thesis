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
