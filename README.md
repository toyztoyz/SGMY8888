# 偉人人物誌網站

這是一個多頁式 React 架構，用於製作單一位原創偉人的人物形象官網。網站目前已先放入佔位資料，之後可以直接替換成你的人設、團隊與作品內容。

## 頁面

- 首頁：背景圖、人物剪影、名言、入口按鈕
- 人物故事：卡片區塊，可點擊展開細節
- 成就介紹：成就卡片，可點擊展開細節
- 團隊介紹：橫向滑動成員卡片
- 作品 / 貢獻：輪播與卡片列表
- 結語：名言與收束段落

## 主要資料位置

所有佔位內容集中在：

```txt
src/data/siteData.js
```

你可以先從這個檔案替換：

- 網站標題
- 首頁名言
- 背景圖網址
- 人物故事卡片
- 成就資料
- 團隊成員資料
- 作品與貢獻資料

## 元件拆分

```txt
src/components/
  Navbar.jsx
  Footer.jsx
  HeroSection.jsx
  PageHero.jsx
  ExpandableCard.jsx
  HorizontalScroller.jsx
  ImageCarousel.jsx

src/pages/
  Home.jsx
  Story.jsx
  Achievements.jsx
  Team.jsx
  Works.jsx
  Conclusion.jsx
```

## 啟動方式

安裝依賴：

```bash
pnpm install
```

啟動開發伺服器：

```bash
pnpm run dev
```

建立正式版：

```bash
pnpm run build
```

## UI 與 RWD

主要樣式在：

```txt
src/styles/global.css
```

目前已包含：

- 米白棕色系
- 紀錄片感首頁
- 手機版漢堡選單
- 平板雙欄卡片
- 桌機三欄卡片
- 團隊卡片橫向滑動
- 基礎淡入滑動動畫
