# Cell Sentry

**A local preflight for values you are about to paste into Excel, Google Sheets, Numbers, or WPS.**

Paste tabular text first. Cell Sentry identifies values likely to be silently coerced by a spreadsheet: leading-zero identifiers, numbers longer than 15 digits, scientific-looking identifiers, and locale-sensitive numeric dates. It has no account, upload, backend, clipboard permission, or network request.

## Why

Spreadsheet software is excellent at calculations but can mistake an identifier for a number. Microsoft documents that Excel removes leading zeros and stores only 15 significant digits for numbers. Cell Sentry is the tiny local checkpoint before the paste, not another spreadsheet or CSV security scanner.

## Use

Open [the live app](https://zcxikingstar-ship-it.github.io/cell-sentry/) or `index.html` locally.

1. Copy a table from chat, a document, or a CSV preview.
2. Paste it into Cell Sentry and select **Review cells**.
3. Format the relevant destination columns as **Text** before pasting if an identifier must remain exact.
4. Paste into your own spreadsheet manually.

Example:

```text
Order ID    Date     Amount
001245      10/11    123456789012345678
```

The three values are highlighted with spreadsheet-style cell coordinates.

## Limits

- This is a deterministic pattern check, not an Excel, Google Sheets, or WPS integration.
- It does not paste, format, repair, upload, or verify a spreadsheet after the fact.
- A green result means no supported pattern matched, not that every value will preserve its meaning.
- Formula-injection checks belong to [CSV Ward](https://github.com/zcxikingstar-ship-it/csv-ward); Cell Sentry focuses on unintended type coercion.

## Development

No runtime dependencies. Node.js 20+ is needed only for checks.

```sh
npm run check
npm test
```

## Security and privacy

Text stays in the browser page and is not persisted. Review the source before using it with sensitive data.

## License

[MIT](LICENSE)

