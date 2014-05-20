module.exports = function () {
  // region ### markdown-expander
  // Markdown Expander is a multitask that takes a set of markdown files as the input, along with a twig template and
  // generate a set of static based on both. The content of the markdown files is available on the templates
  // on the variable twig content
  return {
    options: {
      template: 'frontend-app/chrome-app/twig/page.html.twig'
    },
    showcase: {
      files: [ {
        src: 'frontend-app/chrome-app/sources/**/*.md',
        dest: 'frontend-app/chrome-app/pages/'
      } ]
    }
  };
  // endregion
};
