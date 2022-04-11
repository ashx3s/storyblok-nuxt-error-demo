# Nuxt 3 Storyblok Module Error Demo

This repo has been made to explore a bug regarding the storyblok module for nuxt 3.

## Issue

- base concern: storyblok module cannot find the composition api
- relevant situation: after deleting node_modules or pulling and installing
- temporary fix:
  - remove the storyblok module and comment it out from the config
  - reinstall everything
  - **then** install storyblok module

### Notes
