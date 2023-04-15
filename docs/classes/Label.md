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
