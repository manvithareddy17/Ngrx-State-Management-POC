module.exports = {
  name: 'sam-feature-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/sam/feature-shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
