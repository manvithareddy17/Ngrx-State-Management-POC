module.exports = {
  name: 'test-ui-console',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/test-ui-console/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
