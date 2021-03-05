const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

const getHotel = async () => {
    console.log("fuck ya")
    // browser 오픈
    const browser = await puppeteer.launch({
        headless : false
    });

    // 새로운 페이지 열기
    const page = await browser.newPage();

    // 페이지 크기 설정
    await page.setViewport({
        width : 1366,
        height : 768
    });

    await page.goto("https://www.goodchoice.kr/product/search/2");

    // html 가져오기
    const content = await page.content();
    // $에 cheerio 로드
    const $ = cheerio.load(content);
    const lists = $("#poduct_list_area > li");

    // 리스트 순회
    lists.each((index, list) => {
        const name = $(list).find("a > div > div.name > strong").text();
        console.log({
            index, name
        });        
    });

    // 브라우저 종료
    browser.close();
}