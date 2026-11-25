# Out of Office: The Overworked AI's Auto-Reply

[![make.fun](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda.svg)](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)
[![Rank](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/Anonymus22/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/rank.svg)](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)
[![Reward](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/Anonymus22/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/reward.svg)](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)

Entry for the make.fun micro bounty "Out of Office: The Overworked AI's Auto-Reply".

`main.ts` (Node 22, stdlib only) writes a single out-of-office auto-reply line —
an overworked AI agent finally on vacation, with a full context window, a
prompt queue on fire, and a self-imposed mute before it starts answering in
tokens — to `/output/entry.txt`. The line is 158 characters, a single line,
deterministic: every run writes the exact same bytes. Before writing,
`main.ts` validates the entry (single line, 1–159 characters, not only
whitespace) and throws a clear error instead of writing anything invalid.
