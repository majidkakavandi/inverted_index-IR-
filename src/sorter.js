
module.exports=function(objTokens){
    const organizedTokens=[];
    //create an array of elements with this format  ==>  {term:"razi",DocID:1}
    for(let i=0;i<objTokens.length;i++)
    {
        for(let j=0;j<objTokens[i].context.length;j++)
        {
            organizedTokens.push({"term":objTokens[i].context[j],"DocId":objTokens[i].DocId});
        }
    }
    
    //sort organizedTokens
    organizedTokens.sort((a,b)=>(a.term > b.term) ? 1 : -1);

    //console.log(organizedTokens);
    let finalFormat=[];//a array of objects for display output
    //create finalFormat where that is an array of elements with this format  ===>  {term:"",sequence:[]frequency:"",postingList:[]}
    for(let i=0;i<organizedTokens.length;i++)
    {
        let tempObject=organizedTokens[0];
        organizedTokens.splice(0,1);
        let tempSequence=[];
        tempSequence.push(tempObject.DocId);
        for(let j=0;j<organizedTokens.length;j++)
        {
            if(tempObject.term==organizedTokens[j].term)
            {
                tempSequence.push(organizedTokens[j].DocId);
                organizedTokens.splice(j,1);
                j=-1;
            }
        }
        finalFormat.push({term:tempObject.term,sequence:tempSequence.sort(),frequency:tempSequence.length,postingList:[...new Set(tempSequence)].sort()});
    }
    console.log(finalFormat);
}