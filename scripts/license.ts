/**
 * @license
 * Copyright 2024 ascen
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import fs from "fs";
import { join } from "path";
import { globSync } from "glob";

const licenseHeader = fs.readFileSync(
    join(__dirname, "./license.txt"),
    "utf-8",
);

const copyrightPattern = /Copyright \d{4} ascen/;
const globPattern = "+(scripts|apps)/**/*.+(ts|mjs|cjs|js|tsx|jsx)";

async function readFiles(paths: string[]) {
    const fileContents = paths.map((path) => fs.readFileSync(path, "utf-8"));
    return fileContents.map((text, idx) => ({
        contents: text,
        path: paths[idx],
    }));
}

function addLicenseTag(contents: string) {
    const lines = contents.split("\n");
    let newLines: string[] = [];
    for (const line of lines) {
        if (line.match(copyrightPattern)) {
            const indent = line.split("*")[0]; // Get whitespace to match
            newLines.push(indent + "* @license");
        }
        newLines.push(line);
    }
    return newLines.join("\n");
}

export async function doLicense(write: boolean): Promise<boolean> {
    let count = 0;

    const filesToChange: string[] = globSync(globPattern, {
        ignore: ["**/node_modules/**", "./node_modules/**", "**/dist/**"],
    });

    console.log(`Validating license headers in ${filesToChange.length} files.`);
    const files = await readFiles(filesToChange);

    await Promise.all(
        files.map(({ contents, path }) => {
            let result = contents;

            // Files with no license block at all.
            if (result.match(copyrightPattern) == null) {
                result =
                    licenseHeader.replace(
                        String(new Date().getFullYear() - 1),
                        String(new Date().getFullYear()),
                    ) + result;
                console.log(`Adding license to ${path}.`);
            }

            // Files with no @license tag.
            if (result.match(/@license/) == null) {
                result = addLicenseTag(result);
                console.log(`Adding @license tag to ${path}.`);
            }

            if (contents !== result) {
                count++;
                if (write) {
                    fs.writeFileSync(path, result, "utf-8");
                    console.log(`[INSERTED] ${path}.`);
                }
            } else {
                return Promise.resolve();
            }
        }),
    );
    if (count === 0) {
        console.log(`No files needed license changes.`);
        return false;
    } else {
        console.log(`[SUCCESS] ${count} files had license headers updated.`);
        return true;
    }
}

// #!/usr/bin/env node

// const fs = require("fs");
// const path = require("path");

// const data = {
//     companyName: '"ascen"',
//     year: new Date().getFullYear(),
//     prevYear: new Date().getFullYear() - 1,
//     additionalInfo:
//         "This file is part of the ascen project.\nUnauthorized copying of this file, via any medium, is strictly prohibited.\nProprietary and confidential.",
// };

// // const copyrightNotice = `\/*\nCopyright © ${data.year} ${data.companyName}.\nAll rights reserved.\n${data.additionalInfo}\n*\/\n\n`;
// const copyrightNotice = `/**\n  * Copyright © ${data.year} ${data.companyName}.\n  * All rights reserved.\n\n${data.additionalInfo
//     .trim()
//     .split("\n")
//     .map((line) => `  * ${line.trim()}`)
//     .join("\n")}\n  */\n\n`;

// const copyrightNoticePrevYear = `/**\n  * Copyright © ${data.prevYear} ${data.companyName}.\n  * All rights reserved.\n\n${data.additionalInfo
//     .trim()
//     .split("\n")
//     .map((line) => `  * ${line.trim()}`)
//     .join("\n")}\n  */\n\n`;

// const validExtensions = [".tsx", ".ts", ".jsx", ".js"];
// const ignoreFolders = ["node_modules", "dist", "build"];

// function addCopyrightToFile(filePath) {
//     let fileContent = fs.readFileSync(filePath, "utf8");
//     if (fileContent.startsWith(copyrightNotice)) {
//         console.log(
//             `Copyright already present for the current year in: ${filePath}`,
//         );
//     } else {
//         if (fileContent.startsWith(copyrightNoticePrevYear)) {
//             fileContent = fileContent.replace(copyrightNoticePrevYear, "");
//             console.log(`Removed previous year's copyright from: ${filePath}`);
//         }
//         const newContent = copyrightNotice + fileContent;
//         fs.writeFileSync(filePath, newContent, "utf8");
//         console.log(`Added current year's copyright to: ${filePath}`);
//     }
// }

// function processDirectory(directory) {
//     fs.readdirSync(directory).forEach((file) => {
//         const fullPath = path.join(directory, file);
//         if (fs.lstatSync(fullPath).isDirectory()) {
//             if (!ignoreFolders.includes(file)) {
//                 processDirectory(fullPath);
//             }
//         } else if (validExtensions.some((ext) => fullPath.endsWith(ext))) {
//             addCopyrightToFile(fullPath);
//         }
//     });
// }

// const rootDirectory = path.resolve(__dirname, "../apps");
// console.log(`Processing directory: ${rootDirectory}`);
// processDirectory(rootDirectory);
