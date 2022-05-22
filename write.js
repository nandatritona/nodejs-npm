import fs from "fs";
// File System (fs)

export const writeTofile = (file, content) => {
    fs.writeFileSync(file, content);
}