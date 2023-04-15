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
