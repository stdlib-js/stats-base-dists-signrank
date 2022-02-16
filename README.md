<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# Signed Rank

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Distribution of the Wilcoxon signed rank test statistic.

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-signrank
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var signrank = require( '@stdlib/stats-base-dists-signrank' );
```

#### signrank

Distribution of the Wilcoxon signed rank test statistic.

```javascript
var dist = signrank;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, n )`][@stdlib/stats/base/dists/signrank/cdf]</span><span class="delimiter">: </span><span class="description">wilcoxon signed rank test statistic cumulative distribution function.</span>
-   <span class="signature">[`pdf( x, n )`][@stdlib/stats/base/dists/signrank/pdf]</span><span class="delimiter">: </span><span class="description">wilcoxon signed rank test statistic probability density function.</span>
-   <span class="signature">[`quantile( p, n )`][@stdlib/stats/base/dists/signrank/quantile]</span><span class="delimiter">: </span><span class="description">wilcoxon signed rank test statistic quantile function.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils-keys' );
var signrank = require( '@stdlib/stats-base-dists-signrank' );

console.log( objectKeys( signrank ) );
```

</section>

<!-- /.examples -->

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

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-signrank.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-signrank

[test-image]: https://github.com/stdlib-js/stats-base-dists-signrank/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-base-dists-signrank/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-signrank/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-signrank?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-signrank.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-signrank/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-signrank/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-signrank/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-signrank/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-signrank/main/LICENSE

<!-- <toc-links> -->

[@stdlib/stats/base/dists/signrank/cdf]: https://github.com/stdlib-js/stats-base-dists-signrank-cdf

[@stdlib/stats/base/dists/signrank/pdf]: https://github.com/stdlib-js/stats-base-dists-signrank-pdf

[@stdlib/stats/base/dists/signrank/quantile]: https://github.com/stdlib-js/stats-base-dists-signrank-quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
