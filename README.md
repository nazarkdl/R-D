### General information about the project

Tiebreaker is an AI-powered SaaS application designed to make group dining decisions simple and data-driven. Planning a group dinner often leads to frustration due to everyone's different tastes, but Tiebreaker eliminates the endless back-and-forths by offering smart, collaborative restaurant suggestions.

Each user creates an account and completes a short survey capturing preferences such as cuisine types, price ranges, dietary restrictions, and even ambiance preferences. When planning a group outing, the app uses a collaborative filtering algorithm to evaluate the group's collective preferences and suggest restaurant options that offer the best compromise for all members.

By integrating with real-time restaurant APIs like Yelp or Google Places, Tiebreaker provides up-to-date information on menus, pricing, location, and ratings, ensuring that the group's final decision is not only personalized but also based on real-time data. The result? A list of restaurant options that optimizes satisfaction for the whole group, making dining decisions both fair and enjoyable.

### Tech stack

Next.js, TypeScript, React, and Supabase (auth + database), with Yelp/Google Places integration for live restaurant data.

### How to run the project locally

We install locally the latest version of node.js. In our git repository, we npm install at the first run of the project (or later on if other libraries of react will be used) and then each time you want to run the project, you have to npm run dev inside the git repository. A localhost link is generated, we copy that link and paste it in the prefered web browser in order to see the website.

### Documentation

- [Project paper](./docs/Tiebreaker_Paper.pdf) — full write-up of the problem, design, and implementation.
- Honor certificate awarded to the team: [photo 1](./docs/honor_certificate_1.jpg), [photo 2](./docs/honor_certificate_2.jpg).

### How to contribute to the project

This was built as a university course project by a fixed team; it isn't actively seeking outside contributors. If you'd like to build on it, fork the repo, install dependencies with `npm install`, and open a pull request describing your change.
