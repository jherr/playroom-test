module.exports = {
  components: './src/components',
  outputPath: './dist/playroom',

  // Optional:
  title: 'My Awesome Library',
  frameComponent: './playroom/FrameComponent.js',
  widths: [320, 768, 1024],
  port: 9000,
  openBrowser: true,
  exampleCode: `
    <Btn>
      Hello World!
    </Btn>
  `,
  baseUrl: '/playroom/'
};
