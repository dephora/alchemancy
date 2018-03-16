precision mediump float;

uniform sampler2D u_brushTex;
uniform sampler2D u_grainTex;

uniform float uRed;
uniform float uGreen;
uniform float uBlue;

uniform float uOpacity;

uniform float uRotation;

uniform float uBleed;

uniform float uGrainRotation;
uniform float uGrainScale;

uniform float u_size;
uniform float u_texture_size;
uniform float u_x_offset; // TODO could we use filterArea.zw ?
uniform float u_y_offset;
uniform float u_grain_zoom;
uniform float u_alpha;
uniform vec2 u_offset_px;

uniform vec2 u_brush_size;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;  // ??

// from PIXI
uniform vec4 filterArea;
uniform vec2 dimensions;
uniform vec4 filterClamp;

uniform sampler2D uSampler; // the actual brush texture
uniform sampler2D filterSampler; // ???

vec2 rotate (vec2 v, float a) {
	float s = sin(a);
	float c = cos(a);
	mat2 m = mat2(c, -s, s, c);
	return m * v;
}

vec2 scale (vec2 v, vec2 _scale) {
	mat2 m = mat2(_scale.x, 0.0, 0.0, _scale.y);
	return m * v;
}

vec2 mapCoord (vec2 coord) {
  coord *= filterArea.xy;
  return coord;
}

vec2 unmapCoord (vec2 coord) {
  coord /= filterArea.xy;
  return coord;
}

void main(void) {
  // user's intended brush color
  vec3 color = vec3(uRed, uGreen, uBlue);

  vec2 coord = mapCoord(vTextureCoord) / dimensions;

	// translate by the subpixel
	coord -= u_offset_px / dimensions;

  // move space from the center to the vec2(0.0)
  coord -= vec2(0.5);
  // rotate the space
  coord = rotate(coord, uRotation);

	// scale to compensate for sizing shift
	// (float value brush size vs int value texture dimensions)
	vec2 s = u_brush_size / dimensions;
	// apply scale (backwards to read texture)
	coord = scale(coord, 1. / s);

  // move it back to the original place
  coord += vec2(0.5);

	coord = unmapCoord(coord * dimensions);

	// read a sample from the texture
  vec4 brushSample = texture2D(uSampler, coord);

	// clamp (via https://github.com/pixijs/pixi.js/wiki/v4-Creating-Filters#bleeding-problem)
	if (coord == clamp(coord, filterClamp.xy, filterClamp.zw)) {
	  // tint
	  gl_FragColor = vec4(color, 1.) * brushSample.r * uOpacity;
	} else {
		// don't draw
		gl_FragColor = vec4(0.);
	}
}
