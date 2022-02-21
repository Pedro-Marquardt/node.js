#!/bin/bash
npm install
npm run typeorm mmigration:run
npm run dev
