# num-to-words-uz

A simple package to convert numbers to words in Uzbek.

Developer: Sevinchbek Kholboev

## Example

```
import React, { useState } from 'react';
import { convertToWords } from 'num-to-words-uz';

const NumberToWords = () => {
    const [number, setNumber] = useState(0);
    const [words, setWords] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const num = parseInt(event.target.value, 10);
        setNumber(num);
        setWords(convertToWords(num));
    };

    return (
        <div>
            <h1>Convert Number to Words in Uzbek</h1>
            <input
                type="number"
                value={number}
                onChange={handleChange}
                placeholder="Enter a number"
            />
            <p>Words: {words}</p>
        </div>
    );
};

export default NumberToWords;

```

## Installation

You can install this package using npm:

```bash
npm install num-to-words-uz
```
