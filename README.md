# Nuxt 3 Storyblok Module Error Demo

This repo has been made to explore a bug regarding the storyblok module for nuxt 3.

## Issue

- base concern: storyblok module cannot find the composition api
- relevant situation: after deleting `node_modules` and the `package-lock.json` or pulling and then installing
- Main issue seems to be that when storyblok is installed with everything else using `npm i`, it doesn't read other files correctly


### Fix
- Comment out all storyblok content from your config
- `npm remove @storyblok/nuxt` -- **Don't add @next here**
- `rm -rf node_modules package-lock.json` -- necessary before reinstall
- `npm i`
- `npm run dev` -- to verify that it worked
- `npm i @storyblok/nuxt@next`
- Uncomment storyblok content from the nuxt config
- Now it should work as normal

### Notes
- If you do not remove the `package-lock.json` file, then you will get an error 