import { defineConfig, devices } from '@playwright/test';

require('dotenv').config();

export default defineConfig({
  testDir: './__checks__',
  use: {
      baseURL: process.env.SHOPWARE_BASE_URL,
  }
})
