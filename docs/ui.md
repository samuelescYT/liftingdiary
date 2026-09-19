# UI Coding Standards

These standards apply to all UI code throughout this project.

## Components: shadcn/ui only

- **Only shadcn/ui components may be used for the UI in this project.**
- **ABSOLUTELY NO custom components should be created.** Do not write bespoke buttons, cards, inputs, modals, etc.
- If a UI element is needed, find the matching shadcn/ui component and use it. Add it via the CLI (`npx shadcn@latest add <component>`).
- Compose pages from shadcn/ui components directly, styled only through their supported props, variants, and Tailwind utility classes.
- Do not wrap, re-export, or extend shadcn/ui components into new components.

## Date formatting: date-fns

All date formatting must be done with [date-fns](https://date-fns.org/). Do not use `toLocaleDateString`, `Intl.DateTimeFormat`, moment, dayjs, or manual string building.

Dates are formatted as: day with ordinal suffix, abbreviated lowercase month, four-digit year.

Examples:

| Output       |
| ------------ |
| 1st sep 2025 |
| 2nd aug 2025 |
| 3rd jan 2026 |
| 4th jun 2024 |

Use the format string `do MMM yyyy` and lowercase the result:

```ts
import { format } from "date-fns";

const formatDate = (date: Date) => format(date, "do MMM yyyy").toLowerCase();

formatDate(new Date(2025, 8, 1)); // "1st sep 2025"
```
