const sw=require('remove-stopwords');
const fs=require("fs");
const stemmer=require('./stemmer');
module.exports=function(){
    //reading json file
    let jsonFile = fs.readFileSync(__dirname+'/book.json');
    let book = JSON.parse(jsonFile);
    //tokenizing context of all documents
    const allTokens=[];
    for(let i=0;i<book.length;i++)
    {
        const tokenContext=book[i].context.split(" ");
        allTokens.push({"DocId":i,"context":sw.removeStopwords(tokenContext)});//remove stopwords
    }
    //toLowerCase tokens and remove ',' and '.' from tokens
    for(let i=0;i<allTokens.length;i++)
    {
        for(let j=0;j<allTokens[i].context.length;j++)
        {
            allTokens[i].context[j]=allTokens[i].context[j].replace('.','').replace(',','').toLowerCase();
        }
    }
    stemmer(allTokens);
}