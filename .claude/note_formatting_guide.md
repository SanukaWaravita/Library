# Note Formatting Guide

This document describes the formatting conventions used in the Java notes so that raw notes can be properly formatted to match the existing style.

---

## Overall Structure

- Notes are written in **Markdown** (`.md` files).
- Each file covers a single topic or closely related set of concepts.
- The file uses a **code-first, explanation-after** pattern: show the code, then explain it line by line.

---

## Headings

- `#` (H1) is used for **major topic sections** within a file (e.g., `# Arithmetic Operators`, `# Primitive Vs. Reference`, `# Swapping Two Variables`).
- `##` (H2) is used for **subtopics or variations** within a section (e.g., `## Accepting String Datatype Input`, `## Float Datatype`, `## Introducing a Temporary Variable`).
- `###` (H3) is used sparingly for **sub-variations** (e.g., `### Version-1`, `### Version-2`).
- Headings use **Title Case** or **Sentence-style capitalization** (not strict; follows natural phrasing).

---

## Code Blocks

- Full Java programs are placed in **fenced code blocks** with the `java` language tag.
- Programs are shown as **complete, runnable classes** (with `public class`, `main` method, etc.), not isolated snippets.
- Code blocks use **4-space indentation** inside the class and method bodies.
- Blank lines are placed generously inside code for readability (between variable declarations, logic blocks, and print statements).
- When referencing a **partial excerpt** of a previously shown program within an explanation, it is placed in an indented code block.

---

## Output Blocks

- Output is introduced with `- Output:` (as a bullet point) followed by a **fenced code block with no language tag**.
- Sometimes the label is just `- Output` (no colon) or `- Code:` -- these are interchangeable in the notes.
- When showing **user input alongside output**, the label is `- Output + User Input:` or `- Output + User input:`.
- When a program has **interactive input followed by computed output**, the two-step pattern is used:
    1. `- Output + User Input:` with a fenced code block showing the prompts and the user's typed input.
    2. `- Output:` with a fenced code block showing the program's computed result.
    This separates what the user types from what the program calculates, making it clear which part is input and which is output.
- Output blocks are **indented by 4 spaces** when they appear under a bullet point, to nest visually under the bullet.
- Occasionally, output blocks appear at the **root level** (no indentation) directly after a code block -- this is acceptable but the indented style is more common.

---

## Explanations (Bullet Points)

- All explanations are written as **unordered list items** using `-`.
- Each bullet explains **one statement or one concept** from the code above it.
- Bullets reference specific code statements using **inline code** (backticks): e.g., "The statement `int x = 10;` declares an integer variable `x` and assigns it the value `10`."
- The phrasing pattern is: **"The statement `[code]` [does what]."** or **"The `[code]` statement [does what]."**
- Explanations are **verbose and beginner-friendly** -- they spell out what each line does, even if repetitive across examples.
- When a concept repeats across multiple examples (e.g., variable declarations), the explanation is still given each time, sometimes with slight variation.
- Emphasis uses **italics** (`*text*`) for terms being introduced or highlighted (e.g., *integer variable*, *augmented assignment operator*, *floating-point division*).
- Bold (`**text**`) is used for key terms in definitions or important distinctions (e.g., **declaration**, **assignment**).
- **If the raw notes have no explanations**, add them during formatting. Every code block should be followed by bullet-point explanations that walk through what the code does, even if the original notes only had the code and output. Write explanations in the same beginner-friendly style as the rest of the notes.

---

## Inline Code Usage

- Variable names, method names, values, operators, class names, and short code expressions are wrapped in backticks: `x`, `scanner.nextLine()`, `10`, `\n`, `println`, `nextInt()`.
- Longer statements referenced in explanations are also in backticks.

---

## Horizontal Rules

- `---` is used as a **section divider** between major topics or between groups of related examples.
- Placed on its own line with blank lines above and below.

---

## Tables

- Standard Markdown tables are used when comparing concepts side by side (e.g., Primitive vs. Reference).

---

## Lists (Non-bullet)

- **Ordered lists** (`1.`, `2.`, etc.) are used for step-by-step processes (e.g., the steps of variable swapping).
- **Nested bullets** use 4-space indentation.

---

## Narrative Flow Between Code Blocks

- When showing a **progression** of examples (e.g., showing a problem then its fix), the pattern is:
    1. Show the code block.
    2. Show the output.
    3. Explain what happens and why.
    4. Show the next variation of the code.
    5. Repeat.

- Transitional phrases like "From these trials, it appears..." or "To prevent the..." are used in bullets to connect examples narratively.
- The word "OR" on its own line (no bullet) is used to show alternative approaches between two code blocks.
- Ellipsis (`...`) with surrounding text is used for narrative continuity.

---

## Tone and Voice

- Written in **second person** ("you", "your") and **first person plural** ("we") -- casual, tutorial-like.
- Beginner-oriented: assumes the reader is learning for the first time.
- Occasional personality/humor (e.g., "for some reason", emojis in the Class.md file).
- Uses phrases like "In other words", "For example", "In summary", "Here is a tip for best practices".

---

## File Naming

- File names use **snake_case** (e.g., `accepting_user_input.md`, `escape_sequences.md`) or **PascalCase/Title_Case** (e.g., `Basic_programs.md`, `Control_Statements.md`, `Outputting_Text.md`).
- Both conventions coexist; there is no strict rule, but descriptive names are used.

---

## Summary of the Pattern

```
# Topic Heading

[Complete Java program in ```java block]

- Output:

    ```
    [output here]
    ```

- The statement `[code]` [explanation of what it does].

- The statement `[code]` [explanation of what it does].

[Next complete Java program showing a variation]

- Output:

    ```
    [output here]
    ```

- [Explanation of the difference or new concept introduced].

---

# Next Topic Heading

[repeat pattern]
```
