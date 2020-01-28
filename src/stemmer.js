const stem = require('stem-porter');
const sorter=require('./sorter');
module.exports=function(objTokens)
{
    for(let i=0;i<objTokens.length;i++)
    {
        for(let j=0;j<objTokens[i].context.length;j++)
        {
            objTokens[i].context[j]=stem(objTokens[i].context[j]);
        }
    }
  sorter(objTokens);
}