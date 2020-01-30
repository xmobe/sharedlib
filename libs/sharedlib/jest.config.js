module.exports = {
  name: 'sharedlib',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/sharedlib',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
