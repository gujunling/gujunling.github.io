#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e


githubUrl=`git@github.com:gujunling/gujunling.github.io.git` # git提交地址，也可以手动设置，比如：push_addr=git@github.com:xugaoyi/vuepress-theme-vdoing.git
commit_info=`来自github actions的自动部署`
dist_path=docs/.vuepress/dist # 打包生成的文件夹路径
push_branch=gh-pages # 推送的分支

# 生成静态文件
npm run build

# 进入生成的文件夹
cd $dist_path

git init
git remote add origin git@github.com:gujunling/gujunling.github.io.git
git branch -M main
git add -A
git commit -m "deploy, ${commit_info}"
git push -f $githubUrl main:$push_branch # 推送到github


cd - # 退回开始所在目录
rm -rf $dist_path
