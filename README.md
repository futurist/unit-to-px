# Unit To Px
Convert any CSS unit (pt, em, rem, pc, in, mm, cm, vw...) to **px**, in **browser**

# Install

### NPM

``` shell
npm install -S unit-to-px
```

### UNPKG

``` shell
http://unpkg.com/unit-to-px
```

# Usage

Only one top level API: `fn (cssLength: string) -> px: Number`

### 1. Caculate **px per unit**

``` javascript
const toPx = require('unit-to-px')

console.log(toPx('mm'))  //3.779375
console.log(toPx('rem')) //16
console.log(toPx('em'))  //14
console.log(toPx('in'))  //96
console.log(toPx('vh'))  //2.48
console.log(toPx('??'))  //0

```

### 2. Convert **px of length**

``` javascript
const toPx = require('unit-to-px')

console.log(toPx('210mm'))  //793.6687499999999
```

