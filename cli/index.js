#!/usr/bin/env node

import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import prompts from 'prompts';
import { red, green, white, yellow } from 'kolorist';

const error = (msg) => console.log(red(msg));
const success = (msg) => console.log(green(msg));
const info = (msg) => console.log(white(msg));
const warn = (msg) => console.log(yellow(msg));

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const cwd = process.cwd();
const argv = process.argv;

init();

async function init() {
  try {
    let projectName = argv[2];

    if (!projectName) {
      const res = await prompts({
        type: 'text',
        name: 'name',
        message: '请输入简历名称',
        initial: 'my-resume'
      });

      projectName = res.name;
    }
    if (!projectName) return;

    const templateDir = resolve(__dirname, '../');
    const targetDir = resolve(cwd, projectName);

    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir);
    } else {
      error(`文件夹[${projectName}]已存在`);
      return;
    }

    copy(templateDir, targetDir);

    success('\n简历创建完成');
    warn(`\n编写简历，请运行：\n`);
    info(`  cd ${projectName}`);
    info('  pnpm install');
    info('  pnpm run dev');
  } catch (error) {
    console.error(error);
  }
}

function copy(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    copyDir(src, dest);
  } else {
    fs.copyFileSync(src, dest);
  }
}

function copyDir(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true });
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = resolve(srcDir, file);
    const destFile = resolve(destDir, file);
    copy(srcFile, destFile);
  }
}
