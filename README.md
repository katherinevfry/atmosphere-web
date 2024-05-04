# Atmosphere Nash
![ezgif-2-4a84e9b6ea](https://github.com/katherinevfry/atmosphere-web/assets/76188832/1dd2acdf-75ff-4835-b212-6ac3d4824f7a)

Atmosphere Nash was born out of all of the coffee shop recommendations my friends, families, and sometimes total randos would ask for. "Well, what's the vibe you're looking for?" I wouldn't tell you to go work remotely at an uber lively cafe. What do you *need*? 

## Original Design and Mockups
I knew I wanted the user to be able to pick up to three categories, and be presented with coffee shop options that *only* fit those criteria.

Originally, I intended this to feel like a full website, despite being built as an SPA with NextJS. Each shop would have its own leaf page that could be shared with friends. After building thew site out this way and having some friends beta test it-- I realized I hated it. I wanted to feel like this was a *choose your own adventure* experience. So I ditched the routing and focused on building a contained experience. 

### early figma mockups

![MacBook Pro 14_ - 1 (3)](https://github.com/katherinevfry/atmosphere-web/assets/76188832/fed70008-dafb-4981-b280-eee443243b42)

### choosing a data source
I love a good headless CMS -- for this project I went with sanity.io, as it's super easy to spin up and very easy to maintain. Since this isn't a site I'd be updating constantly, I set up a webhook to ensure my static vercel site would redeploy any time there was fresh data available.
<img width="1274" alt="Screen Shot 2024-05-03 at 7 22 03 PM" src="https://github.com/katherinevfry/atmosphere-web/assets/76188832/edb6f666-88ee-4365-bdc5-f3d3c5f12ed1">

### Design Tokens
While the final site design differs from my original figma mockups, I was still able to build my site using the design tokens I'd originally created.
![Design Tokens (3)](https://github.com/katherinevfry/atmosphere-web/assets/76188832/818c10b1-5adb-44c5-a46e-2cc681d3535b)

### Final tech stack
- NextJS
- React
- Typescript
- TailwindCSS
- Sanity Studio
- Vercel

