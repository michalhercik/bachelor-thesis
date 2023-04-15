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
