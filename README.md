# wcat command line tool💛
**_used to display file contents as well as numbering the lines in the file.._**

`PS: "wcat" does not changes the original file`

## Commands
```
wcat "filePath/filePaths" --> displays the content of file/files.
wcat -s "filePath/filePaths" --> displays the content by concatnating the in between spaces.
wcat -n "filePath/filePaths" --> displays the content by appending the numbers to each line regardless they are empty.
wcat -b "filePath/filePaths" --> displays the content in a file by appending numbers to line which are non-empty.

```

## installation

1. install **[NodeJs](https://nodejs.org/en/download/)** if not available.

2. after installation, clone this **[package](https://github.com/the-coded-bit/wcat-command-line.git)**.

3. open the folder where you cloned this repositry, type **`npm link`**.

               you are now set to use wcat as command.....