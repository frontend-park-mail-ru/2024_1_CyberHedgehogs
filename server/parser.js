import fs from "fs";
import process from "process";

const searchSubstring = 'id="root">';
const rootPath = process.cwd() + "/public/index.html";
const pagesPath = process.cwd() + "/src/pages/";

function makeFileList(path) {
    let res = [];
    try {
        res = fs
            .readdirSync(path, { withFileTypes: true })
            .filter((dirent) => dirent.isDirectory())
            .map((dir) => ({
                id: dir.name,
                path: path + dir.name + "/index.html",
            }));
    } catch (error) {
        return [];
    }
    return res;
}

function parsePages() {
    const filesPathes = makeFileList(pagesPath);
    const htmlData = [];

    filesPathes.forEach((fObj) => {
        try {
            const data = fs.readFileSync(fObj.path, "utf8");
            htmlData.push({ id: fObj.id, data });
        } catch (error) {
            htmlData.push("Error reading file!");
        }
    });

    const res = htmlData.map((hObj) => `<div id=${hObj.id}>${hObj.data}</div>`);

    return res.join("\n");
}

export function makeFinalPage() {
    try {
        const mainPage = fs.readFileSync(rootPath, "utf8");
        const startIdx =
            mainPage.indexOf(searchSubstring) + searchSubstring.length;
        const pages = parsePages();

        return (
            mainPage.slice(0, startIdx) + pages + mainPage.slice(startIdx)
        );
    } catch (error) {
        return "Error while parsing main page!";
    }
}
