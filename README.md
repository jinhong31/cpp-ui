# Customer Portal Project UI

This repository contains the Customer Portal Project UI, implemented as a
[Next.js](https://nextjs.org/) application.

## Prerequisites

- Docker (tested with version 20.10.10, build b485636); only needed if running
  end-to-end tests.
- NodeJS (tested with v16.14.0)
- Yarn (tested with 1.22.18)

## Getting Started

1. Clone the repository.
2. Sign in to the private package repository using `yarn co:login`.
3. Install project modules using `yarn install`.
4. Create `.env.local` file. Fill it with variables from `env.example` and
   specify values for them in your local env file.
5. Run the development server:
   ```bash
   yarn dev
   ```
6. Open [http://localhost:3002](http://localhost:3002) with your browser to see
   the result.

## Available Tasks

- `build` - Perform a complete build with type checking.
- `clean` - Remove generated files and build artifacts.
- `co:login` - Sign in to the private package repository.
- `dev` - Start the development server.
- `lint` - Run static code analysis.
- `start` - Start a NextJs production server.
- `test:integration` - Run integration tests using Cypress.
