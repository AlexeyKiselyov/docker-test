import fs from "fs";

fs.appendFile("/temp/my-file.txt", "Файл создан Node.js", (err) => {
  if (err) throw err;
  console.log("Файл сохранен!");
});

setTimeout(() => console.log("Конец"), 10000);
