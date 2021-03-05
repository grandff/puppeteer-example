// 참고 url https://velog.io/@jinuku/Puppeteer%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%9B%B9-%ED%81%AC%EB%A1%A4%EB%A7%81-%ED%95%B4%EB%B3%B4%EA%B8%B0-%EC%98%88%EC%A0%9C-1
// 추가 개발용 참고 url https://velog.io/@jehjong/nodejs-%ED%81%AC%EB%A1%A4%EB%A7%81-2%EC%9E%A5.-puppeteer-%ED%81%AC%EB%A1%A4%EB%A7%81

const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

(async() => {
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
})();