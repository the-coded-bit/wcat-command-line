#!/usr/bin/env node


const process = require('process');
const fs = require('fs');
const path = require('path');

//take the input from command line
let inputArr = process.argv.slice(2);

//indentify between options and filePaths
let options = [], filePaths = [];
inputArr.forEach(element => {
    if(element.charAt(0) === '-')
        options.push(element.charAt(1));
    else
        filePaths.push(element);    
});

//check if only filename given and no options
if(options.length === 0){
    displayContent(filePaths);
}
else{
    switch(options[0]){
        case 's': optionS(filePaths);
                   break;
        case 'b': optionB(filePaths);
                    break;
        case 'n': optionN(filePaths);
                   break;
    }
}

// implementing option '-b'
function optionB(filePaths){
    let a = 1;
    for(let i = 0; i < filePaths.length; i++){
        let content = '';
        try {
            let isFile = fs.statSync(filePaths[i]).isFile();
            if(isFile){
                content += fs.readFileSync(filePaths[i]);            
                let split = content.split('\n');
                // console.log(split);
                for(let i = 0; i < split.length; i++){
                    if(split[i] != '\r') 
                        console.log(a  + ' '+split[i]);
                    else
                        console.log(split[i]);    
                    a++;
                }
            }
        } catch (error) {
            console.log(filePaths[i], '--> check the file Name again');
        }
    }
}


// implementing option '-n'
function optionN(filePaths){
    let a = 1;
    for(let i = 0; i < filePaths.length; i++){
        let content = '';
        try {
            let isFile = fs.statSync(filePaths[i]).isFile();
            if(isFile){
                content += fs.readFileSync(filePaths[i]);            
                let split = content.split('\n');
                for(let i = 0; i < split.length; i++){
                    console.log(a  + ' '+split[i]);
                    a++;
                }
            }
        } catch (error) {
            console.log(filePaths[i], '--> check the file Name again');
        }
    }
}

// implementing option '-s'
function optionS(filePaths) {
    for(let i = 0; i < filePaths.length; i++){
        let content = '';
        try {
            let isFile = fs.statSync(filePaths[i]).isFile();
            if(isFile){
                content += fs.readFileSync(filePaths[i]);            
                let split = content.split('\n\r');
                let str = '';
                split.forEach(element => {
                    str += element;
                });
                console.log(str + '\n');
            }
        } catch (error) {
            console.log(filePaths[i], '--> check the file Name again');
        }
    }
}

//read the content of file i.e a single or multiple files
function displayContent(filePaths){
    for(let i = 0; i < filePaths.length; i++){
        let content = '';
        try {
            let isFile = fs.statSync(filePaths[i]).isFile();
            if(isFile){
                content += fs.readFileSync(filePaths[i]);
                console.log(content);
            }
        } catch (error) {
            console.log(filePaths[i], '--> check the file Name again');
        }
    }
    
}


