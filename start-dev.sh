#!/bin/bash

# Kill any existing node processes
echo "🔪 Killing existing processes..."
pkill -f "node|tsx|vite" || true
sleep 2

# Clear any port conflicts
echo "🧹 Clearing ports..."
lsof -ti:5000 | xargs kill -9 2>/dev/null || true
lsof -ti:5173 | xargs kill -9 2>/dev/null || true
sleep 1

# Start the development server
echo "🚀 Starting development server..."
cd /home/nando/fbfinal

# Export environment variables
export NODE_ENV=development
export PORT=5000

# Run the dev server
npm run dev