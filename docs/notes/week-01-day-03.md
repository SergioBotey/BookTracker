# Week 01 — Day 03

## Goal

Define the initial domain model for BookTracker.

## Completed

- Created base domain entities.
- Created auditable entity abstraction.
- Created User entity.
- Created Book entity.
- Created Review entity.
- Created ReadingGoal entity.
- Created ReadingStatus enum.
- Created BookRating enum.
- Verified backend build.

## Domain model

```txt
User 1 ──── N Book
User 1 ──── N ReadingGoal
Book 1 ──── N Review