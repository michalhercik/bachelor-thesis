import { 
  RnaVis, 
  TranslationGroups, 
  PositionRecord,
  TranslationAnim,
} from 'rna-visualizer';
import template from './d.5.b.A.madurae.json';
import structure from './URS00000B9D9D.json';

const canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 500;
document.body.appendChild(canvas);

const rnaVis = new RnaVis(canvas);

//-------------------------------
// Add structures
//-------------------------------
rnaVis
  .addLayer(template, 'd.5.b.A.madurae')
  .addLayer(structure, 'URS00000B9D9D');

//-------------------------------
// Draw
//-------------------------------
rnaVis.draw();

//-------------------------------
// Add Zoom and panning
//-------------------------------
rnaVis.addZoom();

//-------------------------------
// Structures Aligning
//-------------------------------
const bestTranslations = rnaVis.align();
rnaVis
  .translate(bestTranslations)
  .draw();

//-------------------------------
// Structures Aligning to a specific group
//-------------------------------
// const containers = rnaVis.getDataContainers();
// const groupSizes = TranslationGroups.create(containers[0], containers[1], null, 20)
// .map(group => group.size());
// const groupIndex = groupSizes.indexOf(Math.min(...groupSizes));
// const translationsToGroup = rnaVis.align(groupIndex);
// rnaVis
//   .translate(translationsToGroup)
//   .draw();

//-------------------------------
// Structures Aligning to a specific template residue
//-------------------------------
const templateResidue = rnaVis.layers[0].data.residues[42];
const translationsToResidue = rnaVis.getAlignmentToTempResidue(templateResidue);
rnaVis
  .translate(translationsToResidue)
  .draw();

//-------------------------------
// Aligning animation
//-------------------------------
// const containers = rnaVis.getDataContainers();
// const animationTargets = rnaVis
// .align()
// .map((translation, i) => PositionRecord.fromTranslation(containers[i], translation));
//
// const anim = new TranslationAnim(containers, animationTargets);
// anim.animate(rnaVis, 1500, () => {
//   anim.reverse();
//   anim.animate(rnaVis, 1500);
// });

//-------------------------------
// Transformation to template
//-------------------------------
// const containers = rnaVis.getDataContainers().slice(1);
// const targetStructure = rnaVis.layers[0].data;
//
// containers.forEach(c => {
//   c.getUnmappableResidues().forEach(
//     r => r.setVisible(false)
//   );
// });
//
// const targets = containers.map(
//   cont => PositionRecord.fromTemplate(cont, targetStructure)
// );
// new TranslationAnim(containers, targets)
//   .animate(rnaVis, 1500);

//-------------------------------
// Transformation to template
//-------------------------------
rnaVis.layers.forEach(
  l => l.mappingLines.forEach(
    m => m.setVisible(true)
  )
);
rnaVis.draw();
