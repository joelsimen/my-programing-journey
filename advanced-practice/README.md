# Advanced Practice Pages — HTML/CSS/JS

5 full, realistic web pages, each combining multiple components into one complete site.
More advanced than the first pack: real interactivity, form validation, filtering/search, and a hand-drawn chart with zero libraries.

## Projects

1. **01-ecommerce-product** — Product detail page
   - Image gallery with thumbnail swapping
   - Color swatch selection
   - Quantity stepper that updates the price live
   - Add-to-cart with cart counter + toast notification
   - Expandable info accordion (shipping/materials)

2. **02-blog-homepage** — Blog homepage
   - Featured post hero + article grid
   - Category filtering (All/Design/Code/Life) with JS
   - Dark mode toggle (CSS variables + class switching)
   - Newsletter form with regex email validation

3. **03-saas-landing** — Full marketing site (the big one)
   - Sticky navbar, hero, social-proof logo strip
   - Features grid, testimonial, pricing section
   - Monthly/yearly pricing toggle (custom switch, no libraries)
   - FAQ accordion, smooth-scroll anchor links, full footer
   - Mobile hamburger button left as an exercise for you to wire up

4. **04-restaurant-site** — Restaurant/bistro site
   - Full-bleed hero with background image + gradient overlay
   - Menu with tabbed categories (Starters/Mains/Desserts)
   - Masonry-style image gallery (CSS columns)
   - Reservation form with real field validation

5. **05-admin-dashboard** — Admin dashboard
   - Sidebar + topbar app layout, mobile-collapsible sidebar
   - Stat cards with up/down deltas
   - A bar chart drawn from scratch with the Canvas API (no chart library — try changing the `data` array in script.js)
   - Orders table with a live search/filter box

## How to use them

- Open any `index.html` with Live Server / Live Preview in Antigravity.
- Read the JS files first — they're commented to explain what each block does.
- Suggested exercises baked in:
  - #3: wire up the mobile hamburger menu yourself (there's a placeholder alert where your code goes)
  - #5: swap the canvas bar chart's data, or try converting it into a line chart
  - #1: try adding a real "cart drawer" panel that lists added items instead of just a counter
- Once comfortable, try rebuilding one of these fully in React, breaking each section into its own component and using `useState`/`useEffect` where the vanilla JS uses DOM queries and event listeners.
