## Webpack Starters for reference

A collection of different Webpack setups for quick referencing or starting from.

Each branch has a different setup for the named purpose, such as typescript showing a TypeScript variation.

NOTE: Typically the dist or public folder is ignored in git, but for demonstrations purposes I've left it tracked.

## Start using for a new project, or playground

1. Clone the repo
2. Select the branch you want
3. Run npm i to install dependencies
   4 Run one of the following commands, depending on intent:

## Production Build

npm run build

## Development Build

npm run build-dev

## Development Build, watching for file changes

npm run watch

## Development Server on port :8080

npm start

## See output without browser

After running a build command, you can see the output without opening a browser by running:
node dist/main.js

## Видео эх сурвалж ба бусад

https://www.youtube.com/watch?v=xuB1Id2Wxak

## netlify Demo

1. github с кодоо авч байгаа Нэтлифай дээр байгаа вэбсайт
2. https://app.netlify.com/sites/vigilant-jepsen-6945ee/overview

## Master branch

1. git init: өөрийн компьютерт (local) шинээр Git repository үүсгэж өгнө.
2. github дээр new repository үүсгэж өгнө public аар үүсгэж өгнө url хаягыг хуулна
3. git remote add origin https://github.com/batbatark/gbazaar.git (Git repository шинээр үүсгэсэн хаягаа зааж өгнө)
4. git pull origin master (github дээр байгаа бүх файлыг өөрийн local комьпютэрт хуулж өгнө өөрөөр хэлбэл өөрийн local repo г шинэчилж байна)
5. git status: одоогийн байдал
6. git add -A бүх файлыг git д үүсгэж өгнө (git add <app.js> - заасан app.js файлыг git д үүсгэж өгнө)
7. git commit -a -m: 'local repository дээр файлуудаа хуулсан'
8. git push origin master (local repository дээр байгаа файлыг www.github.com сэрвэр дээр хуулна)

## Branch тай ажиллах

1. git branch (Өөрийн комп байгаа бүх салбар branch уудыг харах)
2. git branch backend01 (Өөрийн комп backend01 нэртэй нэг branch үүсгэлээ)
3. pwd: current folder
4. git checkout backend01 (backend01 нэртэй branch дээр шилжлээ Өөрийн комп)
5. git merge backend01 (backend01 нэртэй branch ийг нэгтгэлээ анхаарах нь merge хийхдээ backend01 салбарыг нэгтгэж байгаа салбардаа шилжсэн байх шаардлагатай)
6. ls өөрийн branch дээр байгаа файлуудыг харах

## Rebasing нь өөр нэг төрлийн merging (нэгтгэх) git pull болон git fetch ялгаа нь git pull нь таны master branch д хуулагддаг (git pull = git fetch+ git merge) rebase хийх нь маш ойлгомжтой түүхийг харах боломжтой болно

1. git checkout backend01 (backend01 нэртэй branch дээр шилжлээ Өөрийн комп)
2. git checkout master (master нэртэй branch дээр шилжлээ Өөрийн комп)
3. git checkout backend01 (backend01 нэртэй branch дээр шилжлээ Өөрийн комп)
4. git rebase master (backend01 нэртэй branch ийг master branch д шинэчилж байрлууллаа)
5. git checkout master (master нэртэй branch дээр шилжлээ Өөрийн комп)
6. git rebase backend01 ((backend01 нэртэй branch ийг шинэчилж байрлууллаа
7. rebase хийгдэж дууслаа

## git push

1. ssh-keygen
2. y
3. Your public key has been saved in /C/users/reshma/..ssh/id_rsa.pub
4. cat /C/users/reshma/..ssh/id_rsa.pub
5. go to github account->setting-> SSH and GPG keys-> New SSH key
6. copy the genereated key and paste it
7. in your terminal window ssh -T git@github.com
8. git checkout backend01
9. git push origin backend01

## GIT keywords

a. cd: төсөл хооронд шилжих
b. git remote -v: ямар хаяг руу зааж байгааг харах
c. git clone + url хаягыг хуулаад өөрийн local repo луу хуулна www.github.com сайтаас харгалзах repository фолдер луу ороод clone or download аас url хаягыг хуулна
d. git remote set-url origin: ямар хаягаар солих вэ? гэдгийг зааж өгнө git remote set-url origin +УРЛ хаягаа залгуулж бичнэ
e. git config --list --show-origin
f. code . визуал басик эдиторыг дуудах
