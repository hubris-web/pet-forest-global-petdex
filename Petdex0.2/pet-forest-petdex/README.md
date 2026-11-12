# Pet Forest Global Petdex

A Next.js starter project for a community-maintained Pet Forest Global pet encyclopedia.

## Included in this starter
- Game-inspired dark forest / gold interface
- Searchable pet directory
- Individual pet profile
- Maximum-level base attributes and growth values
- Skill list with skill levels
- Combat statistics tab
- Responsive desktop and mobile layout
- Mischief Maiden as the first sample record, based on the screenshots supplied in the conversation

## Run locally
1. Install Node.js (LTS).
2. Open this folder in a terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open http://localhost:3000.

## Deploy to Vercel
1. Create a GitHub repository and upload the contents of this folder.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the GitHub repository.
4. Keep the detected Next.js settings and select **Deploy**.

## Add more pets
Add another object to `data/pets.js`. Copy the structure of the Mischief Maiden entry and update its fields and image path. Put the pet image in `public/` and set its path in the record, for example `/forest-guardian.png`.

## Data note
The first record is a transcription of the provided in-game screenshots. Confirm any unclear values and skill classifications against the game before publishing the record as authoritative. Cultivation is intentionally left out of this first version.
