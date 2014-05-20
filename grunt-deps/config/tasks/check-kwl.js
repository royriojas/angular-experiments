// region ### check-kwl
// this multitask takes care of update the KWL library when the version changes in the referenced
// parameters.yml file
module.exports = function ( grunt ) {
  return {
    check: {
      kwlDistPkgFile: 'node_modules/kwl-dist/package.json',
      parametersYAML: 'bundles/Kno/AppBundle/Resources/config/parameters.yml',
      kwlTarballLocation: 'http://knorepo.cloud.kno.com/pool/main/kwl-dist-{0}.tgz'
    }
  };
};
//endregion
