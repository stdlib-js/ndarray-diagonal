<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# diagonal

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return a **read-only** view of the diagonal of a matrix (or stack of matrices).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro section element. -->

<section class="intro">

For an `M`-by-`N` matrix `A`, the `k`-th diagonal is defined as

<!-- <equation class="equation" label="eq:diagonal_definition" align="center" raw="D_k = \{\, A_{i,j} : j - i = k \,\}" alt="Definition of the k-th diagonal of a matrix."> -->

```math
D_k = \{\, A_{i,j} : j - i = k \,\}
```

<!-- <div class="equation" align="center" data-raw-text="D_k = \{\, A_{i,j} : j - i = k \,\}" data-equation="eq:diagonal_definition">
    <img src="" alt="Definition of the k-th diagonal of a matrix.">
    <br>
</div> -->

<!-- </equation> -->

where `k = 0` corresponds to the main diagonal, `k > 0` corresponds to the super-diagonals (above the main diagonal), and `k < 0` corresponds to the sub-diagonals (below the main diagonal). For example, given the matrix

<!-- <equation class="equation" label="eq:diagonal_example" align="center" raw="A = \begin{bmatrix} a_{0,0} & a_{0,1} & a_{0,2} \\ a_{1,0} & a_{1,1} & a_{1,2} \\ a_{2,0} & a_{2,1} & a_{2,2} \end{bmatrix}" alt="Example matrix."> -->

```math
A = \begin{bmatrix} a_{0,0} & a_{0,1} & a_{0,2} \\ a_{1,0} & a_{1,1} & a_{1,2} \\ a_{2,0} & a_{2,1} & a_{2,2} \end{bmatrix}
```

<!-- <div class="equation" align="center" data-raw-text="A = \begin{bmatrix} a_{0,0} & a_{0,1} & a_{0,2} \\ a_{1,0} & a_{1,1} & a_{1,2} \\ a_{2,0} & a_{2,1} & a_{2,2} \end{bmatrix}" data-equation="eq:diagonal_example">
    <img src="" alt="Example matrix.">
    <br>
</div> -->

<!-- </equation> -->

the main diagonal is `[ a_{0,0}, a_{1,1}, a_{2,2} ]`, the super-diagonal `k = 1` is `[ a_{0,1}, a_{1,2} ]`, and the sub-diagonal `k = -1` is `[ a_{1,0}, a_{2,1} ]`.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
diagonal = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-diagonal@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var diagonal = require( 'path/to/vendor/umd/ndarray-diagonal/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-diagonal@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.diagonal;
})();
</script>
```

#### diagonal( x\[, options] )

Returns a read-only view of the diagonal of a matrix (or stack of matrices).

```javascript
var array = require( '@stdlib/ndarray-array' );

var x = array( [ [ 1.0, 2.0, 3.0 ], [ 4.0, 5.0, 6.0 ], [ 7.0, 8.0, 9.0 ] ] );
// returns <ndarray>[ [ 1.0, 2.0, 3.0 ], [ 4.0, 5.0, 6.0 ], [ 7.0, 8.0, 9.0 ] ]

var y = diagonal( x );
// returns <ndarray>[ 1.0, 5.0, 9.0 ]
```

The function accepts the following arguments:

-   **x**: input [`ndarray`][@stdlib/ndarray/ctor].
-   **options**: function options.

The function accepts the following options:

-   **k**: diagonal offset. The diagonal offset is interpreted as `column - row`. Accordingly, when `k = 0`, the function returns the main diagonal; when `k > 0`, the function returns the diagonal above the main diagonal; and when `k < 0`, the function returns the diagonal below the main diagonal. Default: `0`.
-   **dims**: dimension indices defining the plane from which to extract the diagonal. Must contain exactly two unique dimension indices. The first element specifies the row-like dimension. The second element specifies the column-like dimension. If a dimension index is provided as an integer less than zero, the dimension index is resolved relative to the last dimension, with the last dimension corresponding to the value `-1`. Default: `[-2, -1]`.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The order of the dimension indices contained in `options.dims` matters. The first element specifies the row-like dimension. The second element specifies the column-like dimension.
-   Each provided dimension index must reside on the interval `[-ndims, ndims-1]`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-diagonal@umd/browser.js"></script>
<script type="text/javascript">
(function () {

// Create a stack of matrices:
var x = uniform( [ 2, 3, 3 ], -10.0, 10.0 );
console.log( ndarray2array( x ) );

// Extract the main diagonals from the stack:
var y = diagonal( x );
console.log( ndarray2array( y ) );

// Extract super-diagonals from the stack:
y = diagonal( x, {
    'k': 1
});
console.log( ndarray2array( y ) );

// Extract sub-diagonals from the stack:
y = diagonal( x, {
    'k': -1
});
console.log( ndarray2array( y ) );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-diagonal.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-diagonal

[test-image]: https://github.com/stdlib-js/ndarray-diagonal/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-diagonal/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-diagonal/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-diagonal?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-diagonal.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-diagonal/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-diagonal/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-diagonal/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-diagonal/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-diagonal/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-diagonal/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-diagonal/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-diagonal/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-diagonal/main/LICENSE

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor/tree/umd

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
