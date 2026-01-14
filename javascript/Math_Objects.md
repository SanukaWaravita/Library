# Math Objects

- `Math` - a built-in object that provides a collection of properties and methods.

## Rounding

```js
let result = Math.round(value);

result = Math.floor(value);
result = Math.ceil(value);
result = Math.trunc(value);
```

- `.round()` - rounds to the nearest integer.
- `.floor()` - rounds down (toward -∞).
- `.ceil()` - rounds up (toward +∞).
- `.trunc()` - removes the decimal part (no rounding).

## Exponents and Roots

```js
result = Math.pow(base, exponent);
result = Math.sqrt(value);
```

- `.pow(base, exponent)` - base^exponent (e.g. 2^3 = 8).
- `.sqrt()` - square root (e.g. √25 = 5).

## Logarithms

```js
result = Math.log(value);
```

- `.log()` - natural log (base e).

## Trigonometric (Radian Input)

```js
result = Math.sin(radians);     // Sine of angle
result = Math.cos(radians);     // Cosine of angle
result = Math.tan(radians);     // Tangent of angle
```

## Absolute Value and Sign

```js
result = Math.abs(value);       // Removes negative sign
result = Math.sign(value);      // Returns -1, 0, or 1
```

## Extremes
```js
result = Math.max(v1, v2, v3);      // Largest of the values
result = Math.min(v1, v2, v3);      // Smallest of the values
```
