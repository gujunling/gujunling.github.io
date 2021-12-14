#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github
echo 'blog.sweetheartjq.com' > CNAME
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:gujunling/myweb-frontend.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://gujunling:${GITHUB_TOKEN}@github.com/gujunling/myweb-frontend.git
  git config --global user.name "gujunling"
  git config --global user.email "gujunq1998@163.com"
fi
git init
git remote add origin git@github.com:gujunling/myweb-frontend.git
git branch -M main
git add -A
git commit -m "${msg}"
git push -u $githubUrl main:gh-pages # 推送到github


cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist
