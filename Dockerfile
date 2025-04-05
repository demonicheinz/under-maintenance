# Step 1: Build stage
FROM node:20-alpine AS builder

# Set workdir
WORKDIR /app

# Install PNPM
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install deps
RUN pnpm install

# Copy the rest of the project
COPY . .

# Build the app
RUN pnpm build

# Step 2: Production image
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Install PNPM again
RUN npm install -g pnpm

# Copy only necessary files from builder
COPY --from=builder /app ./

# Install only production deps (optional if needed)
RUN pnpm install --prod

# Expose port
EXPOSE 3000

# Start the app
CMD ["pnpm", "start"]
