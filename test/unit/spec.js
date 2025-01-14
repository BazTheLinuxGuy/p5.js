var spec = {
  addons: ['p5.dom'],
  color: ['color_conversion', 'creating_reading', 'p5.Color', 'setting'],
  core: [
    '2d_primitives',
    'attributes',
    'curves',
    'environment',
    'error_helpers',
    'main',
    'p5.Element',
    'rendering',
    'structure',
    'transform',
    'vertex'
  ],
  data: ['p5.TypedDict', 'local_storage'],
  events: ['keyboard', 'mouse', 'touch'],
  image: ['p5.Image', 'loading', 'pixels', 'filters'],
  io: [
    'files',
    'loadBytes',
    'loadStrings',
    'loadXML',
    'loadJSON',
    'loadTable',
    'loadImage',
    'loadModel',
    'loadShader'
  ],
  math: ['calculation', 'noise', 'p5.Vector', 'random', 'trigonometry'],
  typography: ['attributes', 'loadFont', 'p5.Font'],
  utilities: ['array_functions', 'string_functions', 'time_date'],
  webgl: [
    'p5.Matrix',
    'p5.Camera',
    'p5.RendererGL',
    'p5.Shader',
    'p5.Texture',
    'light'
  ]
};
Object.keys(spec).map(function(folder) {
  spec[folder].map(function(file) {
    var string = [
      '<script src="unit/',
      folder,
      '/',
      file,
      '.js" type="text/javascript" ></script>'
    ];
    document.write(string.join(''));
  });
});
