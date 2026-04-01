- Claude Code docs - https://code.claude.com/docs/en/overview

- `/login` - to authenticate and login to your claude/anthropic account using your browser. 

# Claude.md

- When you prompt claude code, there's actually another prompt thats HIDDEN from you; this prompt is INJECTED at the top of your conversation string before you even send the message; this is the `Claude.md`.

- So, `Claude.md` is kind of the very first thing the model reads, so this is very important to 'steer' the output.

- In a file such as the `Claude.md`, you are gonna have to be very concise and give it the bounds for what the workspace is. 

# Three major ways people currently design:

1. Give it a design + screenshot loop

    - Code will spring up an initial design (lets say 80% of the way to the goal);
    - Code will screenshot it.
    - Compare with the source image, and list all differences.
    - It will make edits (now lets say it get 90% of the way to the goal).
    - This will repeat until code gets to ATLEAST 95% (never 100%) of the way to the goal

2. Give voice transcript dump + edit

    - Use a voice transcript tool and dump a massive voice transcript of everything you want on the website.

3. Use components, like on 21st.dev etc


# Core building Phylosophy

1. Give a high-level task; with the `Claude.md` file.

2. Allow Code to DO the task.

3. Allow Code to verify/judge the result. (This is the powerful part of this method)

Repeat as needed.

- Value of AI is not in it's ability to 'oneshot' everything, but rather speed.
