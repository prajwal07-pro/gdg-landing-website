#!/usr/bin/env node
import { exec } from 'child_process';
import { promisify } from 'util';
import chalk from 'chalk';

const execAsync = promisify(exec);

async function deploy() {
  console.log(chalk.blue('🚀 Starting deployment process...\n'));

  try {
    // Run tests
    console.log(chalk.yellow('📝 Running tests...'));
    await execAsync('npm run test');
    console.log(chalk.green('✅ Tests passed\n'));

    // Lint code
    console.log(chalk.yellow('🔍 Linting code...'));
    await execAsync('npm run lint');
    console.log(chalk.green('✅ Linting passed\n'));

    // Build for production
    console.log(chalk.yellow('🏗️  Building for production...'));
    await execAsync('npm run build');
    console.log(chalk.green('✅ Build completed\n'));

    // Deploy to Firebase
    console.log(chalk.yellow('🔥 Deploying to Firebase...'));
    await execAsync('firebase deploy');
    console.log(chalk.green('✅ Deployment successful!\n'));

    console.log(chalk.green.bold('🎉 Deployment completed successfully!'));
  } catch (error) {
    console.error(chalk.red('❌ Deployment failed:'), error.message);
    process.exit(1);
  }
}

deploy();
